import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "@components/ui/input";
import Select from "./select";
import { useTranslation } from "react-i18next";
import { RxCross1 } from "react-icons/rx";

interface ProductDetails {
  id: string;
  product_name: string;
  buy_price: string;
  buy_date: string;
  sell_price: string;
  used_status: string;
  condition: string;
}

interface SellFormProps {
  onSellFormChange: (productDetails: ProductDetails[]) => void;
}

const SellForm: React.FC<SellFormProps> = ({ onSellFormChange }) => {
  const { t } = useTranslation("common");

  const generateUniqueId = (): string => {
    return Math.random().toString(36).substr(2, 9);
  };

  const [productDetails, setProductDetails] = React.useState<ProductDetails[]>([
    {
      id: generateUniqueId(),
      product_name: "",
      buy_price: "",
      buy_date: "",
      sell_price: "",
      used_status: "unused",
      condition: "new",
    },
  ]);

  const handleProductChange = (
    id: string,
    key: keyof ProductDetails,
    value: string | Date // Accepts string or Date type for the value
  ) => {
    let formattedValue: string;
    if (key === "buy_date") {
      // If the key is 'buy_date', format the date to YYYY-MM-DD
      if (value instanceof Date) {
        // Extract only the date portion
        formattedValue = value.toISOString().split("T")[0];
      } else {
        formattedValue = value as string;
      }
    } else {
      // If not 'buy_date', use the value as is
      formattedValue = value as string;
    }

    const updatedProductDetails = productDetails.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          [key]: formattedValue,
        };
      }
      return product;
    });
    setProductDetails(updatedProductDetails);
    onSellFormChange(updatedProductDetails);
  };

  const handleAddProduct = () => {
    const newProduct: ProductDetails = {
      id: generateUniqueId(),
      product_name: "",
      buy_price: "",
      buy_date: "",
      sell_price: "",
      used_status: "",
      condition: "",
    };
    setProductDetails([...productDetails, newProduct]);
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProductDetails = productDetails.filter(
      (product) => product.id !== id
    );
    setProductDetails(updatedProductDetails);
    onSellFormChange(updatedProductDetails);
  };

  return (
    <>
      {productDetails.map((product, index) => {
        if (!product) return null; // Check if product is undefined or null
        return (
          <div
            key={product.id}
            className="border bg-gray-100 rounded-md p-4 mb-4 relative"
          >
            <button
              className="absolute top-2 right-4 bg-red-500 p-2 rounded-full text-white  cursor-pointer"
              onClick={() => handleDeleteProduct(product.id)}
            >
              <RxCross1 />
            </button>
            <h3 className="text-lg font-semibold mb-2 ">Product {index + 1}</h3>
            <div className="flex flex-col space-y-4 sm:space-y-5">
              <Input
                labelKey={t("Product Name.title")}
                type="text"
                value={product?.product_name || ""}
                onChange={(e) =>
                  handleProductChange(
                    product.id,
                    "product_name",
                    e.target.value
                  )
                }
                variant="solid"
                className="w-full"
                name={`productName${index}`}
                required
              />
              <Input
                labelKey={t("Buy Price.title")}
                type="number"
                value={product?.buy_price || ""}
                onChange={(e) =>
                  handleProductChange(product.id, "buy_price", e.target.value)
                }
                variant="solid"
                className="w-full"
                name={`buyPrice${index}`}
                required
              />
              <label
                className="font-semibold text-[14px]"
                htmlFor={`buyDate${index}`}
              >
                {t("Buy Date.title")}
              </label>
              <DatePicker
                selected={product?.buy_date ? new Date(product.buy_date) : null}
                onChange={(date: Date | null) => {
                  const formattedDate = date
                    ? date.toISOString().split("T")[0]
                    : ""; // Extract date portion
                  handleProductChange(product.id, "buy_date", formattedDate);
                }}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-primary"
                name={`buyDate${index}`}
                required
                closeOnScroll={true}
                placeholderText={new Date().toLocaleDateString()} // Set placeholder text to current date
              />

              <Input
                labelKey={t("Sell Price.title")}
                type="number"
                value={product?.sell_price || ""}
                onChange={(e) =>
                  handleProductChange(product.id, "sell_price", e.target.value)
                }
                variant="solid"
                className="w-full"
                name={`sellPrice${index}`}
                required
              />
              <Select
                labelKey={t("Used Status.title")}
                value={product?.used_status || ""}
                onChange={(value) =>
                  handleProductChange(product.id, "used_status", value)
                }
                options={[
                  t("unused.title"),
                  t("Once.title"),
                  t("Twice.title"),
                  t("Thrice.title"),
                  t("more_than_three.title"),
                ]}
                className="w-full "
                name={`usedStatus${index}`}
              />
              <Select
                labelKey={t("Condition.title")}
                value={product?.condition || ""}
                onChange={(value) =>
                  handleProductChange(product.id, "condition", value)
                }
                options={[
                  t("New.title"),
                  t("good.title"),
                  t("fair.title"),
                  t("poor.title"),
                ]}
                className="w-full"
                name={`condition${index}`}
              />
            </div>
          </div>
        );
      })}
      <button
        type="button"
        onClick={handleAddProduct}
        className={`bg-green-400 text-white text-center py-2 px-3 rounded-lg w-36 cursor-pointer`}
      >
        <span>{t("Add Product.title")}</span>
      </button>
    </>
  );
};

export default SellForm;
