import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import TextArea from "@components/ui/text-area";
import { useCheckoutMutation } from "@framework/checkout/use-checkout";
import Button from "@components/ui/button";
import { useTranslation } from "next-i18next";
import { ReactNode, useEffect, useState } from "react";
import { useCart } from "@contexts/cart/cart.context";
import { useUI } from "@contexts/ui.context";
// import { toast } from "react-toastify";
import { useDelivery } from "@contexts/DeliveryContext";
import axios from "axios";

interface CheckoutInputType {
  // name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  save: boolean;
  note: string;
}

interface CheckoutFormProps {
  coupon: string;
  children?: ReactNode;
}

interface Division {
  id: string;
  name: string;
  // Add other fields if available in the response
}

interface District {
  id: string;
  name: string;
  // Add other fields if available in the response
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ coupon }) => {
  const { items } = useCart();
  const { t } = useTranslation();
  const { mutate: checkout, isLoading } = useCheckoutMutation();
  const { deliveryCharge, setDeliveryCharge } = useDelivery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInputType>();

  const { setModalView, openModal, isAuthorized } = useUI();

  // Division and district
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [divisionId, setDivisionId] = useState<string>("");
  const [districts, setDistricts] = useState<District[]>([]);
  const [districtId, setDistrictId] = useState<string>("");

  const fetch_locations = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}division`
      );
      setDivisions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  ///////////////////////////////

  useEffect(() => {
    fetch_locations();
    fetch(
      `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}division/${
        divisionId ? divisionId : 1
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setDistricts(data.districts);
      });
  }, [divisionId, districtId]);

  // Delivery charge
  if (districtId) {
    if (districtId !== "1") {
      setDeliveryCharge("100");
    } else if (districtId === "1") {
      setDeliveryCharge("60");
    }
  } else {
    setDeliveryCharge("0");
  }

  //submiting the form state to the server.
  const onSubmit = (input: CheckoutInputType) => {
    if (!isAuthorized) {
      setModalView("LOGIN_VIEW_OTP");
      return openModal();
    }

    const order: any = {
      address: input?.address,
      contact_no: input?.phone,
      delivery_charge: deliveryCharge,
      district_id: districtId,
      division_id: divisionId,
      vat: "0",
      product: [],
    };

    // Function to add products to the order
    function addProductToOrder(product: any) {
      const { id, quantity, attributes } = product;

      let _id = id;
      let productId = _id.split(".")[0];

      order.product.push({
        product_id: productId,
        qty: quantity,
        size: attributes?.size,
        color: attributes?.color,
      });
    }

    // Loop through the array of products and add them to the order dynamically
    items.forEach((product) => {
      addProductToOrder(product);
    });

    //if the coupon is available
    if (coupon) {
      order.coupon_code = coupon;
    }

    if (input?.note) {
      order.note = input?.note;
    }

    checkout(order);
  };

  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {t("text-shipping-address")}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col justify-center "
        noValidate
      >
        <div className="flex flex-col space-y-4 lg:space-y-5">
          {/* <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              labelKey="forms:label-name"
              {...register("name")}
              variant="solid"
              errorKey={errors.name?.message}
              className="w-full  mt-2 md:mt-0"
            />
          </div> */}
          <div>
            <Input
              labelKey="forms:label-address"
              {...register("address", {
                required: "forms:address-required",
              })}
              errorKey={errors.address?.message}
              variant="solid"
            />
          </div>

          {/* delivery location */}
          {/* // note Division */}
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label className=" form-label text-sm font-semibold text-gray-600">
                Select division
              </label>
              <select
                name="division"
                onChange={(e) => setDivisionId(e.target.value)}
                className="block w-full mt-1 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Select division"
              >
                <option className="text-gray-900" value="">
                  {/* Select Division */} ----
                </option>
                {divisions &&
                  divisions?.map((optiondivision, id) => (
                    <option key={id} value={optiondivision?.id}>
                      {optiondivision?.name}
                    </option>
                  ))}
              </select>
            </div>
            {/* // note District */}
            <div className="">
              <label className=" form-label text-sm font-semibold text-gray-600">
                {/* Select District */}Select district
              </label>
              <select
                name="district"
                onChange={(e) => setDistrictId(e.target.value)}
                className="block w-full mt-1 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Select Destrict"
              >
                <option className="text-gray-900" value="">
                  {/* Select District */}----
                </option>
                {districts &&
                  districts?.map((option, id) => (
                    <option key={id} value={option.id}>
                      {option?.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              type="tel"
              labelKey="forms:label-phone"
              {...register("phone", {
                required: "forms:phone-required",
              })}
              errorKey={errors.phone?.message}
              variant="solid"
              className="w-full "
            />
          </div>
          {/* <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              labelKey="forms:label-city"
              {...register("city")}
              variant="solid"
              className="w-full lg:w-1/2 "
            />

            <Input
              labelKey="forms:label-postcode"
              {...register("zipCode")}
              variant="solid"
              className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
            />
          </div> */}
          {/* <div className="relative flex items-center ">
            <CheckBox labelKey="forms:label-save-information" />
          </div> */}
          <TextArea
            labelKey="forms:label-order-notes"
            {...register("note")}
            placeholderKey="forms:placeholder-order-notes"
            className="relative pt-3 xl:pt-6"
          />
          <div className="flex w-full">
            <Button
              className="w-full sm:w-auto"
              loading={isLoading}
              disabled={isLoading}
            >
              {t("common:button-place-order")}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
