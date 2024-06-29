import React, { Dispatch, SetStateAction } from "react";
import Input from "@components/ui/input";
import OrganizationInput from "./org-input";
import { useTranslation } from "react-i18next";
import Select from "./select";
import { RxCross1 } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ProductDetails {
  product_name: string;
  buy_date: string;
  used_status: string;
  condition: string;
}

interface DonateFormProps {
  onDonateFormChange: (productDetails: ProductDetails[]) => void;
  organizations: string[];
  selectedOrganization: string;
  setSelectedOrganization: Dispatch<SetStateAction<string>>;
  onUsedStatusChange: (_index: number, value: string) => void;
  onConditionChange: (_index: number, value: string) => void;
}

const DonateForm: React.FC<DonateFormProps> = ({
  onDonateFormChange,
  organizations,
  selectedOrganization,
  setSelectedOrganization,
}) => {
  const [productDetails, setProductDetails] = React.useState<ProductDetails[]>([
    {
      product_name: "",
      buy_date: "",
      used_status: "unused",
      condition: "new",
    },
  ]);
  const { t } = useTranslation("common");

  const handleProductChange = (
    index: number,
    key: keyof ProductDetails,
    value: string | Date // Accepts string or Date type for the value
  ) => {
    let formattedValue: string;
    if (key === "buy_date") {
      // If the key is 'buy_date', format the date to YYYY-MM-DD
      if (value instanceof Date) {
        // Format date to YYYY-MM-DD
        const year = value.getFullYear();
        const month = String(value.getMonth() + 1).padStart(2, "0");
        const day = String(value.getDate()).padStart(2, "0");
        formattedValue = `${year}-${month}-${day}`;
      } else {
        formattedValue = value as string;
      }
    } else {
      // If not 'buy_date', use the value as is
      formattedValue = value as string;
    }

    const updatedProductDetails = productDetails.map((product, idx) => {
      if (idx === index) {
        return {
          ...product,
          [key]: formattedValue,
        };
      }
      return product;
    });
    setProductDetails(updatedProductDetails);
    onDonateFormChange(updatedProductDetails);
  };

  const handleAddProduct = () => {
    setProductDetails([
      ...productDetails,
      {
        product_name: "",
        buy_date: "",
        used_status: "",
        condition: "",
      },
    ]);
  };

  const handleRemoveProduct = (index: number) => {
    const updatedProductDetails = [...productDetails];
    updatedProductDetails.splice(index, 1);
    setProductDetails(updatedProductDetails);
    onDonateFormChange(updatedProductDetails);
  };

  return (
    <>
      <div className="flex flex-col space-y-4 sm:space-y-5">
        <OrganizationInput
          labelKey={t("Where To Donate.title")}
          value={selectedOrganization}
          onChange={setSelectedOrganization}
          options={organizations}
        />
      </div>
      {productDetails.map((product, index) => (
        <div
          key={index}
          className="border bg-gray-100 rounded-sm p-4 mb-4 relative"
        >
          <button
            type="button"
            onClick={() => handleRemoveProduct(index)}
            className="absolute top-2 right-4 bg-red-500 p-2 rounded-full text-white  cursor-pointer"
          >
            <RxCross1 />
          </button>
          <h3 className="text-lg font-semibold mb-2 ">Product {index + 1}</h3>
          <div className="flex flex-col space-y-4 sm:space-y-5">
            <Input
              labelKey={t("Product Name.title")}
              type="text"
              value={product.product_name}
              onChange={(e) =>
                handleProductChange(index, "product_name", e.target.value)
              }
              variant="solid"
              className="w-full"
              name={`productName${index}`}
              required
            />
            <label
              className="font-semibold text-[14px]"
              htmlFor={`buyDate${index}`}
            >
              {t("Buy Date.title")}
            </label>
            <DatePicker
              selected={product.buy_date ? new Date(product.buy_date) : null}
              onChange={(date) =>
                handleProductChange(
                  index,
                  "buy_date",
                  date instanceof Date
                    ? date.toISOString().split("T")[0]
                    : new Date().toISOString().split("T")[0]
                )
              }
              className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-primary"
              name={`buyDate${index}`}
              required
              placeholderText={new Date().toLocaleDateString()}
            />

            <Select
              labelKey={t("Used Status.title")}
              value={product.used_status}
              onChange={(value) =>
                handleProductChange(index, "used_status", value)
              }
              options={[
                t("unused.title"),
                t("Once.title"),
                t("Twice.title"),
                t("Thrice.title"),
                t("more_than_three.title"),
              ]}
              className="w-full"
              name={`usedStatus${index}`}
            />
            <Select
              labelKey={t("Condition.title")}
              value={product.condition}
              onChange={(value) =>
                handleProductChange(index, "condition", value)
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
      ))}
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

export default DonateForm;
