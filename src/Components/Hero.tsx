import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
        src="/hero.png"
        width={1000}
        height={600}
        alt="hero_bg"
      />
      <Navbar />
      <div className="container h-[calc(100vh-120px)] grid items-center">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4">
          <p>Monsoon Offer 10% Discount</p>
          <p className="uppercase font-medium">Experience ETC Dine Inn: Where Flavor Comes to Life</p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Delicious <span className="text-accent">Food</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
          Discover a variety of dishes that capture the essence of dining pleasure. Your culinary journey begins here
            <br /> What are you waiting for?
          </p>

          <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
