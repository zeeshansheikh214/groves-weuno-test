"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { Experiences0, Experiences1, Experiences2 } from "@/asstes";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const Experiences = () => {
  const data = [
    {
      name: "Resturants",
      image: Experiences0,
    },
    {
      name: "Experiences",
      image: Experiences1,
    },
    {
      name: "Events",
      image: Experiences2,
    },
    {
      name: "Resturants",
      image: Experiences0,
    },
    {
      name: "Experiences",
      image: Experiences1,
    },
    {
      name: "Events",
      image: Experiences2,
    },
  ];
  return (
    <section className="generalaccess py-10">
      <div className="container mx-auto px-4">
        <div className="w-full text-white  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
          <div>
            <h2 className="  text-5xl font-normal mb-2 ">
              Curate your experience as you like
            </h2>

            <Link
              href={"/"}
              className="themeButton   flex items-center justify-between group mt-10"
            >
              Book Tickets
              <FaArrowRight className="icons hover-transition group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              //   navigation={true}
              modules={[Navigation]}
              breakpoints={{
                // when the viewport width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when the viewport width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when the viewport width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="Experiencesslider"
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
                    <h2 className="text-2xl mt-7">{item.name}</h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
