import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        w-full
        bg-white/90
        backdrop-blur-md
        font-zurixFont
        text-black
        shadow-[0px_0px_10px_0px_rgb(0,0,0,0.15)]
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[70px]
          w-[94%]
          items-center
          justify-between
          px-2

          sm:min-h-[75px]
          sm:w-[92%]

          md:min-h-[80px]
          md:w-[90%]

          lg:w-[85%]
          xl:max-w-[1400px]
        "
      >
        <ul
          className="
            hidden
            items-center
            gap-5
            text-[14px]
            font-semibold

            md:flex

            lg:gap-7
            lg:text-[15px]

            xl:gap-10
          "
        >
          <li className="group relative cursor-pointer">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                bg-black
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </li>

          <li className="group relative cursor-pointer">
            <Link to="/products" onClick={closeMenu}>
              Shop
            </Link>

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                bg-black
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </li>

          <li className="group relative cursor-pointer">
            <span>Pages</span>

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                bg-black
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </li>

          <li className="group relative cursor-pointer">
            <span>Blog</span>

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                bg-black
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </li>

          <li className="group relative cursor-pointer">
            <span>Contact Us</span>

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                bg-black
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            flex
            items-center
            justify-center
            text-[26px]
            md:hidden
          "
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>

        <Link
          to="/"
          className="
            absolute
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
          "
        >
          <h1
            className="
              cursor-pointer
              text-[24px]
              font-bold
              uppercase
              tracking-[-1px]

              sm:text-[28px]

              md:text-[32px]

              lg:text-[36px]
            "
          >
            ZURI<span className="text-red-500">X.</span>
          </h1>
        </Link>

        <ul
          className="
            ml-auto
            flex
            items-center
            gap-2
            text-[20px]

            sm:gap-3
            sm:text-[22px]

            md:gap-4
            md:text-[23px]

            lg:gap-5
            lg:text-[24px]
          "
        >
          {/* User */}
          <Link to="/profile">
            <li
              className="
              cursor-pointer
              transition-transform
              duration-300
              hover:scale-110
            "
            >
              <FaRegUser />
            </li>
          </Link>

          {/* Search */}
          <li
            className="
              cursor-pointer
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <IoIosSearch />
          </li>

          {/* Wishlist */}
          <li
            className="
              cursor-pointer
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <CiHeart />
          </li>

          {/* Cart */}
          <Link to="/cart">
            <li
              className="
              cursor-pointer
              transition-transform
              duration-300
              hover:scale-110
            "
            >
              <MdOutlineShoppingBag />
            </li>
          </Link>
        </ul>
      </div>

      <div
        className={`
          md:hidden
          overflow-hidden
          bg-black
          transition-all
          duration-500
          ease-in-out

          ${isMenuOpen ? "max-h-[500px] border-t border-white/20" : "max-h-0"}
        `}
      >
        <ul
          className="
            flex
            flex-col
            items-center
            gap-5
            px-5
            py-6
            text-[15px]
            font-semibold
            text-white
          "
        >
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="transition-colors hover:text-gray-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              onClick={closeMenu}
              className="transition-colors hover:text-gray-400"
            >
              Shop
            </Link>
          </li>

          <li
            className="cursor-pointer transition-colors hover:text-gray-400"
            onClick={closeMenu}
          >
            Pages
          </li>

          <li
            className="cursor-pointer transition-colors hover:text-gray-400"
            onClick={closeMenu}
          >
            Blog
          </li>

          <li
            className="cursor-pointer transition-colors hover:text-gray-400"
            onClick={closeMenu}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
