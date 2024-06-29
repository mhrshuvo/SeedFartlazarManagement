import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
// import Subscription from "@components/common/subscription";
import CheckoutForm from "@components/checkout/checkout-form";
import CheckoutCard from "@components/checkout/checkout-card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import http from "@framework/utils/http";
import Input from "@components/ui/input";
import usePrice from "@framework/product/use-price";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useEffect, useState } from "react";
import { useCart } from "@contexts/cart/cart.context";
import { toast } from "react-toastify";
import { useUI } from "@contexts/ui.context";
import { DeliveryProvider } from "@contexts/DeliveryContext";

export default function CheckoutPage() {
  const { total } = useCart();
  const { price: subtotal } = usePrice({
    amount: total,
  });
  const { setModalView, openModal, isAuthorized } = useUI();

  useEffect(() => {
    if (!isAuthorized) {
      setModalView("LOGIN_VIEW_OTP");
      return openModal();
    }
  }, [isAuthorized]);

  //coupon code
  const cartTotalString = subtotal;
  const cartTotalNumber = parseFloat(cartTotalString.replace(/,/g, ""));

  // const [totalPrice, setTotalPrice] = useState(cartTotalNumber);
  const [discount, setDiscount] = useState(0);

  const [code, setCode] = useState("");
  const [savedCode, setSavedCode] = useState("");

  const [couponApplied, setCouponApplied] = useState(false);

  // Coupon code validation
  // Coupon code validation
  const couponCodeValidation = async () => {
    setSavedCode(code);
    setCode("");
    const couponCode: string = code;

    const couponValidation = {
      coupon_code: couponCode,
      sub_total: cartTotalNumber,
    };

    await http
      .post(API_ENDPOINTS.VERIFY_COUPON_CODE, couponValidation)
      .then((response) => {
        if (
          response?.data?.message === "expired coupon" ||
          response?.data?.message === "coupon does not exist" ||
          response?.data?.message === "failed to verify coupon"
        ) {
          toast("Invalid coupon", {
            type: "error",
            progressClassName: "fancy-progress-bar",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          // Reset coupon code to empty string and set couponApplied to false
          setSavedCode("");
          setCouponApplied(false);
        } else {
          const discount = response.data.discount_amount;
          console.log(response);
          setDiscount(discount);
          setCouponApplied(true);
          toast("Coupon applied successfully", {
            type: "success",
            progressClassName: "fancy-progress-bar",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      })
      .catch(() => {
        toast("Coupon does not exist", {
          type: "error",
          progressClassName: "fancy-progress-bar",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // Reset coupon code to empty string and set couponApplied to false
        setSavedCode("");
        setCouponApplied(false);
      });
  };

  //handling form changes
  const handleInputChange = (event: any) => {
    setCode(event.target.value);
  };

  return (
    <>
      {/* <PageHeader pageHeader="text-page-checkout" /> */}
      <DeliveryProvider>
        <Container>
          <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row w-full gap-8">
            {/* coupon code input form  */}
            <div className="md:w-full lg:w-3/5 md:ms-7 lg:ms-10 xl:ms-14 flex flex-col h-full -mt-1.5">
              <h2 className="text-lg md:text-xl font-bold text-heading mb-2 xl:mb-2 mt-6 md:mt-0">
                Have coupon code?
              </h2>
              <div className="flex items-center justify-center mb-5 gap-5">
                <div className="w-full">
                  <Input
                    labelKey=""
                    value={code}
                    variant="solid"
                    name={""}
                    onChange={handleInputChange}
                    placeholder="Please enter your coupon"
                    disabled={couponApplied}
                    className={`${couponApplied ? "cursor-not-allowed" : ""}`}
                  />
                </div>

                <div>
                  <button
                    onClick={couponCodeValidation}
                    disabled={couponApplied || !code} // Disable if coupon is already applied or if no coupon input
                    className={`flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform duration-1000 bg-heading hover:bg-body px-6 py-[11px] md:mr-7 mr-5 rounded-lg text-white ${
                      couponApplied && !code ? "cursor-not-allowed" : ""
                    }`}
                  >
                    Apply
                  </button>
                </div>
              </div>
              <CheckoutForm coupon={savedCode} />
            </div>
            <div className="md:w-full lg:w-2/5 flex  h-full flex-col -mt-1.5">
              <CheckoutCard discount={discount} couponApplied={couponApplied} />
            </div>
          </div>
          {/* <Subscription /> */}
        </Container>
      </DeliveryProvider>
    </>
  );
}

CheckoutPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
