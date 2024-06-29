import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import Logo from "@components/ui/logo";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";
import { useUI } from "@contexts/ui.context";
import { useSignUpMutation, SignUpInputType } from "@framework/auth/use-signup";
import { ROUTES } from "@utils/routes";

const SignUpForm: React.FC = () => {
  const { t } = useTranslation();
  const { mutate: signUp, isLoading } = useSignUpMutation();
  const { setModalView, openModal, closeModal } = useUI();
  const [otpMode, setOTPMode] = useState(false);
  const [otpCode, setOTPCode] = useState(0);
  const [referralCode, setReferralCode] = useState<string | undefined>(
    undefined
  );
  const [otpLoading, setOtpLoading] = useState(false);
  const otpSentRef = useRef(false);

  React.useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("referral_code");
    setReferralCode(code?.toString());
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<SignUpInputType>({ mode: "onChange" });

  function handleSignIn() {
    setModalView("LOGIN_VIEW");
    openModal();
  }

  async function onSubmit({
    name,
    email,
    password,
    phone_no,
    otp_no,
  }: SignUpInputType) {
    if (otp_no) {
      if (otp_no && otpCode === +otp_no) {
        await signUp({
          name,
          email,
          phone_no,
          password,
          otp_no,
          referral_code: referralCode,
        });
      } else {
        toast("Invalid Verification", {
          type: "error",
          progressClassName: "fancy-progress-bar",
          position: "top-right",
          autoClose: 2000,
        });
      }
    }
  }

  async function handleSendOTP() {
    if (otpSentRef.current || otpLoading) return;
    const emailValue = getValues("email");
    const phoneValue = getValues("phone_no");
    const url = `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}user_check?phone_no=${phoneValue}&email=${emailValue}`;

    try {
      setOtpLoading(true);
      const response = await fetch(url);
      const responseData = await response.json();

      if (responseData.message === "user not found") {
        setOTPMode(true);
        setOTPCode(123456); // Always sending OTP as 123456
        otpSentRef.current = true;
        // Skipping SMS API call
        console.log("Dummy OTP sent:", 123456);
      } else if (responseData.message === "user already exist") {
        toast("User already exists", {
          type: "error",
          progressClassName: "fancy-progress-bar",
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        console.error("Unexpected error message:", responseData.message);
      }
    } catch (error) {
      console.error("Error during request:", error);
    } finally {
      setOtpLoading(false);
    }
  }

  return (
    <div className="py-5 px-5 sm:px-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
      <div className="text-center mb-6 pt-2.5">
        <div onClick={closeModal}>
          <Logo />
        </div>
        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
          {t("common:registration-helper")}{" "}
          <Link
            href={ROUTES.TERMS}
            className="text-heading underline hover:no-underline focus:outline-none"
          >
            {t("common:text-terms")}
          </Link>{" "}
          &amp;{" "}
          <Link
            href={ROUTES.POLICY}
            className="text-heading underline hover:no-underline focus:outline-none"
          >
            {t("common:text-policy")}
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-4">
          <Input
            labelKey="forms:label-name"
            type="text"
            variant="solid"
            {...register("name", {
              required: "forms:name-required",
            })}
            errorKey={errors.name?.message}
          />
          <Input
            labelKey="Email *"
            type="email"
            variant="solid"
            {...register("email", {
              required: `${t("forms:email-required")}`,
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: t("forms:email-error"),
              },
            })}
            errorKey={errors.email?.message}
          />
          <Input
            labelKey="forms:label-phone"
            type="phone"
            variant="solid"
            {...register("phone_no", {
              required: `${t("forms:phone-required")}`,
              pattern: {
                value: /^(?:(?:\+|00)88|01)?\d{11}$/,
                message: t("forms:phone-error"),
              },
            })}
            errorKey={errors.phone_no?.message}
          />
          <PasswordInput
            labelKey="forms:label-password"
            errorKey={errors.password?.message}
            {...register("password", {
              required: `${t("forms:password-required")}`,
            })}
          />
          {otpMode && (
            <>
              <Input
                labelKey="verification code"
                type="phone"
                variant="solid"
                {...register("otp_no")}
              />
              <div className="relative">
                <Button
                  type="submit"
                  loading={isLoading}
                  disabled={!isValid}
                  className="h-11 md:h-12 w-full mt-2"
                >
                  {isLoading ? "loading..." : "Register"}
                </Button>
              </div>
            </>
          )}

          {!otpMode && (
            <div className="relative">
              <Button
                onClick={() => handleSendOTP()}
                loading={otpLoading}
                disabled={!isValid || otpLoading}
                className="h-11 md:h-12 w-full mt-2"
              >
                {otpLoading ? "Sending OTP..." : "Continue"}
              </Button>
            </div>
          )}
        </div>
      </form>
      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        {t("common:text-have-account")}{" "}
        <button
          type="button"
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
          onClick={handleSignIn}
        >
          {t("common:text-login")}
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
