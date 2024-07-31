import React from "react";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    img: "/services__1.png",
    title: "Professonal Kitchen",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    img: "/services__2.png",
    title: "Table Service",
    desc: "Personalized service with waitstaff attending to guests at their tables, ideal for a relaxed dining experience.",
  },
  {
    img: "/services__3.png",
    title: "Customizable Menus for Events",
    desc: "Offer customizable menus for private events like birthdays, anniversaries, and corporate gatherings, ensuring a personalized dining experience.",
  },
  {
    img: "/services__4.png",
    title: "Candlelight Dinners",
    desc: "Create a romantic atmosphere with candlelit tables and soft lighting, perfect for couples looking for a quiet and intimate dining experience.",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
        Enjoy an enchanting evening under the stars with our personalized service, where every dish is crafted with passion and served 
          <br />
          with a smile.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
