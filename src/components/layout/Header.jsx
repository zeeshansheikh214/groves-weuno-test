"use client";
import React, { useState } from "react";
import { menuItems } from "@/data/header";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/asstes";
import { FaTiktok } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`header relative lg:sticky top-0 z-50 `}>
      <div className="wrapper relative z-10">
        <div className="container">
          <div className="py-5 grid grid-cols-2">
            <div className="max-w-[220px] w-full">
              <Link href="/" className="cursor-pointer">
                <Image
                  src={Logo}
                  alt="logo"
                  width={500}
                  height={500}
                  className="max-w-[250px] w-full"
                />
              </Link>
            </div>
            <div className="flex flex-row gap-3 items-center justify-end relative">
              <div className="hidden   cursor-pointer lg:flex   gap-4 flex-row-reverse">
                <div className="language-converter">
                  <p>language</p>
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
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-bar border-white border-t border-b py-2">
          <div className="container">
            <div className="flex justify-center items-center w-full ">
              <ul
                className={`custom-design lg:flex lg:flex-row flex-col lg:h-full h-[100vh] w-full justify-between ${
                  isMenuOpen ? "flex" : "hidden"
                }`}
              >
                {menuItems?.map((item, index) => (
                  <li
                    key={index}
                    className="  font-semibold whitespace-nowrap text-center"
                  >
                    <Link
                      href={item.href}
                      className={`cursor-pointer hover:text-white text-themelight py-2 w-full table text-center uppercase text-base tracking-[2px]`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
