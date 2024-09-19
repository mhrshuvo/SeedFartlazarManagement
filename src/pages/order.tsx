import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
// import Subscription from "@components/common/subscription";
import PageHeader from "@components/ui/page-header";
import OrderInformation from "@components/order/order-information";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import CryptoJS from "crypto-js";
import { useRouter } from "next/router";

export default function Order() {
  const router = useRouter();

  let orderData: string | Record<string, unknown> = {};

  console.log(orderData);

  // Satellite is the obj
  const encryptedData = router.query.satellite;

  if (typeof encryptedData === "string") {
    // Decrypt the encryptedData if it's a string
    const decryptedBytes = CryptoJS.AES.decrypt(
      encryptedData,
      process.env.NEXT_PUBLIC_ENCRYPTION_KEY || ""
    );

    const decryptedDataString = decryptedBytes.toString(CryptoJS.enc.Utf8);

    // Parse the decrypted data as JSON
    orderData = JSON.parse(decryptedDataString || "{}");
  } else if (Array.isArray(encryptedData) && encryptedData.length > 0) {
    // If the encrypted data is an array, take the first element and attempt decryption
    const decryptedBytes = CryptoJS.AES.decrypt(
      encryptedData[0],
      process.env.NEXT_PUBLIC_ENCRYPTION_KEY || ""
    );

    const decryptedDataString = decryptedBytes.toString(CryptoJS.enc.Utf8);

    // Parse the decrypted data as JSON
    orderData = JSON.parse(decryptedDataString || "{}");
  }

  return (
    <>
      <PageHeader pageHeader="text-page-order" />
      <Container>
        <OrderInformation data={orderData} />

        {/* <Subscription /> */}
      </Container>
    </>
  );
}

Order.Layout = Layout;

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
