"use client";
import React, { useEffect, useState } from "react";
import { menuItems } from "@/data/header";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/asstes";
import { FaTiktok } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import ReactFlagsSelect from "react-flags-select";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState("US");
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Check the screen size on mount and attach resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }

    return () => {
      document.body.classList.remove("noScroll");
    };
  }, [isMenuOpen]);

  return (
    <nav className={`header relative   top-0 z-50 `}>
      <div className="wrapper relative  ">
        <div className="container">
          <div className="py-5 grid grid-cols-2">
            <div className="max-w-[220px] w-full">
              <Link href="/" className="cursor-pointer">
                <Image
                  src={Logo}
                  alt="logo"
                  width={500}
                  height={500}
                  className="max-w-[200px] w-full"
                />
              </Link>
            </div>
            <div className="flex flex-row gap-3 items-center justify-end relative">
              <div className="hidden cursor-pointer lg:flex items-center gap-4 flex-row-reverse">
                <div className="language-converter">
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    className="menu-flags"
                    defaultCountry="US"
                    customLabels={{ US: "Englisg", GB: "German", FR: "French" }}
                  />
                </div>
                <div className="login">
                  <Link href={"/"} className="themeButton">
                    Login
                  </Link>
                </div>
                <div className="social-media flex flex-row gap-4 items-center">
                  <FaTiktok className="icons  hover-transition text-themelight" />
                  <RiInstagramFill className="icons  hover-transition text-themelight" />
                  <BsTwitterX className="icons  hover-transition text-themelight" />
                  <FaSnapchatGhost className="icons  hover-transition text-themelight" />
                </div>
              </div>

              <div className="toggler lg:hidden lg:static absolute  right-2 z-50 ">
                <button
                  onClick={handleMenuToggle}
                  className="text-white focus:outline-none"
                >
                  {isMenuOpen ? (
                    <IoClose className="text-2xl text-themePrimary text-bold" />
                  ) : (
                    <FiMenu className="text-2xl text-themePrimary text-bold" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-bar border-white lg:border-t lg:border-b py-1">
          <div className="container">
            <div className="desktop-menu justify-center items-center w-full hidden lg:flex">
              <ul
                className={`custom-design lg:flex lg:flex-row flex-col lg:h-full h-[100vh] w-full justify-between ${
                  isMenuOpen ? "flex" : "hidden"
                }`}
              >
                {menuItems?.map((item, index) => (
                  <li
                    key={index}
                    className="  font-semibold whitespace-nowrap "
                  >
                    <Link
                      href={item.href}
                      className={`cursor-pointer hover:text-white text-themelight py-2 w-full table lg:text-center  uppercase text-base tracking-[2px]`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`mobile-menu ${isMenuOpen ? `active` : ``} -z-10  fixed max-w-full  left-0 bottom-0 w-screen flex-col gap-2 overflow-y-auto bg-background top-0 bg-gradient-to-r from-[#283606] to-[#0F1500] pt-[100px] ${
                isMenuOpen ? `block` : `hidden`
              }`}
            >
              <ul
                className={`custom-design   flex-col lg:h-full w-full ${
                  isMenuOpen ? "flex" : "hidden"
                }`}
              >
                {menuItems?.map((item, index) => (
                  <li
                    key={index}
                    className="font-semibold whitespace-nowrap  border-b border-white rounded-none"
                  >
                    <Link
                      href={item.href}
                      className={`cursor-pointer hover:text-white text-themelight  w-full table lg:text-center  uppercase text-base tracking-[2px] py-5 px-6 md:px-[80px]`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 gap-5 px-6 md:px-[80px]   cursor-pointer  flex  flex-col gap-4  ">
                <div className="language-converter">
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    className="menu-flags"
                    defaultCountry="US"
                    customLabels={{ US: "Englisg", GB: "German", FR: "French" }}
                  />
                </div>
                <div className="login">
                  <Link href={"/"} className="themeButton">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
