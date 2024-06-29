import React from "react";

import { useTranslation } from "react-i18next";

const HowItWorks = () => {
	const [t] = useTranslation("common");

	return (
		<>
		<div className="text-center mt-10  text-black">
			<div>
				<h4 className="text-xl font-bold"> {t("HOW IT WORKS.title")}</h4>

				<h2 className="text-xl md:text-2xl mt-3 font-semibold">
					{t(
						"It’s seriously easy to sell out your preloved product with KiPorbo site.title"
					)}
				</h2>
			</div>

			{/* how it works */}
			<div className="flex flex-wrap justify-center mt-10">
				<div className="w-full md:w-[300px] text-left my-10 mx-4">
					<h5 className="text-2xl mb-1">
						{t("1.Fill up sell preloved form.title")}{" "}
					</h5>
					{/* <p>
						Place the shipping label on the box or bag and drop it off with
						FedEx or USPS.
					</p> */}
					<p>
						{t("Please provide the pre-loved  description of the form.title")}
					</p>
				</div>
				<div className="w-full md:w-[300px] text-left my-10 mx-4">
					<h5 className="text-2xl mb-3">{t("2. Send us your stuff.title")}</h5>
					<p>
						{t(
							"After filling out this form, you can deliver your product to the location which we have provided.title"
						)}
					</p>
				</div>
				<div className="w-full md:w-[300px] text-left my-10 mx-4">
					<h5 className="text-2xl mb-3">
						{t("3. We'll sell your stuff.title")}
					</h5>
					<p>
						{t(
							"When eligible items sell, cash out or get shopping credit. All about payouts.title"
						)}
					</p>
				</div>
			</div>
		</div>
		
		</>
	);
};

export default HowItWorks;
