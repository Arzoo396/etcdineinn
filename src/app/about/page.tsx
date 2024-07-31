'use client';

import Navbar from "@/Components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">About Etc Dine Inn</h1>
        <br/>
        <p className="mb-6 text-lg leading-relaxed">
          Welcome to Etc Dine Inn, an enchanting open garden family restaurant where culinary artistry meets a serene outdoor ambiance. Our unique live kitchen allows you to witness the magic as our skilled chefs prepare each dish to perfection, using the freshest ingredients sourced locally and from our very own garden.
        </p>
        
        <p className="mb-6 text-lg leading-relaxed">
          At Etc Dine Inn, we believe in creating unforgettable dining experiences for families and friends. Whether you’re here to savor our mouthwatering appetizers, hearty main courses, indulgent desserts, or refreshing beverages, our diverse menu caters to every palate.
        </p>
        
        <p className="mb-8 text-lg leading-relaxed">
          Join us for an evening of delightful flavors, warm hospitality, and the charm of dining under the stars. Follow us on Instagram <a href="https://instagram.com/etcdineinn" className="text-blue-500 hover:underline">@etcdineinn</a> to stay updated on our latest offerings and special events. We look forward to welcoming you to our culinary oasis!
        </p>

        <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
        <p className="mb-8 text-lg leading-relaxed">
          At Etc Dine Inn, our mission is to provide exceptional dining experiences that combine quality cuisine with a relaxing outdoor atmosphere, ensuring every visit is memorable.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Special Features</h2>
        <ul className="list-disc list-inside mb-8 text-lg">
          <li>Live kitchen experience</li>
          <li>Seasonal menu offerings</li>
          <li>Private event hosting</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <p className="mb-8 text-lg leading-relaxed">
          For reservations, please call us at [phone number] or email us at [email address]. We are open [days of the week] from [opening time] to [closing time].
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Choose Best Service</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Enjoy an evening under the stars with our personalized service, where every dish is crafted with passion and served with a smile.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[250px] text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">Table Service</h3>
              <p className="text-lg">
                Personalized service with waitstaff attending to guests at their tables, ideal for a relaxed dining experience.
              </p>
            </div>
            <div className="flex-1 min-w-[250px] text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">Customizable Menus for Events</h3>
              <p className="text-lg">
                Offer customizable menus for private events like birthdays, anniversaries, and corporate gatherings, ensuring a personalized dining experience.
              </p>
            </div>
            <div className="flex-1 min-w-[250px] text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">💑</div>
              <h3 className="text-xl font-semibold mb-2">Candlelight Dinners</h3>
              <p className="text-lg">
                Create a romantic atmosphere with candlelit tables and soft lighting, perfect for couples looking for a quiet and intimate dining experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
