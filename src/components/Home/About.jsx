import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="About py-10">
      <div className="container">
        <div className="w-full lg:w-[80%] mx-auto text-white mb-8">
        <h2 className="text-center">Mall Of: Endless Possibilities</h2>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        </div>
        <div className="">
            <Image src={} width={960} height={960} alt="About Image" className="w-full h-auto"/>
        </div>
      </div>
    </section>
  );
};

export default About;
