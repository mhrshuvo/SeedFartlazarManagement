import React from "react";

const CustomHero: React.FC = () => {
  return (
    <section className="px-0 sm:px-4 md:px-16 2xl:px-24">
      <div
        className="text-center bg-[#40C9A2] text-[#2C3E50] py-10 md:py-14 lg:py-16 my-8"
        style={{
          backgroundImage: `url("/assets/images/hero/welcome.jpeg")`,
        }}
      >
        <h3 className="text-3xl md:text-5xl">Extra 10% off</h3>
        <p className="mt-2 p-2 md:p-0 lg:p-0 xl:p-0">
          Enjoy Extra 10% off of your first purchase
          <span className=" font-bold text-sm text-white">
            "welcome10"
          </span>{" "}
          Sign up now!
        </p>
      </div>
    </section>
  );
};

export default CustomHero;
