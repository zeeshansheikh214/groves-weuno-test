import { Resturant, Resturant1, Resturant2, Resturant3 } from "@/asstes";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ResturantGrid = () => {
  const data = [
    {
      image: Resturant,
      title: "Vide Vera",
      price: 100,
    },
    {
      image: Resturant1,
      title: "Zama Zullu",
      price: 100,
    },
    {
      image: Resturant2,
      title: "Khawaja Yanni",
      price: 100,
    },
    {
      image: Resturant3,
      title: "Yamagata",
      price: 100,
    },
  ];
  return (
    <section className="About py-10">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-[70%] mx-auto text-white mb-12">
          <h2 className="text-center text-4xl font-normal mb-2 ">
            Experience the Finest Cuisine
          </h2>
          <p className="text-center text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-[38px] text-left bg-[#ffffff0f] group cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt="Resturant"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                  unoptimized
                />
                <div className="px-0 md:px-4 my-4 flex flex-row justify-between items-center">
                  <div>
                    <h4 className="text-2xl md:text-3xl mb-4 !font-light">{item.title}</h4>
                    <span className=" rounded-full py-1 px-4 text-white bg-themeSecondary uppercase tracking-[2px] text-xs">
                      {item.price} sr per guest
                    </span>
                  </div>
                  <FaArrowRight className="icons hover-transition group-hover:translate-x-2 text-4xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResturantGrid;
