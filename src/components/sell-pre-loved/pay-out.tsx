import React from "react";
import { useTranslation } from "react-i18next";
import Consignment from "./consignment";

const PayOut = () => {
	const [t] = useTranslation("common");
	return (
		<>
			{" "}
			<div className="my-10 text-black">
				<div className="text-center">
					<h2 className="text-2xl font-semibold">
						{t("Get paid in cash or shopping credit.title")}
					</h2>
					<p>
						{t(
							"You get paid out on each sold item once the 14-day return window has passed.title"
						)}
						
					</p>
				</div>

				{/* payout card grid */}

				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-10 lg:w-[1280px] md:mx-auto">
					<div className="w-[300px] md:w-[400px] lg:w-[500px] mx-auto rounded-md overflow-hidden shadow-md bg-[#F6F6F6] mt-10">
						<img
							src="https://cf-assets-tup.thredup.com/pwa/cleanout/partners/cover/08-2023/thredup-credit.jpg"
							alt="Card Image"
							className="w-[500px] h-auto"
						/>
						<div className="p-4">
							<h2 className="text-xl font-semibold mb-2">
								{t("Ki Porbo Shopping Credit.title")}
							</h2>
							<p className="text-gray-600">
								{t(
									"Get automatic Ki Porbo shopping credit and refresh your closet with one-of-kind thrifted items.title"
								)}
							</p>
						</div>
					</div>
					{/* <div className="w-[300px] md:w-[400px] lg:w-[400px] mx-auto rounded-md overflow-hidden shadow-md bg-[#F6F6F6] mt-10">
						<img
							src="https://cf-assets-tup.thredup.com/pwa/cleanout/partners/cover/08-2023/brand-credit.jpg"
							alt="Card Image"
							className="w-[400px] h-auto"
						/>
						<div className="p-4">
							<h2 className="text-xl font-semibold mb-2">
								{t("Brand Shopping Credit.title")}
							</h2>
							<p className="text-gray-600">
								{t(
									"Turn your earnings into credit with one of kiporbo's brand partners. Plus, some brands offer bonus credit!.title"
								)}
							</p>
						</div>
					</div> */}
					<div className="w-[300px] md:w-[400px] lg:w-[500px] mx-auto rounded-md overflow-hidden shadow-md bg-[#F6F6F6] mt-10">
						<img
							src="https://cf-assets-tup.thredup.com/pwa/cleanout/partners/cover/08-2023/cash.jpg"
							alt="Card Image"
							className="w-[500px] h-auto"
						/>
						<div className="p-4">
							<h2 className="text-xl font-semibold mb-2">{t("Cash.title")}</h2>
							<p className="text-gray-600">
								{t(
									"Transfer your earnings to your bank account via Stripe, or to your Bank account Fees apply.title"
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
			<Consignment />
		</>
	);
};

export default PayOut;
