import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-40 container">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]">
          Welcome to Etc Dine Inn, an open garden family restaurant featuring a live kitchen where our chefs craft each dish to perfection. Enjoy our diverse menu, from appetizers to desserts, all made with fresh, locally sourced ingredients. Join us for an unforgettable dining experience under the stars and follow us on Instagram @etcdineinn for updates and special events.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-accent">ETC DINE INN</h2>

          <ul className="space-y-2">
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-accent text-2xl pt-16">
            <a href="https://www.facebook.com/etcdineinn" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/etcdineinn" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/7744850878" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright 2024 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
