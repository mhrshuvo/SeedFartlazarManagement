import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
// import Subscription from "@components/common/subscription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import CleanOutBanner from "@components/sell-pre-loved/SellPreLovedBanner";
import Tabs from "@components/sell-pre-loved/tabs";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_en from "../translation/en/common.json";
import common_bn from "../translation/bn/common.json";
import TranslationButton from "../components/sell-pre-loved/translationButton";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "en-US": {
        common: common_en, // 'common' is our custom namespace
      },
      "bn-BD": {
        common: common_bn, // 'common' is our custom namespace
      },
    },
    lng: "bn-BD",
    fallbackLng: "en-US",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });
export default function SellPreLoved() {
  return (
    <>
      <Container>
        <I18nextProvider i18n={i18n}>
          <CleanOutBanner></CleanOutBanner>
          <TranslationButton />
          <Tabs></Tabs>
          {/* <Subscription /> */}
        </I18nextProvider>
      </Container>
    </>
  );
}

SellPreLoved.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
