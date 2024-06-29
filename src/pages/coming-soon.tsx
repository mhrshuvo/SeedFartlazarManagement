import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
// import Subscription from "@components/common/subscription";
import PageHeader from "@components/ui/page-header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function ComingSoon() {
  return (
    <>
      <PageHeader pageHeader="We are working hard to bring you something amazing. Stay tuned!" />
      <Container>
        {/* <Subscription /> */}
      </Container>
    </>
  );
}

ComingSoon.Layout = Layout;

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
