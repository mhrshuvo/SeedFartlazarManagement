// import necessary dependencies
import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

// Define SignUpInputType interface
export interface SignUpInputType {
  email: string;
  password: string;
  name: string;
  phone_no: number;
  otp_no: number;
  referral_code: string | undefined;
}

// Function to perform sign-up operation
async function signUp(input: SignUpInputType) {
  // Making a POST request to the sign-up endpoint with provided input
  return http.post(API_ENDPOINTS.REGISTER, input).then((res) => res.data);
}

// Custom hook to handle sign-up mutation using React Query
export const useSignUpMutation = () => {
  // Destructuring necessary functions from useUI hook
  const { authorize, closeModal } = useUI();

  // Using useMutation hook to perform sign-up mutation
  return useMutation((input: SignUpInputType) => signUp(input), {
    // Handling success scenario
    onSuccess: (data) => {
      // Setting authentication token in cookies
      Cookies.set("auth_token", data?.token);
      // Authorizing user
      authorize();
      // Closing modal
      closeModal();
      // Log success message (you can uncomment this line if needed)
      // console.log(data, "User registered successfully");
    },
    // Handling error scenario
    onError: (error: Error) => {
      // Checking if error contains response data
      if ((error as any).response) {
        const { data } = (error as any).response;
        // Handling specific error cases based on response data

        // If the email is already taken
        if (data?.errors?.email) {
          toast.error("Email already taken");
        }
        // If the phone is already taken
        else if (data?.errors?.phone_no) {
          toast.error("Phone already taken");
        }
      } else {
        // Handling network error
        toast.error("Network error");
      }
    },
  });
};
