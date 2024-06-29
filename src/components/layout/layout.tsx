import { NextSeo } from "next-seo";
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import Search from "@components/common/search";
import CookieBar from "@components/common/cookie-bar";
import { useAcceptCookies } from "@utils/use-accept-cookies";
import Button from "@components/ui/button";
import { useTranslation } from "next-i18next";
import MobileNavigationCustom from "./mobile-navigation/mobile-navigation-custom";

const Layout: React.FC = ({ children }) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col min-h-screen">
      <NextSeo
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
        title="Ki Porbo - Lifestyle Ecommerce Store"
        description="Fastest E-commerce Online Store, Lifestyle, "
        canonical="https://kiporbo.com"
        openGraph={{
          url: "https://kiporbo",
          title: "Ki Porbo - Lifestyle Ecommerce Store",
          description:
            "Fastest E-commerce , Online Store, Deshi style, Lifestyle brand.",
          images: [
            {
              url: "/assets/images/logo.png.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "/assets/images/logo.png.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
          ],
        }}
      />
      <Header />
      <MobileNavigationCustom />
      <main
        className="relative flex-grow"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>
      <Footer />
      {/* <MobileNavigation /> */}
      <Search />
      <CookieBar
        title={t("text-cookies-title")}
        hide={acceptedCookies}
        action={
          <div className="space-x-2">
            <Button onClick={() => onAcceptCookies()} variant="slim">
              {t("text-accept-cookies")}
            </Button>

            <Button
              onClick={() => onAcceptCookies()}
              className="bg-red-400 hover:bg-red-500"
              variant="slim"
            >
              Reject cookies
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default Layout;
