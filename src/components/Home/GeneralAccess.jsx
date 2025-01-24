"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { Portfolio, Portfolio2, Portfolio3 } from "@/asstes";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const GeneralAccess = () => {
  const data = [
    {
      name: "Little Krazy",
      image: Portfolio,
    },
    {
      name: "Hawanim Groves City",
      image: Portfolio2,
    },
    {
      name: "Picnic Market",
      image: Portfolio3,
    },
    {
      name: "Little Krazy",
      image: Portfolio,
    },
    {
      name: "Hawanim Groves City",
      image: Portfolio2,
    },
    {
      name: "Picnic Market",
      image: Portfolio3,
    },
  ];
  return (
    <section className="generalaccess py-10">
      <div className="container mx-auto px-4">
        <div className="w-full xl:w-[60%]  text-white mb-12">
          <h2 className="  text-5xl font-normal mb-2 ">
            Book General Access ticket and enjoy the attractions for free
          </h2>

          <Link
            href={"/"}
            className="themeButton max-w-[300px] flex items-center justify-between group mt-10"
          >
            Book General Access Tickets
            <FaArrowRight className="icons hover-transition group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
      <div className="pl-[30px] md:pl-[40px] lg:pl-[140px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          modules={[Navigation]}
          className="attractionsslider"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <Image
                  src={item.image}
                  height={200}
                  width={200}
                  alt="General Access"
                  className="w-full h-auto object-cover"
                  unoptimized
                />
                <h2 className="text-2xl md:text-3xl text-center mt-6">{item.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GeneralAccess;
