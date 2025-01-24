import { Map } from "@/asstes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="generalaccess py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <Image
            src={Map}
            alt="Map"
            width={600}
            height={600}
            className="w-full h-auto"
            unoptimized
          />
          <div className="content-area">
            <div className="content-area flex flex-col gap-2 lg:w-[80%] lg:mt-[120px]">
              <span className="text-white font-light tracking-[2px]">
                EXPERIENCE THE GROVES
              </span>
              <h3 className="text-white text-5xl  font-normal leading-tight">
                Find your place
              </h3>
              <p className="text-white">
                Our interactive map will show you the way to the shops and
                restaurants that you want to see.
              </p>
              <Link
                href={"/"}
                className="themeButton max-w-[230px] flex items-center justify-between group"
              >
                Open the Map
                <FaArrowRight className="icons hover-transition group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
