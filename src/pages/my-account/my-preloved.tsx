import Layout from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import MyPreloved from "@components/my-account/my-preloved";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function myPrelovedPage() {
  return (
    <AccountLayout>
      <MyPreloved></MyPreloved>
    </AccountLayout>
  );
}

myPrelovedPage.Layout = Layout;

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
