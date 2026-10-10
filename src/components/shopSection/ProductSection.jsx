import React, { useState } from "react";
import { useGetProductsQuery } from "../../redux/productApi";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCreateWishlistMutation } from "../../redux/wishlistApi";
import { toast } from "react-toastify";

const ProductSection = ({ queryParams, view }) => {
  const [addToWishlist, { isLoading: wishlistLoading }] =
    useCreateWishlistMutation();

  const handleAddWishlist = async (product) => {
    console.log("PRODUCT:", product);

    const wishlistData = {
      item: {
        productId: product._id,
        productName: product.name,
        category: product.category._id,
        quantity: 1,
      },
    };

    try {
      const response = await addToWishlist(wishlistData).unwrap();

      console.log("WISHLIST_DATA:", response);

      toast.success(response?.message || "Product added to wishlist!");

      return true;
    } catch (error) {
      console.log("WISHLIST_ERROR:", error);

      // Important: pass the error to handleWishlistClick
      throw error;
    }
  };

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
      className={`
    ${
      view === "grid"
        ? "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        : "flex flex-col"
    }
    gap-[8px]
    p-[4px]
    sm:gap-[12px]
    sm:p-[6px]
    md:gap-[14px]
    md:p-[8px]
    lg:gap-[16px]
    xl:gap-[18px]
  `}
    >
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          handleAddWishlist={handleAddWishlist}
          wishlistLoading={wishlistLoading}
          view={view}
        />
      ))}
    </section>
  );
};

const ProductCard = ({ product, handleAddWishlist, wishlistLoading, view }) => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  // Wishlist state for this particular product
  const [isWishlisted, setIsWishlisted] = useState(false);

  const firstImage = product?.images?.[0]?.url;
  const secondImage = product?.images?.[1]?.url || firstImage;

  const handleWishlistClick = async () => {
    // Already added
    if (isWishlisted) {
      return;
    }

    try {
      const success = await handleAddWishlist(product);

      if (success) {
        setIsWishlisted(true);
      }
    } catch (error) {
      console.log("WISHLIST CLICK ERROR:", error);

      // Navigate only when authentication failed
      if (
        error?.status === 401 ||
        (error?.status === 400 && error?.data?.message === "Login First")
      ) {
        toast.error("Please login to add products to your wishlist.");

        navigate("/login");
        return;
      }

      // Other wishlist errors should NOT redirect to login
      console.log("Wishlist API error:", error);

      toast.error(
        error?.data?.message ||
          error?.error ||
          "Unable to add product to wishlist.",
      );
    }
  };

  return (
    <div
      className={`
        group
        min-w-0
        overflow-hidden
        rounded-[10px]
        bg-[rgb(91,91,91,0.1)]
        p-[5px]
        transition-all
        duration-300

        sm:rounded-[12px]
        sm:p-[7px]

        md:rounded-[14px]
        md:p-[8px]

        ${view === "list" ? "flex w-full flex-row items-center" : "w-full"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* =================================================
          PRODUCT IMAGE
      ================================================== */}

      <div
        className={`
          relative
          overflow-hidden
          rounded-[7px]
          bg-gray-100

          sm:rounded-[9px]
          md:rounded-[10px]

          ${
            view === "list"
              ? `
                h-[160px]
                w-[140px]
                shrink-0

                sm:h-[190px]
                sm:w-[170px]

                md:h-[220px]
                md:w-[200px]

                lg:h-[240px]
                lg:w-[220px]
              `
              : `
                aspect-[3/4]
                w-full
              `
          }
        `}
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

        {/* =================================================
            ACTION BUTTONS
        ================================================== */}

        <div
          className={`
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
          `}
        >
          {/* Wishlist */}
          <button
            type="button"
            onClick={handleWishlistClick}
            disabled={wishlistLoading || isWishlisted}
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
            {isWishlisted ? (
              <FaHeart
                className="
                  h-[16px]
                  w-[16px]
                  text-red-500
                  transition-all
                  duration-200

                  sm:h-[18px]
                  sm:w-[18px]

                  md:h-[20px]
                  md:w-[20px]
                "
              />
            ) : (
              <CiHeart
                className="
                  h-[18px]
                  w-[18px]
                  text-black
                  transition-all
                  duration-200

                  sm:h-[20px]
                  sm:w-[20px]

                  md:h-[22px]
                  md:w-[22px]
                "
              />
            )}
          </button>
        </div>

        {/* =================================================
            SELECT OPTIONS
        ================================================== */}

        <Link to={`/productdetail/${product._id}`}>
          <button
            type="button"
            className={`
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
            `}
          >
            Select Options
          </button>
        </Link>
      </div>

      {/* =================================================
          PRODUCT INFORMATION
      ================================================== */}

      <div
        className={`
          flex
          min-w-0
          flex-col

          ${
            view === "list"
              ? `
                flex-1
                justify-center
                gap-[6px]
                px-[12px]
                py-[10px]

                sm:gap-[8px]
                sm:px-[18px]

                md:gap-[10px]
                md:px-[24px]
              `
              : `
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
              `
          }
        `}
      >
        {/* Product Name */}
        <h1
          className={`
            font-zurixFont
            font-bold
            leading-tight

            ${
              view === "list"
                ? `
                  text-[15px]

                  sm:text-[17px]
                  md:text-[19px]
                  lg:text-[21px]
                `
                : `
                  truncate
                  text-[13px]

                  sm:text-[15px]
                  md:text-[17px]
                  lg:text-[18px]
                `
            }
          `}
        >
          {product.name}
        </h1>

        <div className="flex items-center gap-2">
          {/* Price */}
          <p
            className={`
            leading-tight
            text-orange-600
            font-bold

            ${
              view === "list"
                ? `
                  text-[13px]

                  sm:text-[14px]
                  md:text-[16px]
                  lg:text-[18px]
                `
                : `
                  text-[12px]

                  sm:text-[13px]
                  md:text-[15px]
                  lg:text-[18px]
                `
            }
          `}
          >
            ₹{product.salePrice}
          </p>

          <p
            className={`
            leading-tight
            text-gray-500
            line-through

            ${
              view === "list"
                ? `
                  text-[13px]

                  sm:text-[13px]
                  md:text-[14px]
                  lg:text-[16px]
                `
                : `
                  text-[12px]

                  sm:text-[12px]
                  md:text-[13px]
                  lg:text-[15px]
                `
            }
          `}
          >
            ₹{product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
