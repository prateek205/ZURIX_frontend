import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        font-zurixFont
        transition-all
        duration-500
        ease-in-out

        ${
          isScrolled
            ? "bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          min-h-[75px]
          w-[92%]
          items-center
          justify-between
          px-4
          md:min-h-[85px]
          md:w-[90%]
          lg:w-[85%]
        "
      >
        {/* =========================
            LEFT - DESKTOP MENU
        ========================== */}

        <ul
          className={`
            hidden
            items-center
            gap-6
            text-[15px]
            font-semibold
            md:flex
            lg:gap-9
            xl:gap-11

            ${isScrolled ? "text-black" : "text-white"}
          `}
        >
        <Link to={"/"}>
          <li className="group relative cursor-pointer">
            Home
            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                transition-all
                duration-300
                group-hover:w-full
                ${isScrolled ? "bg-black" : "bg-white"}
              `}
            />
          </li>
        </Link>
        <Link to={"/products"}>
          <li className="group relative cursor-pointer">
            Shop
            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                transition-all
                duration-300
                group-hover:w-full
                ${isScrolled ? "bg-black" : "bg-white"}
              `}
            />
          </li>
        </Link>

          <li className="group relative cursor-pointer">
            Pages
            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                transition-all
                duration-300
                group-hover:w-full
                ${isScrolled ? "bg-black" : "bg-white"}
              `}
            />
          </li>

          <li className="group relative cursor-pointer">
            Blog
            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                transition-all
                duration-300
                group-hover:w-full
                ${isScrolled ? "bg-black" : "bg-white"}
              `}
            />
          </li>

          <li className="group relative cursor-pointer">
            Contact Us
            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                transition-all
                duration-300
                group-hover:w-full
                ${isScrolled ? "bg-black" : "bg-white"}
              `}
            />
          </li>
        </ul>

        {/* =========================
            CENTER - LOGO
        ========================== */}

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
          "
        >
          <h1
            className={`
              cursor-pointer
              text-[28px]
              font-bold
              uppercase
              tracking-[-1px]
              transition-colors
              duration-500
              sm:text-[32px]
              md:text-[36px]

              ${isScrolled ? "text-black" : "text-white"}
            `}
          >
            ZURIX<span className="text-[20px]">.</span>
          </h1>
        </div>

        {/* =========================
            RIGHT - ICONS
        ========================== */}

        <ul
          className={`
            ml-auto
            flex
            items-center
            gap-3
            text-[22px]
            transition-colors
            duration-500
            sm:gap-4
            md:gap-5
            md:text-[24px]

            ${isScrolled ? "text-black" : "text-white"}
          `}
        >
          {/* User */}
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

          {/* Mobile Menu */}
          <li
            className="
              cursor-pointer
              text-[27px]
              md:hidden
            "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </li>
        </ul>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          md:hidden

          ${isMenuOpen ? "max-h-[400px] border-t" : "max-h-0"}

          ${
            isScrolled
              ? "border-black/10 bg-white"
              : "border-white/20 bg-black/20 backdrop-blur-md"
          }
        `}
      >
        <ul
          className={`
            flex
            flex-col
            items-center
            gap-6
            py-7
            text-[16px]
            font-semibold

            ${isScrolled ? "text-black" : "text-white"}
          `}
        >
          <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            Home
          </li>

          <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            Shop
          </li>

          <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            Pages
          </li>

          <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            Blog
          </li>

          <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
