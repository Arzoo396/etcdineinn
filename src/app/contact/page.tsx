'use client';

import Navbar from "@/Components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center transition-transform transform hover:scale-105">Contact Us</h1>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-lg mb-6">
              For any inquiries or to make a reservation, please feel free to contact us through the following methods:
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 transition-transform transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 transition-transform duration-300 hover:scale-125" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8.1V21l9-4.5L21 21V8.1L12 12.6 3 8.1z"></path>
                </svg>
                <p className="text-lg">
                  Mobile: <a href="tel:+9890299075" className="text-blue-500 hover:underline transition-colors duration-300">9890299075</a>
                </p>
              </div>
              <div className="flex items-center space-x-4 transition-transform transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 transition-transform duration-300 hover:scale-125" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13.5V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7.5L10 12l9 1.5z"></path>
                </svg>
                <p className="text-lg">
                  Email: <a href="mailto:etc.dinein2023@gmail.com" className="text-blue-500 hover:underline transition-colors duration-300">etc.dinein2023@gmail.com</a>
                </p>
              </div>
              <div className="flex items-center space-x-4 transition-transform transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 transition-transform duration-300 hover:scale-125" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 12l-1 1-1-1v-1a4 4 0 0 0 0-8h1a4 4 0 0 1 4 4v1a4 4 0 0 0 0 4h-1v-1zM5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0z"></path>
                </svg>
                <p className="text-lg">
                  Address: Etc Dine Inn Restaurant, Opp to Delhi Public School, Kamptee Road, Nagpur 441001
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Find Us on the Map</h2>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5243925203495!2d79.1567918748815!3d21.211044480484304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7317c0e7891%3A0x6684cd268e7bc1f!2sETC%20Dine%20inn%20Family%20Garden%20restaurant!5e0!3m2!1sen!2sin!4v1722377095467!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
            <p className="text-lg">
              Our restaurant is open [days of the week] from [opening time] to [closing time]. We look forward to welcoming you for a memorable dining experience!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}