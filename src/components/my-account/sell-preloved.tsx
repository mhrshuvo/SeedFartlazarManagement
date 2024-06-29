import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@components/ui/input";
import Button from "@components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import SellForm from "@components/sell-pre-loved/sell-form";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import DonateForm from "@components/sell-pre-loved/donate-form";
import { UIContext } from "@contexts/ui.context";
import { useTranslation } from "react-i18next";
import { FaSpinner } from "react-icons/fa";

const organizations = [
  "Organization A",
  "Organization B",
  "Organization C",
  "Organization D",
  "Organization E",
];

interface ProductDetails {
  product_name: string;
  buy_price?: string;
  buy_date?: string;
  sell_price?: string;
  used_status: string;
  condition: string;
}

const SellPreloved: React.FC = () => {
  //translation
  const { t } = useTranslation("common");
  const [contactNo, setContactNo] = useState("");
  const [error, setError] = useState("");
  const [bankDetails, setBankDetails] = useState({
    bank_name: "",
    branch_name: "",
    account_number: "",
    account_name: "",
  });
  const [mfsDetails, setMfsDetails] = useState({
    mobile_banking_name: "",
    phone_no: "",
  });
  const [sellOrDonate, setSellOrDonate] = useState<"sell" | "donate" | null>(
    null
  );
  const [weight, setWeight] = useState("");
  const [note, setNote] = useState("");
  const [productDetails, setProductDetails] = useState<ProductDetails[]>([
    {
      product_name: "",
      used_status: "unused",
      condition: "new",
      sell_price: "",
    },
  ]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [images, setImages] = useState<FileList | null>(null);
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [payoutOption, setPayoutOption] = useState<"bank" | "mfs" | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [, setUsedStatus] = useState<string>("unused"); // Initialize usedStatus state
  const [, setCondition] = useState<string>("new"); // Initialize condition state
  const [isLoading, setIsLoading] = useState(false);

  const { isAuthorized, setModalView, openModal } = useContext(UIContext);

  const handleAuthorization = () => {
    if (!isAuthorized) {
      setModalView("LOGIN_VIEW_OTP");
      openModal();
    }
  };

  const handleChange = (e: any) => {
    const input = e.target.value;
    if (/^\d{0,11}$/.test(input)) {
      setContactNo(input);
      setError(input.length !== 11 ? "Contact number must be 11 digits" : "");
    }
  };

  const handleUsedStatusChange = (_index: number, value: string) => {
    setUsedStatus(value); // Update usedStatus state when used status changes
  };

  const handleConditionChange = (_index: number, value: string) => {
    setCondition(value); // Update condition state when condition changes
  };

  const handleFormChange = (productDetails: ProductDetails[]) => {
    if (productDetails && productDetails.length > 0) {
      // Perform null checks before accessing properties
      const usedStatus = productDetails[0].used_status;
      const condition = productDetails[0].condition;

      // Use the values safely
      setUsedStatus(usedStatus || "");
      setCondition(condition || "");
    }
    setProductDetails(productDetails);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(e.target.files);
    }
  };

  const handleRemoveImage = (index: number) => {
    if (images) {
      const updatedImages = Array.from(images);
      updatedImages.splice(index, 1);

      // Create a new array to hold File objects
      const files: File[] = [];

      // Populate the array with the remaining files
      updatedImages.forEach((file) => {
        files.push(file);
      });

      // Create a new FileList from the array of files
      const newFileList = new DataTransfer();
      files.forEach((file) => {
        newFileList.items.add(file);
      });

      // Set the state with the new FileList
      setImages(newFileList.files);
    }
  };

  // Reset form
  const resetForm = () => {
    setContactNo("");
    setSellOrDonate(null);
    setWeight("");
    setNote("");
    setProductDetails([
      {
        product_name: "",
        used_status: "unused",
        condition: "new",
        sell_price: "",
      },
    ]);
    setAgreedToTerms(false);
    setImages(null);
    setSelectedOrganization("");
    setPayoutOption(null);
    setBankDetails({
      bank_name: "",
      branch_name: "",
      account_number: "",
      account_name: "",
    });
    setMfsDetails({
      mobile_banking_name: "",
      phone_no: "",
    });
    setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAuthorized) {
      // If not authorized, show login modal or take appropriate action
      setModalView("LOGIN_VIEW_OTP");
      openModal();
      return; // Exit the function early
    }

    setIsLoading(true);

    // Validation checks
    if (!sellOrDonate) {
      toast.error("Please select sell or donate option.");
      setIsLoading(false); // Reset isLoading state
      return;
    }

    if (!contactNo || !weight || !agreedToTerms) {
      toast.error("Please fill out all required fields.");
      setIsLoading(false); // Reset isLoading state
      return;
    }

    if (sellOrDonate === "donate" && !selectedOrganization) {
      toast.error("Please select an organization.");
      setIsLoading(false); // Reset isLoading state
      return;
    }

    // Construct FormData object
    const formData = new FormData();
    formData.append("contact_no", contactNo);
    formData.append("want_to_do", sellOrDonate || "");

    // Append product details
    // Append product details
    const productsData: { [key: string]: any }[] = [];
    productDetails.forEach((product) => {
      // Convert Bengali values to English if needed
      let usedStatus = product.used_status;
      let condition = product.condition;
      switch (product.used_status) {
        case "অব্যবহৃত":
          usedStatus = "unused";
          break;
        case "একবার":
          usedStatus = "once";
          break;
        case "দুইবার":
          usedStatus = "twice";
          break;
        case "তিনবার":
          usedStatus = "thrice";
          break;
        case "তিনবারের বেশি":
          usedStatus = "more_than_three";
          break;
      }
      switch (product.condition) {
        case "নতুন":
          condition = "new";
          break;
        case "ভাল":
          condition = "good";
          break;
        case "মোটামুটি":
          condition = "fair";
          break;
        case "খারাপ":
          condition = "poor";
          break;
      }
      // Exclude sell_price and buy_price if donating
      const productData: { [key: string]: any } = {
        product_name: product.product_name,
        buy_date: product.buy_date || "",
        used_status: usedStatus,
        condition: condition,
      };
      if (sellOrDonate === "sell") {
        productData["buy_price"] = product.buy_price || "";
        productData["sell_price"] = product.sell_price || "";
      }
      productsData.push(productData);
    });
    formData.append("products", JSON.stringify(productsData));

    // Append payout_account object as a string
    const payoutAccountData = {
      bank: {
        bank_name: bankDetails.bank_name,
        branch_name: bankDetails.branch_name,
        account_number: bankDetails.account_number,
        account_name: bankDetails.account_name,
      },
      mb: {
        "which mobile banking": mfsDetails.mobile_banking_name,
        phone_no: mfsDetails.phone_no,
      },
    };
    formData.append("payout_account", JSON.stringify(payoutAccountData));

    // Append organization name if donating
    if (sellOrDonate === "donate") {
      formData.append("org_name", selectedOrganization);
    }

    // Append weight and note
    formData.append("weight", weight);
    formData.append("note", note);

    // Append images
    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append(`image[${i}]`, images[i]);
      }
    }

    // Debugging: Log the formData before sending
    console.log("FormData:", formData);

    try {
      // Send the form data to the server
      const response = await http.post(API_ENDPOINTS.PRE_LOVED, formData);

      // Handle success response
      toast.success("Form submitted successfully!");
      console.log(response.data);

      // reset form
      resetForm();
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      layout
      initial="from"
      animate="to"
      exit="from"
      //@ts-ignore
      variants={fadeInTop(0.35)}
      className={`w-full flex flex-col`}
    >
      <ToastContainer />
      <h2
        className={`text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8 text-center cursor-pointer ${
          !isAuthorized && "hover:underline"
        }`}
        onClick={handleAuthorization}
      >
        {isAuthorized
          ? t("Sell your pre-loved.title")
          : t("Please login to continue.title")}
      </h2>

      <form
        className={`w-full md:w-[500px] mx-auto flex flex-col justify-center`}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col space-y-4 sm:space-y-5">
          <Input
            labelKey={t("Contact Number.title")}
            type="tel"
            variant="solid"
            className="w-full"
            value={contactNo}
            onChange={handleChange}
            name=""
            required
          />
          {error && (
            <div className="error text-red-500 text-[14px]">{error}</div>
          )}

          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="sell"
                checked={sellOrDonate === "sell"}
                onChange={(e) =>
                  setSellOrDonate(e.target.value as "sell" | "donate")
                }
                className="form-radio text-primary focus:ring-0"
                required
              />
              <span className="ml-2 px-3 py-1 rounded-lg cursor-pointer">
                {t("Sell.title")}
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="donate"
                checked={sellOrDonate === "donate"}
                onChange={(e) =>
                  setSellOrDonate(e.target.value as "sell" | "donate")
                }
                className="form-radio text-primary focus:ring-0"
                required
              />
              <span className="ml-2 px-3 py-1 rounded-lg cursor-pointer">
                {t("Donate.title")}
              </span>
            </label>
          </div>
          {sellOrDonate === "sell" && (
            <SellForm onSellFormChange={handleFormChange} />
          )}

          {sellOrDonate === "donate" && (
            <DonateForm
              organizations={organizations}
              onDonateFormChange={handleFormChange}
              setSelectedOrganization={setSelectedOrganization}
              selectedOrganization={selectedOrganization}
              onUsedStatusChange={handleUsedStatusChange} // Pass handleUsedStatusChange as a prop
              onConditionChange={handleConditionChange} // Pass handleConditionChange as a prop
            />
          )}
          {sellOrDonate === "sell" && (
            <div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 cursor-pointer">
                  {t("Payout Option.title")}
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="bank"
                      checked={payoutOption === "bank"}
                      onChange={(e) =>
                        setPayoutOption(e.target.value as "bank")
                      }
                      className="form-radio text-primary focus:ring-0"
                      required
                    />
                    <span className="ml-2 px-3 py-1 rounded-lg cursor-pointer">
                      {t("Bank.title")}
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="mfs"
                      checked={payoutOption === "mfs"}
                      onChange={(e) => setPayoutOption(e.target.value as "mfs")}
                      className="form-radio text-primary focus:ring-0"
                      required
                    />
                    <span className="ml-2 px-3 py-1 rounded-lg cursor-pointer">
                      {t("Mobile Banking.title")}
                    </span>
                  </label>
                </div>
              </div>
              {payoutOption === "bank" && (
                <div className="border bg-gray-100 rounded-md p-4 mb-4 flex flex-col space-y-4 sm:space-y-5">
                  <Input
                    labelKey={t("Bank Name.title")}
                    type="text"
                    variant="solid"
                    className="w-full"
                    value={bankDetails.bank_name}
                    onChange={(e) =>
                      setBankDetails({
                        ...bankDetails,
                        bank_name: e.target.value,
                      })
                    }
                    name={""}
                    required
                  />
                  <Input
                    labelKey={t("Branch Name.title")}
                    type="text"
                    variant="solid"
                    className="w-full"
                    value={bankDetails.branch_name}
                    onChange={(e) =>
                      setBankDetails({
                        ...bankDetails,
                        branch_name: e.target.value,
                      })
                    }
                    name={""}
                    required
                  />
                  <Input
                    labelKey={t("Account Number.title")}
                    type="number"
                    variant="solid"
                    className="w-full"
                    value={bankDetails.account_number}
                    onChange={(e) =>
                      setBankDetails({
                        ...bankDetails,
                        account_number: e.target.value,
                      })
                    }
                    name={""}
                    required
                  />
                  <Input
                    labelKey={t("Account Name.title")}
                    type="text"
                    variant="solid"
                    className="w-full"
                    value={bankDetails.account_name}
                    onChange={(e) =>
                      setBankDetails({
                        ...bankDetails,
                        account_name: e.target.value,
                      })
                    }
                    name={""}
                    required
                  />
                </div>
              )}
              {payoutOption === "mfs" && (
                <div className="border bg-gray-100 rounded-md p-4 mb-4 flex flex-col space-y-4 sm:space-y-5">
                  <label className="block text-sm font-medium text-gray-700">
                    {t("Mobile Banking Name.title")}
                  </label>
                  <select
                    className="block w-full mt-1 border-gray-300 p-2 outline-none rounded-md"
                    value={mfsDetails.mobile_banking_name}
                    onChange={(e) =>
                      setMfsDetails({
                        ...mfsDetails,
                        mobile_banking_name: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Mobile Banking</option>
                    <option value="Bkash">Bkash</option>
                    <option value="Nagad">Nagad</option>
                    <option value="Rocket">Rocket</option>
                  </select>
                  <Input
                    labelKey={t("Phone Number.title")}
                    type="number"
                    variant="solid"
                    className="w-full"
                    value={mfsDetails.phone_no}
                    onChange={(e) =>
                      setMfsDetails({ ...mfsDetails, phone_no: e.target.value })
                    }
                    name={""}
                    required
                  />
                </div>
              )}
            </div>
          )}

          {/* Image upload */}
          <div className="mt-4">
            <label
              htmlFor="file-upload"
              className="block text-sm font-medium text-gray-700 cursor-pointer"
            >
              Upload Images
            </label>
            <div
              className="mt-2 border-2 border-green-300 border-dashed rounded-md cursor-pointer"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <div className="flex flex-col items-center justify-center p-6 space-y-1">
                <svg
                  className="mx-auto h-12 w-12 text-green-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M23 25v8h-6v-8H8v-6h9V9h6v8h9v6h-9z"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <span>Select a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleImageChange}
                    accept="image/*"
                    multiple // Enable multiple file selection
                  />
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            {images && (
              <div className="mt-2 grid grid-cols-3 gap-2">
                {Array.from(images).map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      className="absolute top-0 right-0 mt-1 mr-1 p-1 bg-red-500 text-white rounded-full text-xs"
                      onClick={() => handleRemoveImage(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Input
            labelKey={t("Weight KG.title")}
            type="number"
            variant="solid"
            className="w-full"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            name={""}
            required
          />
          <Input
            labelKey={t("Note.title")}
            type="text"
            variant="solid"
            className="w-full"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            name={""}
          />
          <div className="mt-6 flex items-center space-s-6">
            <label className="text-gray-700 flex items-center">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="form-checkbox text-gray-700 focus:ring-0 rounded-full"
                required
              />
              <span className="ml-2 border-b transition duration-700 border-gray-900">
                <Link href="/terms">
                  {t("I agree with the Terms and Conditions.title")}
                </Link>
              </span>
            </label>
          </div>
          {formError && <p className="text-red-500 mt-2">{formError}</p>}
          <div className="relative">
            <Button
              type="submit"
              className={`h-12 mt-3 w-full sm:w-32`}
              disabled={!agreedToTerms || isLoading}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin mr-2" />
              ) : (
                t("Submit.title")
              )}
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default SellPreloved;
