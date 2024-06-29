import MenuIcon from "@components/icons/menu-icon";
import { useUI } from "@contexts/ui.context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Drawer } from "@components/common/drawer/drawer";
import { getDirection } from "@utils/get-direction";
import Logo from "@components/ui/logo";
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
  ssr: false,
});

const MobileMenu = dynamic(
  () => import("@components/layout/header/mobile-menu")
);

const MobileNavigation: React.FC = () => {
  const { openSidebar, closeSidebar, displaySidebar, setDrawerView } = useUI();

  //   function handleLogin() {
  //     setModalView("LOGIN_VIEW");
  //     return openModal();
  //   }

  function handleMobileMenu() {
    setDrawerView("MOBILE_MENU");
    return openSidebar();
  }

  const { locale } = useRouter();
  const dir = getDirection(locale);
  const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };

  return (
    <>
      <div className="md:hidden fixed z-30 top-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4">
        <button
          aria-label="Menu"
          className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
          onClick={handleMobileMenu}
        >
          <MenuIcon />
        </button>
        {/* <button
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
          onClick={openSearch}
          aria-label="search-button"
        >
          <SearchIcon />
        </button> */}

        {/* loading site logo  */}
        <a href="/">
          <Logo />
        </a>
        <CartButton />
      </div>
      <Drawer
        placement={dir === "rtl" ? "right" : "left"}
        open={displaySidebar}
        onClose={closeSidebar}
        handler={false}
        showMask={true}
        level={null}
        contentWrapperStyle={contentWrapperCSS}
      >
        <MobileMenu />
      </Drawer>
    </>
  );
};

export default MobileNavigation;
