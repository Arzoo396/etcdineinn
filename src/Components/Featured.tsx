import Image from "next/image";
import React from "react";
import Dash from "./Dash";

const Featured = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
      Welcome to our Featured Food section! Here, we showcase our top dishes made with the freshest ingredients. Each bite is crafted to delight your taste buds and provide a memorable dining experience. Enjoy the best our kitchen has to offer!
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__1.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Chicken Lollipop</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Savor the crispy, tender delight of our Chicken Lollipop, perfectly seasoned and served with a tangy dipping sauce for an unforgettable taste experience.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__2.jpg"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Mutton Special</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Indulge in our Mutton Special, featuring tender, slow-cooked mutton infused with aromatic spices for a rich and savory experience.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__3.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Paneer Amritsari Tikka</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Paneer Amritsari Tikka: Tender paneer cubes marinated in spiced yogurt, grilled to a smoky perfection. Served with mint chutney and lemon wedges for a tangy, savory start to your meal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
