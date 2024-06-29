import Layout from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import Refer from "@components/my-account/refer";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function referPage() {
  return (
    <AccountLayout>
      <Refer />
    </AccountLayout>
  );
}

referPage.Layout = Layout;

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
