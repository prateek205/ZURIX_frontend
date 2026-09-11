import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 w-[92%] font-zurixFont md:w-[85%] mx-auto mt-5 md:mt-10 bg-gray-400/10 backdrop-blur-sm rounded-md shadow-[0_0px_5px_0px]">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <div className="order-1 md:order-2">
          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            zurix
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex order-1 gap-6 lg:gap-10 xl:gap-12 items-center text-white font-bold">
          <li className="cursor-pointer hover:text-gray-300 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            Shop
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            Pages
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            Blog
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            Contact Us
          </li>
        </ul>

        {/* Icons */}
        <ul className="flex order-3 items-center gap-3 sm:gap-4 md:gap-5 text-xl sm:text-2xl md:text-[25px] text-white">
          <li className="cursor-pointer hover:text-gray-300 transition">
            <FaRegUser />
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition">
            <IoIosSearch />
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition">
            <CiHeart />
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition">
            <MdOutlineShoppingBag />
          </li>

          {/* Hamburger - Mobile Only */}
          <li
            className="md:hidden cursor-pointer text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/20">
          <ul className="flex flex-col items-center gap-5 py-5 text-white font-bold">
            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </li>

            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </li>

            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pages
            </li>

            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </li>

            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
