import React from "react";
import { useGetProductsQuery } from "../../redux/productApi";
import { CiHeart } from "react-icons/ci";

const PaletteEdit = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  const products = data?.data || [];

  console.log("DATA:", products);

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

          md:mb-[45px]

          lg:mb-[50px]
        "
      >
        {/* Small Heading */}

        <h1
          className="
            font-zurixFont
            text-[11px]
            font-normal
            uppercase
            tracking-[2px]
            text-[rgb(222,89,34)]

            sm:text-[12px]
            sm:tracking-[2.5px]

            md:text-[14px]

            lg:text-[16px]
            lg:tracking-[3px]
          "
        >
          SS26 — Palette Edit
        </h1>

        {/* Heading + Shop All */}

        <div
          className="
            mt-[10px]
            flex
            flex-col
            items-start
            gap-[15px]

            sm:mt-[12px]
            sm:gap-[18px]

            md:mt-[15px]
            md:flex-row
            md:items-end
            md:justify-between

            lg:gap-[20px]
          "
        >
          {/* Main Heading */}

          <h2
            className="
              max-w-[340px]
              font-zurixFont
              text-[30px]
              font-bold
              leading-[1.05]
              tracking-[-1px]

              sm:max-w-[500px]
              sm:text-[36px]

              md:max-w-[650px]
              md:text-[42px]

              lg:max-w-[800px]
              lg:text-[46px]
              lg:tracking-[-1.5px]
            "
          >
            Colours that define a season
          </h2>

          {/* Shop All */}

          <button
            type="button"
            className="
              shrink-0
              border-b
              border-black
              pb-[3px]
              text-[10px]
              font-semibold
              uppercase
              tracking-[1px]
              transition-opacity
              duration-300
              hover:opacity-50

              sm:text-[11px]

              md:text-[12px]

              lg:text-[13px]
            "
          >
            Shop All
          </button>
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
            <div key={item} className="animate-pulse">
              {/* Image Skeleton */}

              <div
                className="
                  aspect-[3/4]
                  w-full
                  rounded-[14px]
                  bg-gray-200

                  sm:rounded-[16px]

                  lg:rounded-[20px]
                "
              />

              {/* Name Skeleton */}

              <div
                className="
                  mt-[10px]
                  h-[14px]
                  w-[75%]
                  rounded
                  bg-gray-200

                  sm:mt-[14px]
                  sm:h-[16px]
                "
              />

              {/* Price Skeleton */}

              <div
                className="
                  mt-[6px]
                  h-[13px]
                  w-[30%]
                  rounded
                  bg-gray-200
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
            py-[50px]
            text-center

            sm:py-[60px]

            md:py-[70px]
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
          PRODUCTS
      ========================== */}

      {!isLoading && !isError && (
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
          {products.slice(0, 8).map((product) => (
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
                  aspect-[3/4]
                  w-full
                  overflow-hidden
                  rounded-[14px]
                  bg-gray-100

                  sm:rounded-[16px]

                  md:rounded-[18px]

                  lg:rounded-[20px]
                "
              >
                <img
                  src={product.images?.[0] || product.category?.image}
                  alt={product.name}
                  loading="lazy"
                  className="
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
                    WISHLIST
                ========================== */}

                <button
                  type="button"
                  aria-label="Add to wishlist"
                  onClick={(e) => e.stopPropagation()}
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
                    sm:h-[35px]
                    sm:w-[35px]

                    md:right-[12px]
                    md:top-[12px]
                    md:h-[38px]
                    md:w-[38px]
                    md:opacity-0
                    md:group-hover:opacity-100

                    lg:right-[15px]
                    lg:top-[15px]
                    lg:h-[40px]
                    lg:w-[40px]
                  "
                >
                  <CiHeart
                    className="
                      text-[19px]

                      sm:text-[20px]

                      md:text-[21px]

                      lg:text-[22px]
                    "
                  />
                </button>

                {/* =========================
                    SHOP NOW
                ========================== */}

                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    absolute
                    bottom-[7px]
                    left-[7px]
                    right-[7px]
                    rounded-full
                    bg-white
                    py-[9px]
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[1px]
                    text-black
                    shadow-sm
                    transition-all
                    duration-300

                    sm:bottom-[9px]
                    sm:left-[9px]
                    sm:right-[9px]
                    sm:py-[10px]
                    sm:text-[10px]

                    md:bottom-[12px]
                    md:left-[12px]
                    md:right-[12px]
                    md:translate-y-[10px]
                    md:py-[12px]
                    md:text-[11px]
                    md:opacity-0
                    md:group-hover:translate-y-0
                    md:group-hover:opacity-100

                    lg:bottom-[15px]
                    lg:left-[15px]
                    lg:right-[15px]
                    lg:text-[12px]
                  "
                >
                  Shop Now
                </button>
              </div>

              {/* =========================
                  PRODUCT DETAILS
              ========================== */}

              <div
                className="
                  mt-[10px]

                  sm:mt-[13px]

                  md:mt-[15px]

                  lg:mt-[18px]
                "
              >
                <h3
                  className="
                    line-clamp-2
                    font-zurixFont
                    text-[12px]
                    font-medium
                    leading-[1.4]

                    sm:text-[14px]

                    md:text-[15px]

                    lg:text-[16px]
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    mt-[4px]
                    text-[12px]
                    font-medium

                    sm:mt-[5px]
                    sm:text-[13px]

                    md:text-[14px]

                    lg:text-[15px]
                  "
                >
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PaletteEdit;
