"use client";

import React, { useState } from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/cake.avif",
    title: "Delicious Cake",
    desc: "A delightful blend of flavors, perfect for a sweet finish.",
    price: "$29.50",
    category: "Dessert",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "Classic Margherita pizza with fresh mozzarella and basil.",
    price: "$19.50",
    category: "Main Course",
  },
  {
    img: "/salad.jpg",
    title: "Caesar Salad",
    desc: "Crisp romaine lettuce with Caesar dressing and croutons.",
    price: "$12.50",
    category: "Salads",
  },
  {
    img: "/soup.jpg",
    title: "Tomato Soup",
    desc: "Rich and creamy tomato soup with a hint of basil.",
    price: "$8.50",
    category: "Soup",
  },
  {
    img: "/steak.jpg",
    title: "Grilled Steak",
    desc: "Juicy grilled steak with a side of roasted vegetables.",
    price: "$34.50",
    category: "Meat & Fish",
  },
  {
    img: "/fish.jpg",
    title: "Baked Salmon",
    desc: "Tender salmon fillet with a lemon butter sauce.",
    price: "$28.50",
    category: "Meat & Fish",
  },
  {
    img: "/smoothie.jpg",
    title: "Fruit Smoothie",
    desc: "A refreshing blend of seasonal fruits.",
    price: "$6.50",
    category: "Drinks",
  },
  {
    img: "/coffee.jpg",
    title: "Cappuccino",
    desc: "Rich and creamy cappuccino with a touch of cinnamon.",
    price: "$4.50",
    category: "Drinks",
  },
  {
    img: "/pancakes.jpg",
    title: "Pancakes",
    desc: "Fluffy pancakes served with maple syrup and berries.",
    price: "$10.50",
    category: "Breakfast",
  },
  {
    img: "/omelette.jpg",
    title: "Veggie Omelette",
    desc: "Omelette loaded with fresh vegetables and cheese.",
    price: "$9.50",
    category: "Breakfast",
  },
];

const categories = [
  "Appetizers",
  "Breakfast",
  "Salads",
  "Meat & Fish",
  "Soup",
  "Dessert",
  "Drinks",
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");

  const filteredMenuData = menuData.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
          Experience a delightful array of appetizers, hearty main courses,
          indulgent desserts, and refreshing beverages, all crafted with fresh,
          garden-grown ingredients and family recipes, perfect for an evening in
          our open family garden restaurant.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        {categories.map((category) => (
          <li
            key={category}
            className={`p-1 ${
              selectedCategory === category ? "bg-accent text-white" : ""
            } cursor-pointer`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src="/menu_left.png"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {filteredMenuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
