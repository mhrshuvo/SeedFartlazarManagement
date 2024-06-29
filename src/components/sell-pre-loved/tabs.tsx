import React, { useState } from "react";
import HowItWorks from "./how-it-works";
import PayOut from "./pay-out";
import SellingGuide from "./selling-guide";
import SalePreLoved from "@components/my-account/sell-preloved";
import Container from "@components/ui/container";
import { useTranslation } from "react-i18next";

const Tabs = () => {
  const [t] = useTranslation("common");
  const [activeTab, setActiveTab] = useState(0);

  const tabComponents = [
    { component: <SalePreLoved />, label: t("Sell Pre-loved.title") },
    { component: <HowItWorks />, label: t("HOW IT WORKS.title") },
    { component: <PayOut />, label: t("Cash your Pre-loved.title") },
    { component: <SellingGuide />, label: t("Selling Guide.title") },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Container>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="rounded-lg shadow-xl w-full">
            <ul className="flex flex-wrap justify-center w-full">
              {tabComponents.map((tab, index) => (
                <li
                  key={index}
                  className={`px-4 py-2  mt-2 md:mt-10 text-center cursor-pointer ml-2 ${
                    activeTab === index
                      ? "bg-[#30D8A4] rounded-lg text-white"
                      : index === 0
                      ? "border border-green-500  text-black rounded-lg" // Apply background color only to "Sell Pre-loved" button
                      : "text-gray-600"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
            <div className="p-4">
              {tabComponents.map((tab, index) => (
                <div
                  key={index}
                  style={{ display: activeTab === index ? "block" : "none" }}
                >
                  {tab.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Tabs;
