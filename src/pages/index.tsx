import React, { useEffect } from "react";
import Layout from "@components/layout/layout";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useUI } from "@contexts/ui.context";
import { useRouter } from "next/router";

import Shop from "./search";

export default function Home() {
  const { openModal, setModalView } = useUI();
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    if (query.referral === "true") {
      setModalView("LOGIN_VIEW_OTP");
      setTimeout(() => {
        openModal();
      });
    }
  }, [router]);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1775769852944182');
            fbq('track', 'PageView');
          `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1775769852944182&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      {/* <Container>
        <CustomSearch />
        <CustomHeroSection />
        <HeroSlider />
        <StaticCategory />
        <StaticSection />
      </Container> */}
      <Shop />
    </>
  );
}

Home.Layout = Layout;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
    revalidate: 60,
  };
};
