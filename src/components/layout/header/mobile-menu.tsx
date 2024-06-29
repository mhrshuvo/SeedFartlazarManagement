//loading as sidebar in mobile view

import { useState } from "react";
import Link from "@components/ui/link";
import { siteSettings } from "@settings/site-settings";
import Scrollbar from "@components/common/scrollbar";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
// import UserIcon from "@components/icons/user-icon";
// import { ROUTES } from "@utils/routes";

import { IoLogoInstagram, IoLogoFacebook, IoClose } from "react-icons/io5";
// import { PiRecycleFill } from "react-icons/pi";
import { useTranslation } from "next-i18next";
import CustomSearch from "@components/common/custom-search";
import AuthMenu from "./auth-menu";
import { ROUTES } from "@utils/routes";
// import dynamic from "next/dynamic";
// const AuthMenu = dynamic(() => import("@components/layout/header/auth-menu"), {
//   ssr: false,
// });

const social = [
  {
    id: 0,
    link: "https://www.facebook.com/kiporbo/",
    icon: <IoLogoFacebook />,
    className: "facebook",
    title: "text-facebook",
  },

  {
    id: 3,
    link: "https://www.instagram.com/kiporbo/",
    icon: <IoLogoInstagram />,
    className: "instagram",
    title: "text-instagram",
  },
];

export default function MobileMenu() {
  const [activeMenus, setActiveMenus] = useState<any>([]);
  const { site_header } = siteSettings;
  const { setModalView, openModal, closeSidebar, isAuthorized } = useUI();
  const { t } = useTranslation("menu");
  const handleArrowClick = (menuName: string) => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  function handleLogin() {
    setModalView("LOGIN_VIEW_OTP");
    return openModal();
  }

  const ListMenu = ({
    dept,
    data,
    hasSubMenu,
    menuName,
    menuIndex,
    className = "",
  }: any) =>
    data.label && (
      <li className={`mb-0.5 ${className}`}>
        <div className="flex items-center justify-between">
          <Link
            href={data.path}
            className="w-full text-[15px] menu-item relative py-3 ps-5 md:ps-7 pe-4 transition duration-300 ease-in-out"
          >
            <span className="block w-full" onClick={() => closeSidebar()}>
              {t(`${data.label}`)}
            </span>
          </Link>
          {hasSubMenu && (
            <div
              className="cursor-pointer w-16 md:w-20 h-8 text-lg flex-shrink-0 flex items-center justify-center"
              onClick={() => handleArrowClick(menuName)}
            >
              <IoIosArrowDown
                className={`transition duration-200 ease-in-out transform text-heading ${
                  activeMenus.includes(menuName) ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>
          )}
        </div>
        {hasSubMenu && (
          <SubMenu
            dept={dept}
            data={data.subMenu}
            toggle={activeMenus.includes(menuName)}
            menuIndex={menuIndex}
          />
        )}
      </li>
    );

  const SubMenu = ({ dept, data, toggle, menuIndex }: any) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <ul className="pt-0.5">
        {data?.map((menu: any, index: number) => {
          const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.subMenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
              className={dept > 1 && "ps-4"}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div className="flex flex-col z-30 justify-between w-full h-full">
        <div className="w-full border-b border-gray-100 flex justify-between items-center relative ps-5 md:ps-7 flex-shrink-0 py-0.5">
          <Logo />

          <button
            className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
            onClick={closeSidebar}
            aria-label="close"
          >
            <IoClose className="text-black mt-1 md:mt-0.5" />
          </button>
        </div>
        <div className="px-3">
          <CustomSearch />
        </div>
        <Scrollbar className="menu-scrollbar flex-grow mb-auto">
          {" "}
          <div className="flex flex-col px-0 lg:px-2 text-heading">
            <h3 className="text-lg font-semibold p-3">Shop by department</h3>
            <ul className="mobileMenu">
              {site_header.mobileMenu.map((menu, index) => {
                const dept: number = 1;
                const menuName: string = `sidebar-menu-${dept}-${index}`;

                return (
                  <ListMenu
                    dept={dept}
                    data={menu}
                    hasSubMenu={menu.subMenu}
                    menuName={menuName}
                    key={menuName}
                    menuIndex={index}
                  />
                );
              })}
            </ul>
          </div>
        </Scrollbar>
        <hr />
        <div className="grid gap-2 p-4 text-sm">
          <div onClick={closeSidebar}>
            <Link
              href={"/search?category=women-eid-collection"}
              className="flex gap-2 mb-3 text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              <p className="text-[16px]">Eid Collection</p>
            </Link>
          </div>

          {/* <div onClick={closeSidebar}>
            <Link
              href={"/sell-preloved"}
              className="flex items-center gap-2 mb-3 "
            >
              <PiRecycleFill size={22} />
              <p className="text-[16px]">Sell Pre-loved</p>
            </Link>
          </div> */}

          <p className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <AuthMenu
              isAuthorized={isAuthorized}
              href={ROUTES.ACCOUNT}
              className="flex-shrink-0"
              btnProps={{
                className: "flex-shrink-0 focus:outline-none",
                children: <p className="text-base">Sign in</p>,
                onClick: handleLogin,
              }}
            >
              <span onClick={closeSidebar}>Account</span>
            </AuthMenu>
          </p>

          <div className="flex justify-between text-sm mt-6">
            <div onClick={closeSidebar}>
              <Link href="/policy/privacy" className="text-gray-700">
                {" "}
                <p>Privacy Policy</p>
              </Link>
            </div>
            <div onClick={closeSidebar}>
              <Link href="/terms" className="text-gray-700">
                {" "}
                <p>Terms & Conditions</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white border-t border-gray-100 px-7 flex-shrink-0 space-s-1">
          {social?.map((item, index) => (
            <a
              href={item.link}
              className={`text-heading p-5 opacity-60 first:-ms-4 transition duration-300 ease-in hover:opacity-100 ${item.className}`}
              target="_blank"
              key={index}
            >
              <span className="sr-only">{t(`${item.title}`)}</span>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
