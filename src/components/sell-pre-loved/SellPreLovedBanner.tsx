import React from "react";
import cleanoutImg from "../../../public/assets/images/cleanout5.png";
import { useTranslation } from "react-i18next";

const SellPreLovedBanner = () => {
	const [t] = useTranslation("common");
	return (
		<div className="relative px-0 sm:px-4 md:px-16 2xl:px-24">
			<div
				className="w-full h-[400px] bg-cover bg-center relative"
				style={{ backgroundImage: `url(${cleanoutImg.src})` }}
			>
				<div className="absolute inset-0 flex items-center justify-start text-white mx-4">
					<div className="text-black text-center sm:text-left pl-0 lg:pl-10">
						<h1 className="text-2xl sm:text-3xl font-bold mb-4 ">
							{t("We do the work.title")}
							<br className="hidden sm:inline  " />
							{t("You get the credit.title")} 
							
							<br className="hidden sm:inline" />
							{t("You get the creditw.title")}
						</h1>
						<p className="text-base sm:text-lg mb-8">
							{t(
								"Send us your preloved items and earn cash or shopping credit.title"
							)}{" "}
							<br className="hidden sm:inline" />
							{t("Plus, make a positive impact on the planet.title")}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SellPreLovedBanner;
