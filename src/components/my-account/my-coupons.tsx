"use client";

import React, { useState, useEffect } from "react";
import Coupon from "./coupon";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import Cookies from "js-cookie";
import http from "@framework/utils/http";

// Define the structure of a coupon
interface CouponData {
  id: number;
  logoUrl: string;
  discount?: string | null; // Make discount optional
  discount_percent?: string | null; // Make discount_percent optional
  description: string;
  code: string;
  validTill: string;
  coupon_code: string;
  type: string; // Add type property
}

interface CouponState extends CouponData {
  copied: boolean;
}

const MyCoupons: React.FC = () => {
  const [couponStates, setCouponStates] = useState<CouponState[]>([]);

  console.log(couponStates);

  useEffect(() => {
    const authToken = Cookies.get("auth_token");

    if (!authToken) {
      // Handle the case where authentication token is not available
      return;
    }

    http
      .get(API_ENDPOINTS.MY_COUPONS, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        const initialCouponStates: CouponState[] = res.data.map(
          (coupon: CouponData) => ({
            ...coupon,
            copied: false,
          })
        );
        setCouponStates(initialCouponStates);
      })
      .catch((error) => {
        console.error("Error fetching coupons:", error);
      });
  }, []);

  // const handleCopyCode = (couponId: number) => {
  //   const coupon = couponStates.find((c) => c.id === couponId);

  //   if (coupon) {
  //     navigator.clipboard.writeText(coupon.coupon_code);
  //     setCouponStates((prevStates) =>
  //       prevStates.map((prevCoupon) =>
  //         prevCoupon.id === couponId
  //           ? { ...prevCoupon, copied: true }
  //           : { ...prevCoupon, copied: false }
  //       )
  //     );

  //     setTimeout(() => {
  //       setCouponStates((prevStates) =>
  //         prevStates.map((prevCoupon) => ({ ...prevCoupon, copied: false }))
  //       );
  //     }, 3000);
  //   }
  // };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mx-12 lg:mx-0">
      {couponStates.length === 0 ? (
        <p className="text-center text-3xl w-full">
          You don't have any available coupon
        </p>
      ) : (
        couponStates.map((couponState) => (
          <Coupon
            key={couponState.id}
            code={couponState.coupon_code}
            // Check the type of coupon and assign discount or discount_percent accordingly
            discount={
              couponState.type === "flat" ? couponState.discount : undefined
            }
            discount_percent={
              couponState.type === "percent"
                ? couponState.discount_percent
                : undefined
            }
          />
        ))
      )}
    </div>
  );
};

export default MyCoupons;
