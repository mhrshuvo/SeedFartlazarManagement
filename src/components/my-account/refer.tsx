import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";
const Refer = () => {
  const [referralCode, setReferralCode] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const shareUrl = `https://www.kiporbo.com/?referral_code=${referralCode}&referral=true`;
  const title = "Use refer code to get discounts";

  useEffect(() => {
    handleReferral();
  }, []);

  const handleReferral = () => {
    setLoading(true); // Set loading to true when making the request
    http
      .get(API_ENDPOINTS.MY_REFERRAL_CODE)
      .then((res) => {
        setReferralCode(res.data.referral_code);
        setLoading(false); // Set loading to false when request completes
      })
      .catch((error) => {
        setError(error); // Capture and handle any errors
        setLoading(false); // Set loading to false on error
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:</p>;
  }

  return (
    <>
      {/* Left side */}
      <div className="md:flex items-center text-center justify-center md:gap-16">
        <div className="max-w-md">
          <img
            src="/assets/images/refer/refer.png"
            className="rounded-lg"
            alt="refer"
          />
        </div>

        {/* Right side */}
        <div className="md:pt-0 pt-7">
          <h2 className="text-2xl font-bold text-black">
            Invite friends, get <br /> 200 TK
          </h2>

          <div>
            <div>
              <h3 className="text-black font-semibold text-1xl mt-5">
                1. Your friend gets Tk 300
              </h3>
              <div className="mt-3">when they sign up using your link</div>
            </div>
            <div>
              <h3 className="text-black font-semibold text-1xl mt-5">
                2. Then you get Tk 200
              </h3>
              <div className="mt-3">Once they place their first order</div>
            </div>
          </div>

          {/* Share link button */}
          <h2 className="font-semibold mt-5">Share your link</h2>
          <div
            onClick={handleReferral}
            className="mt-2 flex items-center justify-center gap-5"
          >
            <FacebookShareButton url={shareUrl} title={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <WhatsappShareButton url={shareUrl} title={title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refer;
