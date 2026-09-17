import React, { useState } from "react";
import { useGetProductsQuery } from "../../redux/productApi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState("bestSeller");

  const { data, isLoading, isError } = useGetProductsQuery();

  const products = data?.data || [];

  const displayedProducts = products.slice(0, 8);

  return (
    <section
      className="
        mx-auto
        w-[92%]
        py-[50px]

        sm:w-[90%]
        sm:py-[65px]

        md:w-[88%]
        md:py-[80px]

        lg:w-[85%]
        lg:py-[100px]
      "
    >
      {/* =========================
          SECTION HEADER
      ========================== */}

      <div
        className="
          mb-[30px]

          sm:mb-[38px]

          md:mb-[42px]

          lg:mb-[45px]
        "
      >
        {/* Small Heading */}

        <p
          className="
            font-zurixFont
            text-[11px]
            uppercase
            tracking-[2px]
            text-[rgb(222,89,34)]

            sm:text-[12px]
            sm:tracking-[2.5px]

            md:text-[14px]
            md:tracking-[3px]

            lg:text-[16px]
          "
        >
          Hot This Week
        </p>

        {/* Heading + Tabs */}

        <div
          className="
            mt-[12px]
            flex
            flex-col
            gap-[20px]

            sm:mt-[14px]

            md:mt-[15px]
            md:gap-[25px]

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Main Heading */}

          <h2
            className="
              font-zurixFont
              text-[30px]
              font-bold
              leading-[1.05]
              tracking-[-1px]

              sm:text-[36px]

              md:text-[42px]

              lg:text-[46px]
              lg:tracking-[-1.5px]
            "
          >
            Trending right now
          </h2>

          {/* =========================
              TABS
          ========================== */}

          <div
            className="
              flex
              w-full
              gap-[8px]

              sm:gap-[10px]

              lg:w-auto
            "
          >
            {/* Best Sellers */}

            <button
              type="button"
              onClick={() => setActiveTab("bestSeller")}
              className={`
                flex
                flex-1
                items-center
                justify-center
                gap-[7px]
                rounded-full
                border
                px-[10px]
                py-[8px]
                text-[11px]
                font-semibold
                transition-all
                duration-300

                sm:flex-none
                sm:gap-[8px]
                sm:px-[16px]
                sm:py-[9px]
                sm:text-[12px]

                md:gap-[10px]
                md:px-[20px]
                md:py-[10px]
                md:text-[14px]

                ${
                  activeTab === "bestSeller"
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-black hover:border-black"
                }
              `}
            >
              <span>Best Sellers</span>

              <span
                className={`
                  flex
                  h-[20px]
                  min-w-[20px]
                  items-center
                  justify-center
                  rounded-full
                  px-1
                  text-[9px]

                  sm:h-[22px]
                  sm:min-w-[22px]
                  sm:text-[10px]

                  md:h-[25px]
                  md:min-w-[25px]
                  md:text-[11px]

                  ${
                    activeTab === "bestSeller"
                      ? "bg-[rgb(222,89,34)] text-white"
                      : "bg-[#eef0f4] text-gray-600"
                  }
                `}
              >
                24
              </span>
            </button>

            {/* New Arrivals */}

            <button
              type="button"
              onClick={() => setActiveTab("newArrival")}
              className={`
                flex
                flex-1
                items-center
                justify-center
                gap-[7px]
                rounded-full
                border
                px-[10px]
                py-[8px]
                text-[11px]
                font-semibold
                transition-all
                duration-300

                sm:flex-none
                sm:gap-[8px]
                sm:px-[16px]
                sm:py-[9px]
                sm:text-[12px]

                md:gap-[10px]
                md:px-[20px]
                md:py-[10px]
                md:text-[14px]

                ${
                  activeTab === "newArrival"
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-black hover:border-black"
                }
              `}
            >
              <span>New Arrivals</span>

              <span
                className={`
                  flex
                  h-[20px]
                  min-w-[20px]
                  items-center
                  justify-center
                  rounded-full
                  px-1
                  text-[9px]

                  sm:h-[22px]
                  sm:min-w-[22px]
                  sm:text-[10px]

                  md:h-[25px]
                  md:min-w-[25px]
                  md:text-[11px]

                  ${
                    activeTab === "newArrival"
                      ? "bg-[rgb(222,89,34)] text-white"
                      : "bg-[#eef0f4] text-gray-600"
                  }
                `}
              >
                32
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          LOADING
      ========================== */}

      {isLoading && (
        <div
          className="
            grid
            grid-cols-2
            gap-x-[10px]
            gap-y-[30px]

            sm:gap-x-[15px]
            sm:gap-y-[35px]

            md:grid-cols-3
            md:gap-x-[18px]
            md:gap-y-[40px]

            lg:grid-cols-4
            lg:gap-x-[20px]
            lg:gap-y-[45px]
          "
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item}>
              {/* Image Skeleton */}

              <div
                className="
                  aspect-[4/5]
                  w-full
                  animate-pulse
                  rounded-[14px]
                  bg-gray-200

                  sm:rounded-[16px]

                  md:rounded-[18px]

                  lg:rounded-[20px]
                "
              />

              {/* Name Skeleton */}

              <div
                className="
                  mt-[10px]
                  h-[14px]
                  w-[70%]
                  animate-pulse
                  rounded
                  bg-gray-200

                  sm:mt-[12px]
                  sm:h-[16px]
                "
              />

              {/* Price Skeleton */}

              <div
                className="
                  mt-[6px]
                  h-[13px]
                  w-[35%]
                  animate-pulse
                  rounded
                  bg-gray-200

                  sm:h-[14px]
                "
              />
            </div>
          ))}
        </div>
      )}

      {/* =========================
          ERROR
      ========================== */}

      {isError && (
        <div
          className="
            py-[60px]
            text-center

            sm:py-[70px]

            md:py-[80px]
          "
        >
          <p
            className="
              text-[13px]
              text-gray-500

              sm:text-[14px]
            "
          >
            Failed to load products.
          </p>
        </div>
      )}

      {/* =========================
          PRODUCT GRID
      ========================== */}

      {!isLoading && !isError && (
        <div
          className="
            grid
            grid-cols-2
            gap-x-[10px]
            gap-y-[35px]

            sm:gap-x-[15px]
            sm:gap-y-[40px]

            md:grid-cols-3
            md:gap-x-[18px]
            md:gap-y-[45px]

            lg:grid-cols-4
            lg:gap-x-[20px]
            lg:gap-y-[50px]
          "
        >
          {displayedProducts.map((product) => (
            <div
              key={product._id}
              className="
                group
                min-w-0
                cursor-pointer
              "
            >
              {/* =========================
                  PRODUCT IMAGE
              ========================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[14px]
                  bg-[#f4f4f4]

                  sm:rounded-[16px]

                  md:rounded-[18px]

                  lg:rounded-[20px]
                "
              >
                <img
                  src={product.category?.image || product.image}
                  alt={product.name}
                  loading="lazy"
                  className="
                    aspect-[4/5]
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* =========================
                    SALE BADGE
                ========================== */}

                {product.discount && (
                  <span
                    className="
                      absolute
                      left-[7px]
                      top-[7px]
                      rounded-full
                      bg-[rgb(222,89,34)]
                      px-[8px]
                      py-[4px]
                      text-[8px]
                      font-semibold
                      uppercase
                      text-white

                      sm:left-[9px]
                      sm:top-[9px]
                      sm:px-[10px]
                      sm:py-[5px]
                      sm:text-[9px]

                      md:left-[12px]
                      md:top-[12px]
                      md:px-[12px]
                      md:py-[6px]
                      md:text-[11px]
                    "
                  >
                    Sale!
                  </span>
                )}

                {/* =========================
                    WISHLIST
                ========================== */}

                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Add to wishlist"
                  className="
                    absolute
                    right-[7px]
                    top-[7px]
                    flex
                    h-[32px]
                    w-[32px]
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300

                    sm:right-[9px]
                    sm:top-[9px]
                    sm:h-[36px]
                    sm:w-[36px]

                    md:right-[12px]
                    md:top-[12px]
                    md:h-[40px]
                    md:w-[40px]
                    md:opacity-0
                    md:group-hover:opacity-100
                  "
                >
                  <CiHeart
                    className="
                      text-[18px]

                      sm:text-[20px]

                      md:text-[22px]
                    "
                  />
                </button>

                {/* =========================
                    ADD TO CART
                ========================== */}

                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    absolute
                    bottom-[7px]
                    left-[7px]
                    right-[7px]
                    flex
                    translate-y-0
                    items-center
                    justify-center
                    gap-1
                    rounded-full
                    bg-white
                    py-[9px]
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.7px]
                    text-black
                    shadow-sm
                    transition-all
                    duration-300

                    sm:bottom-[9px]
                    sm:left-[9px]
                    sm:right-[9px]
                    sm:gap-2
                    sm:py-[10px]
                    sm:text-[10px]

                    md:bottom-[12px]
                    md:left-[12px]
                    md:right-[12px]
                    md:translate-y-[15px]
                    md:py-[12px]
                    md:text-[11px]
                    md:tracking-[1px]
                    md:opacity-0
                    md:group-hover:translate-y-0
                    md:group-hover:opacity-100

                    lg:text-[12px]
                  "
                >
                  <MdOutlineShoppingBag
                    className="
                      text-[15px]

                      sm:text-[16px]

                      md:text-[18px]
                    "
                  />

                  <span>Add to cart</span>
                </button>
              </div>

              {/* =========================
                  PRODUCT DETAILS
              ========================== */}

              <div
                className="
                  mt-[10px]

                  sm:mt-[12px]

                  md:mt-[14px]

                  lg:mt-[16px]
                "
              >
                <h3
                  className="
                    truncate
                    font-zurixFont
                    text-[13px]
                    font-medium

                    sm:text-[14px]

                    md:text-[15px]

                    lg:text-[16px]
                  "
                >
                  {product.name}
                </h3>

                <div
                  className="
                    mt-[5px]
                    flex
                    items-center
                    gap-[5px]
                    text-[11px]

                    sm:mt-[6px]
                    sm:gap-[7px]
                    sm:text-[12px]

                    md:text-[13px]

                    lg:text-[14px]
                  "
                >
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">
                      ₹{product.oldPrice}
                    </span>
                  )}

                  <span
                    className="
                      text-[12px]
                      font-medium

                      sm:text-[13px]

                      md:text-[14px]

                      lg:text-[15px]
                    "
                  >
                    ₹{product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================
          VIEW ALL
      ========================== */}

      {!isLoading && !isError && products.length > 0 && (
        <div
          className="
            mt-[40px]
            flex
            justify-center

            sm:mt-[45px]

            md:mt-[50px]

            lg:mt-[55px]
          "
        >
          <Link to="/products">
            <button
              type="button"
              className="
              rounded-full
              border
              border-black
              px-[22px]
              py-[10px]
              text-[10px]
              font-semibold
              uppercase
              tracking-[1.2px]
              transition-all
              duration-300
              hover:bg-black
              hover:text-white

              sm:px-[25px]
              sm:py-[11px]
              sm:text-[11px]

              md:px-[28px]
              md:py-[12px]

              lg:px-[30px]
              lg:text-[12px]
              lg:tracking-[1.5px]
            "
            >
              View All Products
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default TrendingProducts;
