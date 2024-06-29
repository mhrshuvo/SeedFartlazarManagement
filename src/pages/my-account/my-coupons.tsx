import Layout from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import MyCoupons from "@components/my-account/my-coupons";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function myCouponsPage() {
  return (
    <AccountLayout>
      <MyCoupons></MyCoupons>
    </AccountLayout>
  );
}

myCouponsPage.Layout = Layout;

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
