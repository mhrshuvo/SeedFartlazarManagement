import React from "react";

interface CouponProps {
  code: string;
  discount?: string | null; // Make discount optional
  discount_percent?: string | null; // Make discount_percent optional
}

const Coupon: React.FC<CouponProps> = ({
  code,
  discount,
  discount_percent,
}) => {
  return (
    <div className="container" style={{ position: "relative" }}>
      {/* <img src={"/assets/images/coupon/coupon.png"} alt="Coupon Image" /> */}
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 30,
          transform: "translate(-60%, 40%)", // Center vertically and move right
          textAlign: "right", // Align text to the right
          color: "#000", // Text color
          fontSize: "20px", // Adjust font size as needed
          fontWeight: "bold", // Adjust font weight as needed
          zIndex: 1, // Set z-index to ensure text is on top
        }}
      >
        {/* Wrap discount and discount_percent in a div */}
        <div style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
          {discount && <span>BDT {discount}</span>}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "85%",
          transform: "translate(-50%, -50%)",
          color: "#000", // Text color
          fontSize: "30px", // Adjust font size as needed
          fontWeight: "bold", // Adjust font weight as needed
          zIndex: 1, // Set z-index to ensure text is on top
        }}
      >
        {/* Wrap discount and discount_percent in a div */}
        <div style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
          {discount_percent && <span>{discount_percent} %</span>}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "35%",
          transform: "translate(-50%, -50%)",
         
          fontSize: "30px", // Adjust font size as needed
          fontWeight: "bold", // Adjust font weight as needed
          zIndex: 1, // Set z-index to ensure text is on top
        }}
      >
        {code}
      </div>
    </div>
  );
};

export default Coupon;
