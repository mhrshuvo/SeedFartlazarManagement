import Layout from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import SalePreowned from "@components/my-account/sell-preloved";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_en from "../../../src/translation/en/common.json";
import common_bn from "../../../src/translation/bn/common.json";
import TranslationButton from "@components/sell-pre-loved/translationButton";

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

export default function preLovedPage() {
	return (


		<AccountLayout>
      	<I18nextProvider i18n={i18n}>
      <TranslationButton  />
			<SalePreowned></SalePreowned>
      </I18nextProvider>
		</AccountLayout>
	);
}

preLovedPage.Layout = Layout;

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
