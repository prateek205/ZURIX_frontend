import React from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaMinus, FaMoneyCheck, FaPlus } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

const ProductInfo = ({ product }) => {
  return (
    <section>
      <div className="flex flex-col gap-5 p-6">
        <h1 className="text-3xl font-zurixFont font-bold">{product?.name}</h1>
        <p className="text-2xl font-zurixFont text-orange-600">
          $ {product?.price}
        </p>
        <p className="text-md">{product?.description}</p>
        <div className="flex flex-col gap-5 font-zurixFont">
          <h1 className="font-bold">Color</h1>
          <div className="flex gap-5">
            {product?.colors?.map((color, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  title={color}
                  className="w-7 h-7 rounded-full border border-gray-500 p-[2px]"
                >
                  <span
                    className="block w-full h-full rounded-full"
                    style={{ backgroundColor: color }}
                  ></span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5 font-zurixFont">
          <h1 className="font-bold">Sizes</h1>
          <div className="flex gap-5">
            {product?.size?.map((size, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  title={size}
                  className="border border-gray-500 p-[5px] rounded-full px-3 py-2"
                >
                  <p className="text-md">{size}</p>
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="flex gap-2 items-center border border-gray-400 rounded-full w-[20%] px-3 py-4">
            <button>
              <FaMinus />
            </button>
            <input
              type="text"
              className="w-[50%] text-center border-0 outline-none"
            />
            <button>
              <FaPlus />
            </button>
          </div>
          <button className="border-2 border-black rounded-full w-[100%] bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
        <div className="flex items-center justify-center gap-24 mt-5 font-zurixFont">
          <div className="flex flex-col gap-3 items-center">
            <MdOutlineRocketLaunch className="text-3xl" />
            <p>Free Shipping</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <BsArrowReturnLeft className="text-3xl" />
            <p>Easy return</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <FaMoneyCheck className="text-3xl" />
            <p>Safe Checkout</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
