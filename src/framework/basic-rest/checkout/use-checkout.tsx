import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import router from "next/router";
import CryptoJS from "crypto-js";

export interface CheckoutInputType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  save: boolean;
  note: string;
}

const secretKey: any = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

// Function to encrypt data
function encryptData(data: any, secretKey: string): string {
  const dataString = JSON.stringify(data);
  return CryptoJS.AES.encrypt(dataString, secretKey).toString();
}

async function checkout(order: any) {
  try {
    const response = await http.post(API_ENDPOINTS.ORDER, order);
    console.log(response);
    const orderData = response.data;

    // Encrypt the orderData before sending through router
    const encryptedOrderData = encryptData(orderData, secretKey);
    router.push({
      pathname: "/order",
      query: { satellite: encryptedOrderData },
    });

    return orderData;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.errors) {
      const { errors } = error.response.data;
      console.log(errors);
      if (errors.contact_no) {
        showToast("Phone number is invalid");
      }
    }
  }

  function showToast(message: string) {
    toast(message, {
      type: "error",
      progressClassName: "fancy-progress-bar",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
}

export const useCheckoutMutation = () => {
  return useMutation(
    async (order: CheckoutInputType) => {
      const data = await checkout(order);

      // Set the response data in the context

      return data;
    },
    {
      // onSuccess and onError remain the same...
      onSuccess: (data) => {
        console.log(data, "Checkout success response");
      },
      onError: (data) => {
        console.log(data, "Checkout error response");
      },
    }
  );
};
