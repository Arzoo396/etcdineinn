'use client';

import Navbar from "@/Components/Navbar";
import { useState } from 'react';

type MenuItem = {
  name: string;
  price: string;
};

type Menu = {
  [key: string]: MenuItem[];
};

const menu: Menu = {
  Salad: [
    { name: "Indian Crunch", price: "149/-" },
    { name: "Fresh Garden Salad", price: "109/-" },
    { name: "Fine Chopped Salad", price: "149/-" },
    { name: "Punjabi Salad", price: "99/-" },
    { name: "Boondi Raita", price: "109/-" },
    { name: "Mix Raita", price: "139/-" },
    { name: "Pineapple", price: "99/-" },
    { name: "Plain Curd", price: "99/-" },
  ],
  "Papad & Fry": [
    { name: "Papad Roasted", price: "39/-" },
    { name: "Papad Fry", price: "49/-" },
    { name: "Papad Masala", price: "149/-" },
    { name: "Peanut Masala", price: "169/-" },
    { name: "Garlic Fry Masala", price: "149/-" },
    { name: "Green Peas Jeera Fry", price: "159/-" },
    { name: "Green Peas Masala", price: "169/-" },
    { name: "French Fries", price: "59/-" },
  ],
  Soup: [
    { name: "Cream of Tomato", price: "159/-" },
    { name: "Sweet Corn Soup", price: "159/-" },
    { name: "Veg Manchow Soup", price: "159/-" },
    { name: "Hot N Sour Soup", price: "159/-" },
    { name: "Veg Clear Soup", price: "159/-" },
    { name: "Lemon Coriander Soup", price: "159/-" },
    { name: "Cream Of Mushroom", price: "189/-" },
    { name: "Chicken Ginger Garlic Soup", price: "189/-" },
    { name: "Chicken Sweet Corn Soup", price: "189/-" },
    { name: "Chicken Manchow Soup", price: "189/-" },
    { name: "Chicken Hot N Sour Soup", price: "189/-" },
    { name: "Chicken Clear Soup", price: "189/-" },
    { name: "Chicken Tom Kha Gui Soup", price: "219/-" },
    { name: "Mutton Bouillon", price: "249/-" },
  ],
  Starter: [
    { name: "Black Pepper Corn", price: "289/-" },
    { name: "Veg Manchurian", price: "289/-" },
    { name: "Veg Spring Roll", price: "289/-" },
    { name: "Honey Chilly Potato", price: "289/-" },
    { name: "Crispy Corn", price: "289/-" },
    { name: "Crispy Veg", price: "289/-" },
    { name: "Chilly Mushroom", price: "319/-" },
    { name: "Black Pepper Mushroom", price: "319/-" },
    { name: "Chilly Paneer", price: "319/-" },
    { name: "Black Pepper Paneer", price: "319/-" },
    { name: "Paneer 65", price: "319/-" },
    { name: "Paneer Schezwan", price: "319/-" },
    { name: "Paneer Tukda On Fire", price: "359/-" },
    { name: "Chilly Chicken", price: "369/-" },
    { name: "Chicken Schezwan", price: "379/-" },
    { name: "Chicken Black pepper", price: "379/-" },
    { name: "Hot Garlic Chicken", price: "379/-" },
    { name: "Chicken Winglets", price: "379/-" },
    { name: "Dragon Chicken", price: "379/-" },
    { name: "Chicken Tukda On Fire", price: "399/-" },
    { name: "Drums Of Haven", price: "419/-" },
    { name: "Chicken Lollypop", price: "479/-" },
    { name: "Chilly Fish", price: "489/-" },
    { name: "Lemon Butter Fish", price: "479/-" },
    { name: "Black Pepper Fish", price: "479/-" },
    { name: "Garlic Fish", price: "479/-" },
    { name: "Fish Fry", price: "499/-" },
    { name: "Fish Finger", price: "419/-" },
    { name: "Fish Amritsari", price: "569/-" },
    { name: "Chilly Prawns", price: "499/-" },
    { name: "Lemon Butter Prawns", price: "579/-" },
    { name: "Black Pepper Prawns", price: "579/-" },
  ],
  "Noodles & Rice": [
    { name: "Veg Hakka Noodles", price: "269/-" },
    { name: "Veg Fried Rice", price: "269/-" },
    { name: "Schezwan Noodles", price: "279/-" },
    { name: "Veg Schezwan Fried Rice", price: "269/-" },
    { name: "Veg Triple Schezwan Fried Rice", price: "329/-" },
    { name: "Veg American Chop Suey", price: "349/-" },
    { name: "Veg Chinese Chop Suey", price: "349/-" },
    { name: "Chicken Hakka Noodles", price: "299/-" },
    { name: "Chicken Fried Rice", price: "299/-" },
    { name: "Chicken Schezwan Noodles", price: "319/-" },
    { name: "Chicken Schezwan Fried Rice", price: "319/-" },
    { name: "Chicken Triple Schezwan Fried Rice", price: "349/-" },
    { name: "Chicken American Chop Suey", price: "379/-" },
    { name: "Chicken Chinese Chop Suey", price: "379/-" },
  ],
  Tandoor: [
    { name: "Hara Bhara Kabab", price: "279/-" },
    { name: "Veg Seekh Gilafi Kabab", price: "299/-" },
    { name: "Dahi Ke Angare", price: "319/-" },
    { name: "Paneer Tikka", price: "349/-" },
    { name: "Paneer Malai Tikka", price: "329/-" },
    { name: "Paneer Garlic", price: "329/-" },
    { name: "Paneer Achari", price: "349/-" },
    { name: "Paneer Parda", price: "269/-" },
    { name: "Paneer Sehzada", price: "329/-" },
    { name: "Paneer Seekh Gilafi Kabab", price: "279/-" },
    { name: "Paneer Pallo Kabab", price: "299/-" },
    { name: "Cheese Corn Tikki", price: "319/-" },
    { name: "Cheese Seekh Kabab", price: "339/-" },
    { name: "Tandoori Mushroom", price: "369/-" },
    { name: "Stuffed Mushroom", price: "359/-" },
    { name: "Tandoori Veg Platter", price: "579/-" },
    { name: "Chicken Tikka", price: "379/-" },
    { name: "Chicken Garlic Tikka", price: "379/-" },
    { name: "Chicken Seekh Gilafi", price: "379/-" },
    { name: "Murg Raeeszada Kebab", price: "379/-" },
    { name: "Tandoor Chicken Full", price: "419/-" },
    { name: "Tandoor Chicken Half", price: "499/-" },
    { name: "Chicken Seekh Kebab", price: "299/-" },
    { name: "Murg Makkan Tikka", price: "379/-" },
    { name: "Murg Pahadi Tikka", price: "379/-" },
    { name: "Murg Kakori Kebab", price: "379/-" },
    { name: "Chicken Pallo Kebab", price: "379/-" },
    { name: "Murg Afgani", price: "389/-" },
    { name: "Mutton Seekh Kebab (Kubideh)", price: "449/-" },
    { name: "Fish Tikka", price: "479/-" },
    { name: "Tandoori Prawns", price: "579/-" },
    { name: "Non-Veg Platter", price: "879/-" },
  ],
  "Main Course Veg": [
    { name: "Veg Bagbaan", price: "309/-" },
    { name: "Veg Kolhapuri", price: "309/-" },
    { name: "Veg Kadhai", price: "309/-" },
    { name: "Veg Angara", price: "309/-" },
    { name: "Lasuni Methi", price: "309/-" },
    { name: "Lasuni Palak", price: "309/-" },
    { name: "Veg Kofta Curry", price: "309/-" },
    { name: "Veg Egg Curry", price: "309/-" },
    { name: "Veg Bhuna", price: "309/-" },
    { name: "Mushroom Mutter Masala", price: "309/-" },
    { name: "Mushroom Masala", price: "319/-" },
    { name: "Methi Mutter Malai", price: "319/-" },
    { name: "Malai Kofta", price: "319/-" },
    { name: "Veg Kheema Kastoori", price: "309/-" },
    { name: "Veg Laila Majnu", price: "309/-" },
    { name: "Veg Patiyala", price: "309/-" },
    { name: "Kadhai Paneer", price: "319/-" },
    { name: "Palak Paneer", price: "339/-" },
    { name: "Paneer Angara", price: "339/-" },
    { name: "Paneer Tikka Masala", price: "339/-" },
    { name: "Paneer Do Pyaza", price: "339/-" },
    { name: "Paneer Makkhanwala", price: "339/-" },
    { name: "Paneer Dhabawala", price: "339/-" },
    { name: "Paneer Lacchedar", price: "339/-" },
    { name: "Paneer Lajawaab", price: "349/-" },
    { name: "Shahi Paneer", price: "349/-" },
    { name: "Paneer Bhurji Curry", price: "349/-" },
    { name: "Kaju Curry", price: "349/-" },
    { name: "Kaju Saoji Curry", price: "349/-" },
    { name: "Cheese Butter Masala", price: "349/-" },
  ],
  "Main Course Non-Veg": [
    { name: "Murg Tikka Masala", price: "399/-" },
    { name: "Murg Rara Masala", price: "399/-" },
    { name: "Murg Kadai", price: "399/-" },
    { name: "Murg Bhuna", price: "399/-" },
    { name: "Murg Punjabi", price: "399/-" },
    { name: "Murg Do Pyaza", price: "399/-" },
    { name: "Murg Patiyala", price: "399/-" },
    { name: "Murg Masala", price: "399/-" },
    { name: "Murg Curry", price: "399/-" },
    { name: "Murg Kolhapuri", price: "399/-" },
    { name: "Murg Waradi", price: "399/-" },
    { name: "Murg Raziya", price: "499/-" },
    { name: "Murg Kebab Ki Kadai", price: "449/-" },
    { name: "Murg Raeeszade", price: "499/-" },
    { name: "Murg Mehbooba", price: "499/-" },
    { name: "Murg Mussalam", price: "999/-" },
    { name: "Gosht Bhuna", price: "219/-" },
    { name: "Gosht Roganjosh", price: "249/-" },
    { name: "Dhaba Gosht", price: "249/-" },
    { name: "Gosht Masala", price: "249/-" },
    { name: "Gosht Curry", price: "439/-" },
    { name: "Gosht Saoji", price: "449/-" },
    { name: "Ghost Rara Masala", price: "499/-" },
    { name: "Gosht Razala", price: "499/-" },
    { name: "Egg Curry", price: "499/-" },
    { name: "Egg Masala", price: "499/-" },
    { name: "Egg Bhurji Curry", price: "449/-" },
    { name: "Egg Saoji", price: "519/-" },
  ],
  "Fish & Prawns": [
    { name: "Fish Curry", price: "469/-" },
    { name: "Fish Tikka Masala", price: "469/-" },
    { name: "Fish Masala", price: "469/-" },
    { name: "Saoji Fish", price: "469/-" },
    { name: "Prawns Curry", price: "519/-" },
    { name: "Prawns Masala", price: "519/-" },
    { name: "Saoji Prawns", price: "519/-" },
  ],
  Dal: [
    { name: "Dal Fry", price: "189/-" },
    { name: "Jeera Dal", price: "188/-" },
    { name: "Dal Tadka", price: "198/-" },
    { name: "Dal Kolhapuri", price: "199/-" },
    { name: "Dal Makhani", price: "249/-" },
  ],
  Breads: [
    { name: "Roti Basket", price: "379/-" },
    { name: "Tandoori Roti", price: "30/-" },
    { name: "Tandoori Roti Butter", price: "40/-" },
    { name: "Tandoori Naan", price: "50/-" },
    { name: "Tandoori Butter Naan", price: "60/-" },
    { name: "Tandoori Garlic Butter Naan", price: "70/-" },
    { name: "Cheese Garlic Naan", price: "90/-" },
    { name: "Laccha Paratha", price: "60/-" },
    { name: "Missi Roti", price: "50/-" },
    { name: "Cheese Kulcha", price: "120/-" },
  ],
  Rice: [
    { name: "Plain Rice Full", price: "129/-" },
    { name: "Jeera Rice Full", price: "149/-" },
    { name: "Garlic Rice", price: "179/-" },
    { name: "Butter Garlic Rice", price: "189/-" },
    { name: "Veg Pulao", price: "219/-" },
    { name: "Veg Biryani Full (Raita/ Gravy)", price: "279/-" },
    { name: "Murg Biryani (4 PCS)", price: "319/-" },
    { name: "Murg Tikka Biryani", price: "429/-" },
    { name: "Gosht Biryani (4 PCS)", price: "449/-" },
  ],
  Dessert: [
    { name: "Gulab Jamun", price: "89/-" },
    { name: "Gulab Jamun With Vanilla Ice Cream", price: "119/-" },
    { name: "Ice Cream Vanilla/ Chocolate", price: "89/-" },
    { name: "Sizzling Brownie With Ice Cream", price: "199/-" },
  ],
};

const Food = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof Menu | null>(null);

  return (
    <>
  <Navbar />
  <div className="container mx-auto px-4 py-6">
    <h1 className="text-4xl font-bold mb-4 text-center">Etc Dine Inn Menu</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {Object.keys(menu).map((category) => (
        <button
          key={category}
          className={`text-lg font-semibold py-2 px-4 rounded-lg ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
    {selectedCategory && (
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menu[selectedCategory].map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <span className="text-lg">{item.name}</span>
              <span className="text-lg font-semibold">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</>

  );
};

export default Food;