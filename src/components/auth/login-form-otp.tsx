import React, { useState, useEffect, useRef } from "react";
import Input from "@components/ui/input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import Logo from "@components/ui/logo";
import { useTranslation } from "next-i18next";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useUI } from "@contexts/ui.context";

type LoginFormOtpInputs = {
  phone_no: string;
  otp: number;
  fullname?: string;
  email?: string;
};

const LoginFormOtp: React.FC = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm<LoginFormOtpInputs>({
    mode: "onChange",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpMode, setOtpMode] = useState(false);
  const [otpCode, setOtpCode] = useState<string[]>(Array(6).fill(""));
  const [resendTimer, setResendTimer] = useState<number>(120); // 2 minutes in seconds
  const [phoneNumber, setPhoneNumber] = useState<string>(""); // Store entered phone number
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showSignInButton, setShowSignInButton] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));
  const { authorize, closeModal } = useUI();
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const [referralCode, setReferralCode] = useState<string | undefined>(
    undefined
  );

  React.useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("referral_code");
    setReferralCode(code?.toString());
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpSent && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, resendTimer]);

  // Request otp function
  async function handlePhoneVerification() {
    if (otpLoading) return;

    setOtpLoading(true);

    const phoneNo = getValues("phone_no");
    // Make a POST request to the backend to request OTP
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}requestOtp?phone_no=${phoneNo}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if required
          },
          // Add body data if required
          // body: JSON.stringify({}),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setOtpMode(true);
        setOtpSent(true);
        setOtpLoading(false); // Set loading state to false after successful response
        // Reset the OTP timer
        setResendTimer(60);
        // Reset OTP digits
        setOtpCode(Array(6).fill(""));
        // Store entered phone number
        setPhoneNumber(phoneNo);
        // Skipping actual OTP sending
        console.log("Dummy OTP sent");
        inputRefs.current[0]?.focus();
      } else {
        // Handle error response from backend
        console.error("Failed to send OTP:", data.otp_status);
        toast.error(data.otp_status);
        setOtpLoading(false); // Set loading state to false after handling error
      }
    } catch (error) {
      console.error("Failed to send OTP:", error);
      setOtpLoading(false); // Set loading state to false if an error occurs
    }
  }

  // Verify otp function login if old user
  async function handleVerification(e: any) {
    e.preventDefault(); // Prevent default form submission
    setVerificationLoading(true);

    const phoneNo = getValues("phone_no");
    const otp = otpCode.join(""); // Join the digits of OTP array into a single string

    try {
      if (!phoneNo) {
        throw new Error("Phone number is missing.");
      }

      if (!otp) {
        throw new Error("OTP is missing.");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}verifyOtp?phone_no=${phoneNo}&otp=${otp}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to verify OTP");
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (data && data.message) {
          if (data.message === "old user") {
            // Log in the old user
            const loginResponse = await fetch(
              `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}loginWithOtp?phone_no=${phoneNo}&otp=${otp}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (loginResponse.ok) {
              const loginData = await loginResponse.json();
              if (loginData && loginData.token) {
                // Save the token in cookies
                Cookies.set("auth_token", loginData.token);
                toast.success("User logged in successfully", {
                  autoClose: 1500,
                });
                authorize();
                closeModal();
              } else {
                throw new Error("Invalid response from server");
              }
            } else {
              throw new Error("Failed to log in the user: Server Error");
            }
          } else {
            // New user, show additional details
            setShowAdditionalFields(true);
            setShowSignInButton(true); // Show sign in button after verifying OTP for new user
          }
        } else {
          console.error("Failed to verify OTP: Unexpected response format");
          toast.error("Failed to verify OTP");
        }
      } else {
        const responseData = await response.text();
        console.error("Failed", responseData);
        toast.error("Failed to verify OTP");
      }
    } catch (error: any) {
      console.error("Failed to verify OTP:", error.message);
      toast.error(error.message);
    } finally {
      // Set loading state to false after completing the operation
      setVerificationLoading(false);
    }
  }

  // Handle sign in new user
  async function handleSignIn(e: any) {
    e.preventDefault();
    setSignInLoading(true);

    const phoneNo = getValues("phone_no");
    const otp = otpCode.join("");
    const fullname = getValues("fullname");
    const email = getValues("email");

    try {
      let url = `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}loginWithOtp?phone_no=${phoneNo}&otp=${otp}&name=${fullname}&email=${email}`;

      if (showAdditionalFields && referralCode) {
        // If the user is new and a referral code is available, include it in the request
        url += `&referral_code=${referralCode}`;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.token) {
          // Save the token in cookies
          Cookies.set("auth_token", data.token);
          toast.success("User logged in successfully", {
            autoClose: 1500,
          });
          authorize();
          closeModal();
        } else {
          throw new Error("Invalid response from server");
        }
      } else {
        throw new Error("Failed to log in the user: Server Error");
      }
    } catch (error) {
      console.error("Failed to log in the user:", error);
      toast.error("Failed to log in the user: Server Error");
    } finally {
      // Set loading state to false after completing the operation
      setSignInLoading(false);
    }
  }

  const handleChange = (index: number, value: string) => {
    if (!value.match(/[0-9]/)) return;

    setOtpCode((prev) => {
      const otpArray = [...prev];
      otpArray[index] = value;

      // Automatically move to the next input
      if (value.length === 1 && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      return otpArray;
    });
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      setOtpCode((prev) => {
        const otpArray = [...prev];

        // If the current input is empty and not the first one, delete content from the previous input
        if (index > 0 && !otpArray[index]) {
          otpArray[index - 1] = "";
          inputRefs.current[index - 1]?.focus();
        } else {
          otpArray[index] = "";
        }

        return otpArray;
      });

      // If the current input is the first one and empty, keep focus on it
      if (index === 0 && !otpCode[0]) {
        inputRefs.current[index]?.focus();
      }
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const clipboardData = event.clipboardData.getData("Text");

    // Extract only digits from clipboard data
    const pastedDigits = clipboardData.match(/\d/g);

    if (pastedDigits) {
      setOtpCode((prev) => {
        const otpArray = [...prev];
        let currentIndex = inputRefs.current.findIndex(
          (ref) => ref === event.target
        );

        // Paste the pastedDigits into the OTP array starting from the current index
        pastedDigits.forEach((digit, i) => {
          if (currentIndex + i < otpArray.length) {
            otpArray[currentIndex + i] = digit;
          }
        });

        // Move focus to the next input if possible
        currentIndex += pastedDigits.length;
        if (currentIndex < 6) {
          inputRefs.current[currentIndex]?.focus();
        }

        return otpArray;
      });
    }
  };

  const handleResendOTP = () => {
    if (resendTimer <= 0) {
      handlePhoneVerification();
    }
  };

  return (
    <div className="overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8">
      <div className="text-center mb-6 pt-2.5">
        <div>
          <Logo />
        </div>
      </div>
      <form className="flex flex-col justify-center" noValidate>
        <div className="flex flex-col space-y-3.5">
          <Input
            labelKey="forms:label-phone"
            type="phone"
            variant="solid"
            {...register("phone_no", {
              required: `${t("forms:phone-required")}`,
              pattern: {
                value: /^(?:(?:\+|00)88|01)?\d{11}$/,
                message: t("Phone must be 11 digits"),
              },
            })}
            errorKey={errors.phone_no?.message}
          />
          {otpMode && (
            <>
              <p className="text-primary text-[13px]">
                Enter 6 digit code sent to{" "}
                <span className="font-bold">"{phoneNumber}"</span>
              </p>
              <div className="flex justify-between">
                {otpCode.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    className="w-1/6 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={(e) => handlePaste(e)} // Add this line
                    style={{ marginRight: "5px" }}
                  />
                ))}
              </div>
            </>
          )}

          {showAdditionalFields && (
            <>
              <Input
                labelKey="forms:Name"
                variant="solid"
                {...register("fullname", {
                  required: `${t("forms:fullname-required")}`,
                })}
                errorKey={errors.fullname?.message}
              />
              <Input
                labelKey="forms:label-email"
                type="email"
                variant="solid"
                {...register("email", {
                  required: `${t("forms:email-required")}`,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("forms:email-error"),
                  },
                })}
                errorKey={errors.email?.message}
              />
            </>
          )}
          <div className="relative">
            {showSignInButton ? (
              signInLoading ? (
                <Button className="h-11 md:h-12 w-full mt-1.5" disabled>
                  Signing in...
                </Button>
              ) : (
                <Button
                  onClick={handleSignIn}
                  className="h-11 md:h-12 w-full mt-1.5"
                >
                  Sign in
                </Button>
              )
            ) : otpMode ? (
              <>
                <p className="text-primary cur">
                  {resendTimer > 0 ? (
                    `Resend in ${Math.floor(resendTimer / 60)}:${
                      resendTimer % 60 < 10
                        ? `0${resendTimer % 60}`
                        : resendTimer % 60
                    } mins`
                  ) : (
                    <span onClick={handleResendOTP} className="cursor-pointer">
                      Send again
                    </span>
                  )}
                </p>
                {verificationLoading ? (
                  <Button className="h-11 md:h-12 w-full mt-1.5" disabled>
                    Verifying OTP...
                  </Button>
                ) : (
                  <Button
                    onClick={handleVerification}
                    className="h-11 md:h-12 w-full mt-1.5"
                  >
                    Verify OTP
                  </Button>
                )}
              </>
            ) : (
              <Button
                onClick={handlePhoneVerification}
                disabled={!isValid || otpSent || otpLoading}
                className="h-11 md:h-12 w-full mt-1.5"
              >
                {otpLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginFormOtp;
