import React, { useEffect, useState } from "react";

import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag, MdMenu, MdClose } from "react-icons/md";

import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import { useGetProfileQuery } from "../redux/authApi";
import { useGetAllCartsQuery } from "../redux/cartApi";
import { useGetAllWishlistQuery } from "../redux/wishlistApi";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ==========================================
  // SEARCH STATE
  // ==========================================

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // ==========================================
  // CLOSE MOBILE MENU
  // ==========================================

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // ==========================================
  // PROFILE API
  // ==========================================

  const {
    data: profileData,
    isLoading: profileLoading,
    isError: profileError,
  } = useGetProfileQuery();

  // ==========================================
  // USER DATA
  // ==========================================

  const user = profileData?.data?.user || profileData?.data || null;

  // ==========================================
  // LOGIN STATUS
  // ==========================================

  const isLoggedIn = !profileError && !!user;

  // ==========================================
  // USER NAME
  // ==========================================

  const userName = user?.name || user?.username || user?.firstName || "";

  // ==========================================
  // CART API
  // ONLY CALL WHEN USER IS LOGGED IN
  // ==========================================

  const { data: cartData } = useGetAllCartsQuery(undefined, {
    skip: !isLoggedIn,
  });

  // ==========================================
  // CART ITEMS
  // ==========================================

  const cartItems = isLoggedIn ? cartData?.data?.items || [] : [];

  // ==========================================
  // CART COUNTER
  // ==========================================

  const cartCount = isLoggedIn
    ? cartItems.reduce((total, item) => {
        return total + Number(item?.quantity || 0);
      }, 0)
    : 0;

  // ==========================================
  // WISHLIST API
  // ONLY CALL WHEN USER IS LOGGED IN
  // ==========================================

  const { data: wishlistData } = useGetAllWishlistQuery(undefined, {
    skip: !isLoggedIn,
  });

  // ==========================================
  // WISHLIST ITEMS
  // ==========================================

  const wishlistItems = isLoggedIn ? wishlistData?.data?.[0]?.item || [] : [];

  // ==========================================
  // WISHLIST COUNTER
  // ==========================================

  const wishlistCount = wishlistItems.length;

  // ==========================================
  // AUTHENTICATION CHECK
  // ==========================================

  const handleProtectedNavigation = (path, message) => {
    closeMenu();

    if (!isLoggedIn) {
      toast.error(message);

      navigate("/login");
      return;
    }

    navigate(path);
  };

  // ==========================================
  // PROFILE CLICK
  // ==========================================

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      toast.error("Please login to view your profile.");

      navigate("/login");
      return;
    }

    navigate("/profile");
  };

  // ==========================================
  // WISHLIST CLICK
  // ==========================================

  const handleWishlistClick = () => {
    handleProtectedNavigation(
      "/wishlist",
      "Please login to view your wishlist.",
    );
  };

  // ==========================================
  // CART CLICK
  // ==========================================

  const handleCartClick = () => {
    handleProtectedNavigation(
      "/cart",
      "Please login to view your shopping bag.",
    );
  };

  // ==========================================
  // OPEN SEARCH
  // ==========================================

  const openSearch = () => {
    setIsSearchOpen(true);
    setIsMenuOpen(false);
  };

  // ==========================================
  // CLOSE SEARCH
  // ==========================================

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchValue("");
  };

  // ==========================================
  // PREVENT BODY SCROLL WHEN SEARCH IS OPEN
  // ==========================================

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  // ==========================================
  // SEARCH SUBMIT
  // ==========================================

  const handleSearch = (e) => {
    e.preventDefault();

    const value = searchValue.trim();

    if (!value) {
      toast.error("Please enter a product name to search.");
      return;
    }

    console.log("SEARCH:", value);

    // Later:
    // navigate(`/products?search=${value}`);

    closeSearch();
  };

  return (
    <>
      {/* ==========================================
          NAVBAR
      ========================================== */}

      <nav
        className="
          sticky
          top-0
          z-50
          w-full
          bg-white/90
          font-zurixFont
          text-black
          shadow-[0px_0px_10px_0px_rgb(0,0,0,0.15)]
          backdrop-blur-md
        "
      >
        {/* ==========================================
            MAIN NAVBAR
        ========================================== */}

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
          {/* ==========================================
              DESKTOP MENU
          ========================================== */}

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
            {/* Home */}

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

            {/* Shop */}

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

            {/* Pages */}

            <li
              className="
                cursor-pointer
                transition-colors
                hover:text-gray-400
              "
              onClick={closeMenu}
            >
              Pages
            </li>

            {/* Blog */}

            <li
              className="
                cursor-pointer
                transition-colors
                hover:text-gray-400
              "
              onClick={closeMenu}
            >
              Blog
            </li>

            {/* Contact */}

            <li
              className="
                cursor-pointer
                transition-colors
                hover:text-gray-400
              "
              onClick={closeMenu}
            >
              Contact Us
            </li>
          </ul>

          {/* ==========================================
              MOBILE MENU BUTTON
          ========================================== */}

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              z-10
              flex
              cursor-pointer
              items-center
              justify-center
              text-[26px]
              md:hidden
              sm:text-[28px]
            "
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* ==========================================
              LOGO
          ========================================== */}

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
              ZURI
              <span className="text-red-500">X.</span>
            </h1>
          </Link>

          {/* ==========================================
              RIGHT SIDE ICONS
          ========================================== */}

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
            {/* ==========================================
                PROFILE
            ========================================== */}

            <li
              onClick={handleProfileClick}
              className="
                flex
                cursor-pointer
                items-center
                transition-transform
                duration-300
                hover:scale-105
              "
            >
              {profileLoading ? (
                <FaRegUser />
              ) : isLoggedIn && userName ? (
                <span
                  className="
                    max-w-[100px]
                    truncate
                    text-[13px]
                    font-semibold
                    sm:text-[14px]
                    md:text-[15px]
                  "
                >
                  {userName}
                </span>
              ) : (
                <FaRegUser />
              )}
            </li>

            {/* ==========================================
                SEARCH
            ========================================== */}

            <li
              onClick={openSearch}
              className="
                cursor-pointer
                transition-transform
                duration-300
                hover:scale-110
              "
              aria-label="Open search"
            >
              <IoIosSearch />
            </li>

            {/* ==========================================
                WISHLIST
            ========================================== */}

            <li
              onClick={handleWishlistClick}
              className="
                relative
                cursor-pointer
                transition-transform
                duration-300
                hover:scale-110
              "
              aria-label="Wishlist"
            >
              <CiHeart />

              {/* WISHLIST COUNTER */}

              {isLoggedIn && wishlistCount > 0 && (
                <span
                  className="
                    absolute
                    -right-2
                    -top-2
                    flex
                    h-[17px]
                    min-w-[17px]
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    px-1
                    text-[10px]
                    font-bold
                    leading-none
                    text-white
                  "
                >
                  {wishlistCount > 99 ? "99+" : wishlistCount}
                </span>
              )}
            </li>

            {/* ==========================================
                SHOPPING BAG
            ========================================== */}

            <li
              onClick={handleCartClick}
              className="
                relative
                cursor-pointer
                transition-transform
                duration-300
                hover:scale-110
              "
              aria-label="Shopping bag"
            >
              <MdOutlineShoppingBag />

              {/* CART COUNTER */}

              {isLoggedIn && cartCount > 0 && (
                <span
                  className="
                    absolute
                    -right-2
                    -top-2
                    flex
                    h-[17px]
                    min-w-[17px]
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    px-1
                    text-[10px]
                    font-bold
                    leading-none
                    text-white
                  "
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </li>
          </ul>
        </div>

        {/* ==========================================
            MOBILE MENU
        ========================================== */}

        <div
          className={`
            overflow-hidden
            bg-black
            transition-all
            duration-500
            ease-in-out
            md:hidden
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
              className="
                cursor-pointer
                transition-colors
                hover:text-gray-400
              "
              onClick={closeMenu}
            >
              Pages
            </li>

            <li
              className="
                cursor-pointer
                transition-colors
                hover:text-gray-400
              "
              onClick={closeMenu}
            >
              Blog
            </li>

            <li
              className="
                cursor-pointer
                transition-colors
                hover:text-gray-400
              "
              onClick={closeMenu}
            >
              Contact Us
            </li>
          </ul>
        </div>
      </nav>

      {/* ==================================================
          FULL SCREEN SEARCH OVERLAY
      ================================================== */}

      {isSearchOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            min-h-screen
            w-full
            items-start
            justify-center
            bg-black/40
            px-5
            py-28
            backdrop-blur-[2px]
          "
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeSearch();
            }
          }}
        >
          {/* SEARCH BOX */}

          <div
            className="
              relative
              w-full
              max-w-[600px]
              rounded-lg
              bg-white
              px-6
              py-8
              shadow-2xl
              sm:px-8
              sm:py-10
            "
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={closeSearch}
              className="
                absolute
                right-4
                top-4
                flex
                h-9
                w-9
                cursor-pointer
                items-center
                justify-center
                rounded-full
                text-2xl
                text-gray-600
                transition-all
                duration-300
                hover:rotate-90
                hover:bg-black
                hover:text-white
              "
              aria-label="Close search"
            >
              <MdClose />
            </button>

            {/* SEARCH HEADING */}

            <p
              className="
                mb-5
                text-center
                text-xs
                font-semibold
                uppercase
                tracking-[3px]
                text-gray-500
              "
            >
              Search Products
            </p>

            {/* SEARCH FORM */}

            <form
              onSubmit={handleSearch}
              className="
                flex
                w-full
                items-center
                border-b
                border-gray-300
                pb-3
                focus-within:border-black
              "
            >
              <IoIosSearch
                className="
                  mr-3
                  shrink-0
                  text-2xl
                  text-gray-700
                "
              />

              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
                placeholder="Search for products..."
                className="
                  w-full
                  bg-transparent
                  text-base
                  font-medium
                  text-black
                  outline-none
                  placeholder:text-gray-400
                  sm:text-lg
                "
              />

              <button
                type="submit"
                className="
                  ml-3
                  shrink-0
                  cursor-pointer
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-black
                  transition-colors
                  hover:text-red-500
                  sm:text-sm
                "
              >
                Search
              </button>
            </form>

            {/* SEARCH HINT */}

            <p
              className="
                mt-4
                text-center
                text-xs
                text-gray-400
              "
            >
              Type a product name and press Enter
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
