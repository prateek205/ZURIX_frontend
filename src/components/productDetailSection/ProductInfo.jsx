import React, { useState } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaMinus, FaMoneyCheck, FaPlus } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { useGetProfileQuery } from "../../redux/authApi";
import { useAddToCartMutation } from "../../redux/cartApi";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const navigate = useNavigate();

  const {
    data: profileData,
    isLoading: profileLoading,
    isError,
  } = useGetProfileQuery();

  const [
    addToCart,
    { data: cartData, isLoading: cartLoading, isError: cartError },
  ] = useAddToCartMutation();

  const handleAddToCart = async () => {
    if (profileLoading) {
      return;
    }

    if (isError || !profileData?.success) {
      navigate("/login", {
        state: {
          addToCart: true,
          productId: product._id,
        },
      });
      return;
    }

    try {
      const cartData = {
        productId: product._id,
        quantity: 1,
      };

      const response = await addToCart(cartData).unwrap();

      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full">
      <div
        className="
          flex
          flex-col
          gap-[18px]
          p-[16px]

          sm:gap-[22px]
          sm:p-[20px]

          md:gap-[25px]
          md:p-[24px]

          lg:gap-[28px]
          lg:p-[28px]

          xl:p-[32px]
        "
      >
        {/* =================================================
            PRODUCT NAME
        ================================================== */}

        <h1
          className="
            font-zurixFont
            text-[24px]
            font-bold
            leading-[1.15]

            sm:text-[28px]

            md:text-[32px]

            lg:text-[36px]
          "
        >
          {product?.name}
        </h1>

        {/* =================================================
            PRICE
        ================================================== */}

        <p
          className="
            font-zurixFont
            text-[20px]
            font-medium
            text-orange-600

            sm:text-[22px]

            md:text-[24px]

            lg:text-[26px]
          "
        >
          $ {product?.price}
        </p>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <p
          className="
            text-[13px]
            leading-[1.65]
            text-black/70

            sm:text-[14px]
            sm:leading-[1.7]

            md:text-[15px]

            lg:text-[16px]
            lg:leading-[1.75]
          "
        >
          {product?.description}
        </p>

        {/* =================================================
            COLOR
        ================================================== */}

        <div
          className="
            flex
            flex-col
            gap-[10px]

            sm:gap-[12px]

            md:gap-[14px]
          "
        >
          <h2
            className="
              font-zurixFont
              text-[14px]
              font-bold

              sm:text-[15px]

              md:text-[16px]
            "
          >
            Color
          </h2>

          <div
            className="
              flex
              flex-wrap
              gap-[10px]

              sm:gap-[12px]

              md:gap-[14px]
            "
          >
            {product?.colors?.map((color, index) => (
              <button
                key={index}
                type="button"
                title={color}
                onClick={() => setSelectedColor(color)}
                className={`
                  flex
                  h-[34px]
                  w-[34px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  p-[3px]
                  transition-all
                  duration-200

                  sm:h-[36px]
                  sm:w-[36px]

                  md:h-[38px]
                  md:w-[38px]

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

        {/* =================================================
            SIZES
        ================================================== */}

        <div
          className="
            flex
            flex-col
            gap-[10px]

            sm:gap-[12px]

            md:gap-[14px]
          "
        >
          <h2
            className="
              font-zurixFont
              text-[14px]
              font-bold

              sm:text-[15px]

              md:text-[16px]
            "
          >
            Sizes
          </h2>

          <div
            className="
              flex
              flex-wrap
              gap-[7px]

              sm:gap-[8px]

              md:gap-[10px]
            "
          >
            {product?.size?.map((size, index) => (
              <button
                key={index}
                type="button"
                title={size}
                onClick={() => setSelectedSize(size)}
                className={`
                  min-h-[38px]
                  min-w-[42px]
                  rounded-full
                  border
                  px-[12px]
                  py-[7px]
                  text-[12px]
                  transition-all
                  duration-200

                  sm:min-h-[40px]
                  sm:min-w-[45px]
                  sm:text-[13px]

                  md:min-h-[42px]
                  md:min-w-[48px]
                  md:text-[14px]

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

        {/* =================================================
            QUANTITY + ADD TO CART
        ================================================== */}

        <div
          className="
            mt-[5px]
            flex
            w-full
            items-center
            gap-[8px]

            sm:gap-[10px]

            md:mt-[10px]
            md:gap-[12px]
          "
        >
          {/* Quantity */}
          <div
            className="
              flex
              h-[48px]
              w-[110px]
              shrink-0
              items-center
              justify-between
              rounded-full
              border
              border-gray-400
              px-[10px]

              sm:h-[50px]
              sm:w-[120px]
              sm:px-[12px]

              md:h-[52px]
              md:w-[130px]
            "
          >
            <button
              type="button"
              onClick={handleDecrease}
              className="
                flex
                h-[32px]
                w-[32px]
                items-center
                justify-center
                rounded-full
                transition-colors
                hover:bg-gray-100
              "
            >
              <FaMinus className="text-[10px] sm:text-[11px]" />
            </button>

            <span
              className="
                min-w-[20px]
                text-center
                text-[13px]
                font-medium

                sm:text-[14px]

                md:text-[15px]
              "
            >
              {quantity}
            </span>

            <button
              type="button"
              onClick={handleIncrease}
              className="
                flex
                h-[32px]
                w-[32px]
                items-center
                justify-center
                rounded-full
                transition-colors
                hover:bg-gray-100
              "
            >
              <FaPlus className="text-[10px] sm:text-[11px]" />
            </button>
          </div>

          {/* Add To Cart */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="
              h-[48px]
              min-w-0
              flex-1
              rounded-full
              border-2
              border-black
              bg-black
              px-[15px]
              text-[12px]
              font-medium
              text-white
              transition
              duration-300
              ease-in-out
              hover:bg-white
              hover:text-black

              sm:h-[50px]
              sm:text-[13px]

              md:h-[52px]
              md:text-[14px]

              lg:text-[15px]
            "
          >
            {profileLoading ? "Product Adding..." : "Add to Cart"}
          </button>
        </div>

        {/* =================================================
            FEATURES
        ================================================== */}

        <div
          className="
            mt-[5px]
            grid
            grid-cols-3
            gap-[8px]
            border-t
            border-black/10
            pt-[20px]

            sm:mt-[10px]
            sm:gap-[12px]
            sm:pt-[24px]

            md:mt-[15px]
            md:gap-[18px]
            md:pt-[28px]

            lg:gap-[25px]
          "
        >
          {/* Free Shipping */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-[7px]
              text-center
              font-zurixFont

              sm:gap-[9px]

              md:gap-[10px]
            "
          >
            <MdOutlineRocketLaunch
              className="
                text-[22px]

                sm:text-[26px]

                md:text-[30px]
              "
            />

            <p
              className="
                text-[8px]
                leading-tight

                sm:text-[9px]

                md:text-[11px]

                lg:text-[12px]
              "
            >
              Free Shipping
            </p>
          </div>

          {/* Easy Return */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-[7px]
              text-center
              font-zurixFont

              sm:gap-[9px]

              md:gap-[10px]
            "
          >
            <BsArrowReturnLeft
              className="
                text-[22px]

                sm:text-[26px]

                md:text-[30px]
              "
            />

            <p
              className="
                text-[8px]
                leading-tight

                sm:text-[9px]

                md:text-[11px]

                lg:text-[12px]
              "
            >
              Easy Return
            </p>
          </div>

          {/* Safe Checkout */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-[7px]
              text-center
              font-zurixFont

              sm:gap-[9px]

              md:gap-[10px]
            "
          >
            <FaMoneyCheck
              className="
                text-[22px]

                sm:text-[26px]

                md:text-[30px]
              "
            />

            <p
              className="
                text-[8px]
                leading-tight

                sm:text-[9px]

                md:text-[11px]

                lg:text-[12px]
              "
            >
              Safe Checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
