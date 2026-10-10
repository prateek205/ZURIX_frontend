import React, { useState } from "react";

import { BsArrowReturnLeft } from "react-icons/bs";
import { FaMinus, FaMoneyCheck, FaPlus } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

import { useGetProfileQuery } from "../../redux/authApi";
import { useAddToCartMutation } from "../../redux/cartApi";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const navigate = useNavigate();

  // PROFILE API
  const {
    data: profileData,
    isLoading: profileLoading,
    isError,
  } = useGetProfileQuery();

  // ADD TO CART API
  const [addToCart, { isLoading: cartLoading }] = useAddToCartMutation();

  // QUANTITY DECREASE
  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // QUANTITY INCREASE
  const handleIncrease = () => {
    const stock = Number(product?.stock) || 0;

    if (quantity >= stock) {
      toast.info("You cannot add more than the available stock.");
      return;
    }

    setQuantity((prev) => prev + 1);
  };

  // ADD TO CART
  const handleAddToCart = async () => {
    if (profileLoading) return;

    if (isError || !profileData?.success) {
      toast.error("Please login to add products to your cart.");

      navigate("/login", {
        state: {
          addToCart: true,
          productId: product?._id,
          quantity,
        },
      });

      return;
    }

    if (!product?._id) {
      toast.error("Product information is unavailable.");
      return;
    }

    if (!selectedColor && product?.colors?.length > 0) {
      toast.error("Please select a color.");
      return;
    }

    if (!selectedSize && product?.size?.length > 0) {
      toast.error("Please select a size.");
      return;
    }

    const stock = Number(product?.stock) || 0;

    if (stock <= 0) {
      toast.error("This product is out of stock.");
      return;
    }

    if (quantity > stock) {
      toast.error("Selected quantity exceeds available stock.");
      return;
    }

    try {
      const cartPayload = {
        productId: product._id,
        quantity,
        ...(selectedColor && { color: selectedColor }),
        ...(selectedSize && { size: selectedSize }),
      };

      const response = await addToCart(cartPayload).unwrap();

      toast.success(response?.message || "Product added to cart!");

      navigate("/cart");
    } catch (error) {
      console.error("ADD_TO_CART_ERROR:", error);

      const message =
        error?.data?.message ||
        error?.error ||
        "Unable to add product to cart.";

      if (
        message.toLowerCase().includes("already exists") ||
        message.toLowerCase().includes("already in cart")
      ) {
        toast.info("This product is already in your cart.");
        navigate("/cart");
        return;
      }

      toast.error(message);
    }
  };

  return (
    <section className="w-full">
      <div
        className="
          flex flex-col gap-[18px] p-[16px]
          sm:gap-[22px] sm:p-[20px]
          md:gap-[25px] md:p-[24px]
          lg:gap-[28px] lg:p-[28px]
          xl:p-[32px]
        "
      >
        {/* PRODUCT NAME */}
        <h1
          className="
            font-zurixFont text-[24px] font-bold leading-[1.15]
            sm:text-[28px] md:text-[32px] lg:text-[36px]
          "
        >
          {product?.name}
        </h1>

        {/* PRICE */}
        <div className="flex items-center gap-4">
          <p
            className="
            font-zurixFont text-[20px] font-medium text-orange-600
            sm:text-[22px] md:text-[24px] lg:text-[26px]
          "
          >
            ₹{product?.salePrice}
          </p>

          {/* PRICE */}
          <p
            className="
            font-zurixFont text-[20px] font-medium text-gray-400 line-through
            sm:text-[15px] md:text-[18px] lg:text-[20px]
          "
          >
            ₹{product?.price}
          </p>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            text-[13px] leading-[1.65] text-black/70
            sm:text-[14px] sm:leading-[1.7]
            md:text-[15px] lg:text-[16px] lg:leading-[1.75]
          "
        >
          {product?.description}
        </p>

        {/* COLOR */}
        {product?.colors?.length > 0 && (
          <div className="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px]">
            <h2 className="font-zurixFont text-[14px] font-bold sm:text-[15px] md:text-[16px]">
              Color
            </h2>

            <div className="flex flex-wrap gap-[10px] sm:gap-[12px] md:gap-[14px]">
              {product.colors.map((color, index) => (
                <button
                  key={`${color}-${index}`}
                  type="button"
                  title={color}
                  aria-label={`Select color ${color}`}
                  aria-pressed={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                  className={`
                    flex h-[34px] w-[34px] items-center justify-center
                    rounded-full border p-[3px] transition-all duration-200
                    sm:h-[36px] sm:w-[36px] md:h-[38px] md:w-[38px]
                    ${
                      selectedColor === color
                        ? "border-black border-[2px]"
                        : "border-gray-400 hover:border-black"
                    }
                  `}
                >
                  <span
                    className="block h-full w-full rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* SIZES */}
        {product?.size?.length > 0 && (
          <div className="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px]">
            <h2 className="font-zurixFont text-[14px] font-bold sm:text-[15px] md:text-[16px]">
              Sizes
            </h2>

            <div className="flex flex-wrap gap-[7px] sm:gap-[8px] md:gap-[10px]">
              {product.size.map((size, index) => (
                <button
                  key={`${size}-${index}`}
                  type="button"
                  title={size}
                  aria-pressed={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    min-h-[38px] min-w-[42px] rounded-full border
                    px-[12px] py-[7px] text-[12px]
                    transition-all duration-200
                    sm:min-h-[40px] sm:min-w-[45px] sm:text-[13px]
                    md:min-h-[42px] md:min-w-[48px] md:text-[14px]
                    ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-400 bg-white text-black hover:border-black"
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STOCK STATUS */}
        <p className="text-sm text-gray-500">
          {Number(product?.stock) > 0
            ? `${product.stock} items available`
            : "Out of stock"}
        </p>

        {/* QUANTITY + ADD TO CART */}
        <div
          className="
            mt-[5px] flex w-full items-center gap-[8px]
            sm:gap-[10px] md:mt-[10px] md:gap-[12px]
          "
        >
          {/* QUANTITY SELECTOR */}
          <div
            className="
              flex h-[48px] w-[110px] shrink-0 items-center
              justify-between rounded-full border border-gray-400 px-[10px]
              sm:h-[50px] sm:w-[120px] sm:px-[12px]
              md:h-[52px] md:w-[130px]
            "
          >
            <button
              type="button"
              onClick={handleDecrease}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className="
                flex h-[32px] w-[32px] items-center justify-center
                rounded-full transition-colors hover:bg-gray-100
                disabled:cursor-not-allowed disabled:opacity-40
              "
            >
              <FaMinus className="text-[10px] sm:text-[11px]" />
            </button>

            <span className="min-w-[20px] text-center text-[13px] font-medium sm:text-[14px] md:text-[15px]">
              {quantity}
            </span>

            <button
              type="button"
              onClick={handleIncrease}
              disabled={quantity >= (Number(product?.stock) || 0)}
              aria-label="Increase quantity"
              className="
                flex h-[32px] w-[32px] items-center justify-center
                rounded-full transition-colors hover:bg-gray-100
                disabled:cursor-not-allowed disabled:opacity-40
              "
            >
              <FaPlus className="text-[10px] sm:text-[11px]" />
            </button>
          </div>

          {/* ADD TO CART */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={
              profileLoading || cartLoading || Number(product?.stock) <= 0
            }
            className="
              h-[48px] min-w-0 flex-1 rounded-full border-2
              border-black bg-black px-[15px] text-[12px]
              font-medium text-white transition duration-300
              ease-in-out hover:bg-white hover:text-black
              disabled:cursor-not-allowed disabled:opacity-50
              sm:h-[50px] sm:text-[13px]
              md:h-[52px] md:text-[14px]
              lg:text-[15px]
            "
          >
            {cartLoading
              ? "Adding to Cart..."
              : Number(product?.stock) <= 0
                ? "Out of Stock"
                : "Add to Cart"}
          </button>
        </div>

        {/* FEATURES */}
        <div
          className="
            mt-[5px] grid grid-cols-3 gap-[8px]
            border-t border-black/10 pt-[20px]
            sm:mt-[10px] sm:gap-[12px] sm:pt-[24px]
            md:mt-[15px] md:gap-[18px] md:pt-[28px]
            lg:gap-[25px]
          "
        >
          {/* FREE SHIPPING */}
          <div className="flex flex-col items-center gap-[7px] text-center font-zurixFont sm:gap-[9px] md:gap-[10px]">
            <MdOutlineRocketLaunch className="text-[22px] sm:text-[26px] md:text-[30px]" />
            <p className="text-[8px] leading-tight sm:text-[9px] md:text-[11px] lg:text-[12px]">
              Free Shipping
            </p>
          </div>

          {/* EASY RETURN */}
          <div className="flex flex-col items-center gap-[7px] text-center font-zurixFont sm:gap-[9px] md:gap-[10px]">
            <BsArrowReturnLeft className="text-[22px] sm:text-[26px] md:text-[30px]" />
            <p className="text-[8px] leading-tight sm:text-[9px] md:text-[11px] lg:text-[12px]">
              Easy Return
            </p>
          </div>

          {/* SAFE CHECKOUT */}
          <div className="flex flex-col items-center gap-[7px] text-center font-zurixFont sm:gap-[9px] md:gap-[10px]">
            <FaMoneyCheck className="text-[22px] sm:text-[26px] md:text-[30px]" />
            <p className="text-[8px] leading-tight sm:text-[9px] md:text-[11px] lg:text-[12px]">
              Safe Checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
