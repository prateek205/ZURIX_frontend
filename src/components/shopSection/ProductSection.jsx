import React, { useState } from "react";
import { useGetProductsQuery } from "../../redux/productApi";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const ProductSection = ({ queryParams }) => {
  const { data, isLoading, isError } = useGetProductsQuery(queryParams);

  if (isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p className="text-sm text-gray-500 sm:text-base">
          Loading the Product...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p className="text-sm text-red-500 sm:text-base">
          Unable to fetch data...
        </p>
      </div>
    );
  }

  const products = data?.data || [];

  console.log("PRODUCTS:", products);

  return (
    <section
      className="
        grid
        grid-cols-2
        gap-[8px]
        p-[4px]
        sm:gap-[12px]
        sm:p-[6px]
        md:grid-cols-2
        md:gap-[14px]
        md:p-[8px]
        lg:grid-cols-3
        lg:gap-[16px]
        xl:grid-cols-4
        xl:gap-[18px]
      "
    >
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const firstImage = product?.images?.[0]?.url;
  const secondImage = product?.images?.[1]?.url || firstImage;

  return (
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

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
        {/* First Image */}
        <img
          src={firstImage}
          alt={product?.name || "Product"}
          className={`
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-opacity
            duration-500
            ease-in-out

            md:group-hover:opacity-0

            ${isHovered ? "opacity-0 md:opacity-0" : "opacity-100"}
          `}
        />

        {/* Second Image */}
        {secondImage && (
          <img
            src={secondImage}
            alt={product?.name || "Product"}
            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-opacity
              duration-500
              ease-in-out

              md:group-hover:opacity-100

              ${
                isHovered
                  ? "opacity-100 md:opacity-100"
                  : "opacity-0 md:opacity-0"
              }
            `}
          />
        )}

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
              transition-transform
              duration-200
              hover:scale-105

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
              transition-transform
              duration-200
              hover:scale-105

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

        <Link to={`/productdetail/${product._id}`}>
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
            transition-all
            duration-300
            hover:bg-[#de5922]

            sm:bottom-[10px]
            sm:w-[calc(100%-20px)]
            sm:py-[10px]
            sm:text-[11px]

            md:bottom-[12px]
            md:w-[90%]
            md:translate-y-[16px]
            md:opacity-0
            md:group-hover:translate-y-0
            md:group-hover:opacity-100

            lg:py-[11px]
            lg:text-[12px]
          "
          >
            Select Options
          </button>
        </Link>
      </div>

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
          {product.name}
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
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductSection;
