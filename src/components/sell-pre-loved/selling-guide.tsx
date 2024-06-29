import React from "react";
import { useTranslation } from "react-i18next";

const SellingGuide = () => {
	const [t] = useTranslation("common");
	return (
		<div className="mt-20 text-black">
			{/* video */}
			<div className="lg:flex  justify-center items-center gap-10 mx-7 md:mx-[150px] lg:mx-0">
				<div className="w-[300px] md:w-[400px] lg:w-[500px] mb-10 lg:mb-0">
					<video
						src="https://cf-assets-tup.thredup.com/pwa/cleanout/selling-guide/videos/sellerGuide-qualityChecklist-F1.mp4"
						autoPlay
						muted
						loop
					></video>
				</div>

				<div>
					<h2 className="text-4xl mb-5">
						{t("Must-read quality checklist.title")}
					</h2>
					<p>{t("Check every single item before packing!.title")}</p>

					<ul className="mt-5 text-[20px] font-semibold space-y-10">
						<li className="flex gap-5">
							<img
								src="https://www.thredup.com/tup-assets/pwa/production/assets/commerce-check-f39404ab754a76d9f4bc.svg"
								alt=""
							/>
							<p>
								{t(
									"Ensure that you ONLY send clean and freshly laundered items.title"
								)}
							</p>
						</li>

						<li className="flex gap-5">
							<img
								src="https://www.thredup.com/tup-assets/pwa/production/assets/commerce-check-f39404ab754a76d9f4bc.svg"
								alt=""
							/>
							<p>
								{t(
									"Check hidden spots for wear and tear behind the neck,under the arms, crotch area.title"
								)}
							</p>
						</li>

						<li className="flex gap-5">
							<img
								src="https://www.thredup.com/tup-assets/pwa/production/assets/commerce-check-f39404ab754a76d9f4bc.svg"
								alt=""
							/>
							<p>
								{t("Remove all personal items from pockets and handbags.title")}
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div className=" lg:flex justify-center items-center gap-10 mt-20 mb-20 mx-7 lg:mx-0 md:mx-[150px]">
					<div>
						<h2 className="text-4xl mb-5">{t("What we can’t resell.title")}</h2>
						

						<ul className="mt-5  space-y-10">
							<li className="flex gap-5">
								<img
									src="https://www.thredup.com/tup-assets/pwa/production/assets/commerce-cross-d07768ee157cff853c51.svg"
									alt=""
								/>
								<div className="flex-row justify-center items-center">
									<p className="font-semibold text-[20px]">
										{t("Items with wear and tear.title")}
									</p>
									{t("No pilling, fading, shrinkage, stains, odors.title")}
								</div>
							</li>
							<li className="flex gap-5">
								<img
									src="https://www.thredup.com/tup-assets/pwa/production/assets/commerce-cross-d07768ee157cff853c51.svg"
									alt=""
								/>
								<div className="flex-row justify-center items-center">
									<p className="font-semibold text-[20px]">
										{t("Damaged or altered items.title")}
									</p>
									{t("No rips, holes, missing parts, broken zippers, altered hems missing labels.title")}
								</div>
							</li>
							{/* <li className="flex gap-5">
								<img
									src="https://www.thredup.com/tup-assets/pwa/production/assets/commerce-cross-d07768ee157cff853c51.svg"
									alt=""
								/>
								<div className="flex-row justify-center items-center">
									<p className="font-semibold text-[20px]">{t("Banned categories.title")}</p>
									{t("No men’s, PJs, intimates, jewelry, formal gowns, non-apparel items, counterfeit items.title")}
								</div>
							</li> */}
							{/* <li className="flex gap-5">
								<img
									src="https://www.thredup.com/tup-assets/pwa/production/assets/commerce-cross-d07768ee157cff853c51.svg"
									alt=""
								/>
								<div className="flex-row justify-center items-center">
									<p className="font-semibold text-[20px]">
										{t("Items that don’t have a size.title")}
									</p>
									{t("Handbags are an exception, as are some highly sought-after brands like Lululemon.title")}
								</div>
							</li> */}
						</ul>
					</div>

					{/* video */}
					<div className="w-[300px] md:w-[400px] lg:w-[500px] mt-5 lg:mt-0">
						<video
							src="https://cf-assets-tup.thredup.com/pwa/cleanout/selling-guide/videos/sellerGuide-cantResell-F1.mp4"
							autoPlay
							muted
							loop
						></video>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SellingGuide;
