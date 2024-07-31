import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="container pt-6">
      <div className="flex justify-between items-center">
        <Link href="/">
            <Image src="/logo.png" width={150} height={150} alt="logo" />
        </Link>
        <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/food">
              Food
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/signup" className="bg-accent text-white px-6 py-2 rounded-3xl">
               SignUp
            </Link>
          </li>
        </ul>
        <AiOutlineMenu className="md:hidden text-accent" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
