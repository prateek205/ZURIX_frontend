import React from "react";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";

const RelatedProducts = ({ product }) => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="font-zurixFont text-5xl">Related Products</h1>

      <div
        className="
          group
          w-full
          min-w-0
          rounded-[10px]
          bg-[rgb(91,91,91,0.1)]
          p-[5px]
          transition-all
          duration-300
          sm:rounded-[12px]
          sm:p-[7px]
          md:rounded-[14px]
          md:p-[8px]
        "
      >
        {/* ================= IMAGE SECTION ================= */}
        <div
          className="
            relative
            aspect-[3/4]
            w-full
            overflow-hidden
            rounded-[7px]
            bg-gray-100
            sm:rounded-[9px]
            md:rounded-[10px]
          "
        >
          {/* Product Image - ONLY ONE IMAGE */}
          <img
            src={product?.images?.[0]?.url}
            alt={product?.name || "Product"}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* ================= EYE + WISHLIST ================= */}
          <div
            className="
              absolute
              right-[7px]
              top-[7px]
              flex
              flex-col
              gap-[6px]

              sm:right-[10px]
              sm:top-[10px]
              sm:gap-[8px]

              md:right-[12px]
              md:top-[12px]
              md:gap-[10px]

              md:translate-y-[-8px]
              md:opacity-0
              md:transition-all
              md:duration-300
              md:group-hover:translate-y-0
              md:group-hover:opacity-100
            "
          >
            {/* Eye */}
            <button
              type="button"
              className="
                flex
                h-[30px]
                w-[30px]
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-sm
                transition-all
                duration-200
                hover:scale-110
                hover:bg-black
                hover:text-white

                sm:h-[34px]
                sm:w-[34px]

                md:h-[38px]
                md:w-[38px]
              "
            >
              <LuEye
                className="
                  h-[16px]
                  w-[16px]

                  sm:h-[18px]
                  sm:w-[18px]

                  md:h-[19px]
                  md:w-[19px]
                "
              />
            </button>

            {/* Wishlist */}
            <button
              type="button"
              className="
                flex
                h-[30px]
                w-[30px]
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-sm
                transition-all
                duration-200
                hover:scale-110
                hover:bg-black
                hover:text-white

                sm:h-[34px]
                sm:w-[34px]

                md:h-[38px]
                md:w-[38px]
              "
            >
              <CiHeart
                className="
                  h-[18px]
                  w-[18px]

                  sm:h-[20px]
                  sm:w-[20px]

                  md:h-[22px]
                  md:w-[22px]
                "
              />
            </button>
          </div>

          {/* ================= CTA BUTTON ================= */}
          <Link to={`/productdetail/${product?._id}`}>
            <button
              type="button"
              className="
                absolute
                bottom-[8px]
                left-1/2
                w-[calc(100%-16px)]
                -translate-x-1/2

                rounded-full
                bg-black
                py-[9px]
                text-[10px]
                font-medium
                text-white

                opacity-0
                translate-y-[16px]

                transition-all
                duration-300

                hover:bg-[#de5922]

                group-hover:translate-y-0
                group-hover:opacity-100

                sm:bottom-[10px]
                sm:w-[calc(100%-20px)]
                sm:py-[10px]
                sm:text-[11px]

                md:bottom-[12px]
                md:w-[90%]

                lg:py-[11px]
                lg:text-[12px]
              "
            >
              Select Options
            </button>
          </Link>
        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div
          className="
            flex
            min-w-0
            flex-col
            gap-[3px]
            px-[3px]
            pb-[7px]
            pt-[9px]

            sm:gap-[4px]
            sm:px-[4px]
            sm:pb-[9px]
            sm:pt-[11px]

            md:gap-[5px]
            md:px-[5px]
            md:pb-[10px]
            md:pt-[13px]
          "
        >
          <h1
            className="
              truncate
              font-zurixFont
              text-[13px]
              font-bold
              leading-tight

              sm:text-[15px]
              md:text-[17px]
              lg:text-[18px]
            "
          >
            {product?.name}
          </h1>

          <p
            className="
              text-[12px]
              leading-tight
              text-black/70

              sm:text-[13px]
              md:text-[15px]
              lg:text-[16px]
            "
          >
            ${product?.price}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
