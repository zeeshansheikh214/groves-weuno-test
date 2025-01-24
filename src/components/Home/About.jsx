"use client";
import React, { useState } from "react";
import { VideoPoster } from "@/asstes";
import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa6";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="About py-10">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-[80%] mx-auto text-white mb-12">
          <h2 className="text-center text-4xl font-normal mb-2 ">
            Mall Of: Endless Possibilities
          </h2>
          <p className="text-center text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="relative">
          <Image
            src={VideoPoster}
            width={960}
            height={540}
            alt="About Image"
            className="w-full h-auto"
            unoptimized
          />
          <button
            className="btn bg-white text-[#0F1500] px-4 rounded-full absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2  mx-auto"
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlay className="" />
          </button>
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="bg-white  rounded-lg max-w-2xl w-full relative  "
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  width="100"
                  height="240"
                  controls
                  className="w-full h-auto rounded-lg"
                >
                  <source src="" type="video/mp4" />
                </video>
                <button
                  className=" text-black rounded-md absolute top-0 right-0"
                  onClick={() => setIsModalOpen(false)}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12">
          <div className="rounded-lg bg-[#ffffff0f] p-8 cursor-pointer">
            <div className="flex flex-row justify-between items-center">
              <div className="w-full lg:w-[60%] text-white">
                <span className="mb-8 table text-base tracking-[1px]">25 SR/GUEST</span>
                <h4 className="mb-3 ">Get your General Access Ticket</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text e
                </p>
              </div>
              <div className="">
                <FaArrowRight className="icons hover-transition group-hover:translate-x-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
