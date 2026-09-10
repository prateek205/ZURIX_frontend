import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="relative z-10 bg-gray-400/10 flex items-center justify-between shadow-[0_0px_5px_0px] rounded-md w-[85%] m-auto mt-10 backdrop-blur-sm">
      <ul className="flex gap-16 items-center p-4 text-white font-bold">
        <li>Home</li>
        <li>Shop</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <div>
          <h1 className="uppercase text-4xl font-bold">zurix</h1>
        </div>
      </ul>
      <ul className="flex gap-5 p-6 text-[25px] text-white">
        <li>
          <FaRegUser />
        </li>
        <li>
          <IoIosSearch />
        </li>
        <li>
          <CiHeart />
        </li>
        <li>
          <MdOutlineShoppingBag />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
