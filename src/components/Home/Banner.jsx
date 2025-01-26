"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { homeBannerSlide } from "@/data/slides";

const Banner = () => {
  return (
    <section className="Banner -mt-[150px] h-[700px]">
      <div className="h-full">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 5000,
          }}
          modules={[Pagination, Autoplay]}
          className="BannnerSwiper h-full"
        >
          {homeBannerSlide?.map((slide, index) => (
            <SwiperSlide
              className="relative h-full"
              style={{
                backgroundImage: `url(${slide.imageSrc.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
                  {/* Content Area */}
                  <div className="content-area flex flex-col gap-7 lg:w-[80%] lg:mt-[120px]">
                    <span className="text-sm text-white font-light tracking-[2px] uppercase">
                      {slide.subtitle}
                    </span>
                    <h1 className="text-white text-4xl lg:text-[68px] font-normal leading-[76px] max-w-[80%]">
                      {slide.title}
                    </h1>
                    <p className="text-white text-base">{slide.description}</p>
                    <Link
                      href={slide.link}
                      className="themeButton max-w-[300px] flex items-center justify-between group font-normal"
                    >
                      {slide.btntext}
                      <FaArrowRight className="icons hover-transition group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
