import React from "react";
import { useTranslation } from "react-i18next";

export default function Consignment() {
	const [t] = useTranslation("common");
	return (
		<div className=" text-center lg:bg-[#F6F6F6] md:bg-white bg-white lg:m-32  md:m-24   sm:m-16 m-0 lg:p-16 md:p-12 sm:p-8 p-2">
			<h1 className="  lg:font-[500px] md:font-[500px] font-[600px] text-black lg:text-3xl md:text-2xl sm:text-xl text-xl">
				{t("Payouts and consignment.title")}
			</h1>
			<p className=" text-black lg:text-3xl md:text-2xl sm:text-xl text-xl">
				{t("windows vary by brand.title")}
			</p>

			<div className=" lg:mt-12 md:mt-8   sm:mt-6 mt-5  grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-2">
				<div className=" lg:bg-[#F6F6F6] md:bg-[#F6F6F6] bg-[#F6F6F6] lg:pt-0 md:pt-3 pt-5  ">
					<div className=" font-semibold lg:text-2xl md:text-xl sm:text-lg text-base text-black">
						{t("Premium & Designer Brands.title")}
					</div>
					<div className=" mt-5 mb-5 lg:text-base md:text-sm sm:text-sm text-xs">
						{t(
							"Payouts: Up to 80% of the selling price Consignment window: 45 days to sell.title"
						)}
					</div>
					{/* <div className="  flex lg:p-8 md:p-5 sm:p-6 p-4  justify-between lg:gap-0 md:gap-1 sm:gap-2 gap-3">
						<div>
							<img
								src="https://cf-assets-tup.thredup.com/pwa/cleanout/payouts/brands/j.crew.svg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="https://cf-assets-tup.thredup.com/pwa/cleanout/payouts/brands/lululemon.svg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="https://cf-assets-tup.thredup.com/pwa/cleanout/payouts/brands/gucci.svg"
								alt=""
							/>
						</div>
					</div> */}
				</div>
				<div className=" lg:bg-[#F6F6F6] md:bg-[#F6F6F6] bg-[#F6F6F6] lg:pt-0 md:pt-3 pt-5  ">
					<div className=" font-semibold lg:text-2xl md:text-xl sm:text-lg text-base text-black">
						{t("Mid-Priced Brands.title")}
					</div>
					<div className=" mt-5 mb-5 lg:text-base md:text-sm sm:text-sm text-xs">
						{t(
							"Payouts: Up to 60% of the selling price Consignment window: 30 days to sell.title"
						)}
					</div>
					{/* <div className="  flex lg:p-6 items-center justify-center md:p-5 sm:p-6 p-4   lg:gap-10 md:gap-5 sm:gap-2 gap-3">
						<div>
							<img
								src="https://cf-assets-tup.thredup.com/pwa/cleanout/payouts/brands/gap.svg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="https://cf-assets-tup.thredup.com/pwa/cleanout/payouts/brands/nike.svg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="https://cf-assets-tup.thredup.com/pwa/cleanout/payouts/brands/zara.svg"
								alt=""
							/>
						</div>
					</div> */}
				</div>
				<div className=" lg:bg-[#F6F6F6] md:bg-[#F6F6F6] bg-[#F6F6F6] lg:pt-0 md:pt-3 pt-5   ">
					<div className=" font-semibold lg:text-2xl md:text-xl sm:text-lg text-base text-black">
						{t("Low-Priced Value Brands.title")}
					</div>
					<div className=" mt-5 mb-5 lg:text-base md:text-sm sm:text-sm text-xs">
						{t(
							"Some value brands are ineligible for a payout, but you can still send them in.title"
						)}
					</div>
					{/* <div className="  flex lg:p-8 md:p-5 sm:p-6 p-4  justify-between lg:gap-0 md:gap-1 sm:gap-2 gap-5">
						<div>
							<img
								src="https://cf-assets-tup.thredup.com/pwa/cleanout/payouts/brands/forever-21.svg"
								alt=""
								className="lg:m-2 md:m-1 m-2"
							/>
						</div>
						<div>
							<img
								src="https://cf-assets-tup.thredup.com/pwa/cleanout/payouts/brands/uniqlo.svg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="https://cf-assets-tup.thredup.com/pwa/cleanout/payouts/brands/old-navy.svg"
								alt=""
								className="lg:m-2 md:m-1 m-2"
							/>
						</div>
					</div> */}
				</div>
			</div>

			{/* <div className=" font-semibold lg:text-[22px] md:text-lg lg:m-10 md:m-8 sm:m-7 m-5 sm:text-lg text-base text-black">
				{t("Check which brands are eligible for a payout.title")}
			</div>
			<div>
				<input
					type=""
					className=" lg:py-3 md:py-3 md:px-10 px-5 py-2 border border-[#CCCCCC] lg:px-20  placeholder-[#CCCCCC] place-items-start"
					placeholder={t("Search for a brand.title")}
				/>
			</div>
			<div className="lg:m-10 md:m-8 sm:m-7 m-5 font-bold lg:text-base md:text-sm text-xs hover:text-[#30DAC1]  underline  ">
				{t("SEE ALL INELIGIBLE BRANDS.title")}
			</div> */}
		</div>
	);
}
