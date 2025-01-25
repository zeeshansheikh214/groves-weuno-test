import {
  AppleStore,
  GoogleStore,
  Logo,
  payment1,
  payment2,
  payment3,
} from "@/asstes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer py-10 border-t border-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-between">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal mb-2 md:col-span-2">
            Join us for
            <br /> an unforgettable experience
          </h2>
          <div className="">
            <p>DOWNLOAD THE GROVES APP</p>
            <div className="grid grid-cols-2 mt-3 items-center gap-4">
              <Image
                src={AppleStore}
                alt="App Store"
                width={150}
                height={50}
                className="w-full h-auto"
              />
              <Image
                src={GoogleStore}
                alt="App Store"
                width={150}
                height={50}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3   gap-5 my-8 md:my-16 text-white">
          <div className="location-area">
            <h6 className="mb-3 uppercase">Location</h6>
            <Link href={"/"} className="">
              Al-Hizam Park Al-Semairi,
              <br /> Yanbu Al Bahr 46455 <br />
              Riyadh Saudi Arabia
            </Link>
          </div>
          <div className="working-area">
            <h6 className="mb-3 uppercase">WORKING HOURS</h6>
            <span>
              Sun until Thurs: 4:00PM <br />
              Fri & Sat: 2:30PM
            </span>
            <h6 className="mb-3 mt-9">Gates Close at:</h6>
            <span>
              Sat until Wed: 12:00AM <br />
              Thu & Fri: 12:30AM
            </span>
          </div>
          <div className="working-area flex flex-col">
            <h6 className="mb-3 uppercase">GUEST SERVICE CALL</h6>
            <Link href={"mailto:cc@thegroves-sa.com"} className="">
              cc@thegroves-sa.com
            </Link>
            <Link href={"tel:920001672"} className="">
              920001672
            </Link>
            <Link href={"tel:+966556631309"} className="">
              +966556631309
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <Image
            src={Logo}
            alt="logo"
            width={500}
            height={500}
            className="max-w-[250px] w-full"
          />
          <div className="social-media flex flex-row gap-4 items-center">
            <FaTiktok className="icons  hover-transition text-themelight" />
            <RiInstagramFill className="icons  hover-transition text-themelight" />
            <BsTwitterX className="icons  hover-transition text-themelight" />
            <FaSnapchatGhost className="icons  hover-transition text-themelight" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-9">
          <div className="flex flex-row items-center justify-between gap-4">
            <Link href={"/"} className="text-white">
              Terms & Conditions
            </Link>
            <Link href={"/"} className="text-white">
              Privacy Policy
            </Link>
            <Link href={"/"} className="text-white">
              ©2023 The Groves for Entertainment
            </Link>
          </div>
          <div className="social-media flex flex-row gap-4 items-center">
            <Image src={payment3} alt="payment" width={26} height={26} />
            <Image src={payment2} alt="payment" width={26} height={26} />
            <Image src={payment1} alt="payment" width={26} height={26} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
