import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ProductTab = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const rating = [
    {
      star: 5,
      count: 0,
    },
    {
      star: 4,
      count: 0,
    },
    {
      star: 3,
      count: 0,
    },
    {
      star: 2,
      count: 0,
    },
    {
      star: 1,
      count: 0,
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-8">
      {/* =========================
          TABS
      ========================== */}
      <div className="w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10 lg:gap-x-16">
        {/* Description */}
        <button
          type="button"
          onClick={() => setActiveTab("description")}
          className={`pb-2 text-base sm:text-lg lg:text-xl font-zurixFont transition-all duration-200 ${
            activeTab === "description"
              ? "border-b-2 border-orange-500"
              : "border-b-2 border-transparent"
          }`}
        >
          Description
        </button>

        {/* Additional Information */}
        <button
          type="button"
          onClick={() => setActiveTab("additional")}
          className={`pb-2 text-base sm:text-lg lg:text-xl font-zurixFont transition-all duration-200 ${
            activeTab === "additional"
              ? "border-b-2 border-orange-500"
              : "border-b-2 border-transparent"
          }`}
        >
          Additional Information
        </button>

        {/* Reviews */}
        <button
          type="button"
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 text-base sm:text-lg lg:text-xl font-zurixFont transition-all duration-200 ${
            activeTab === "reviews"
              ? "border-b-2 border-orange-500"
              : "border-b-2 border-transparent"
          }`}
        >
          Reviews (0)
        </button>
      </div>

      {/* ======================
                  CONTENT
          ====================== */}
      <div className="w-full p-4 sm:p-6">
        {/* ======================
                  DESCRIPTION
            ====================== */}
        {activeTab === "description" && (
          <div className="w-full">
            <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-700">
              {product?.description || "No description available."}
            </p>
          </div>
        )}

        {/* =======================
                REVIEW SECTION
            ======================= */}
        {activeTab === "additional" && (
          <div className="w-full max-w-3xl">
            {/* Category */}
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Category</span>

              <span className="text-gray-600">
                {product?.category?.name || "N/A"}
              </span>
            </div>

            {/* Sizes */}
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Sizes</span>

              <div className="flex flex-wrap gap-2">
                {product?.size?.length > 0 ? (
                  product.size.map((size, index) => (
                    <span
                      key={index}
                      className="rounded border border-gray-300 px-3 py-1 text-xs sm:text-sm text-gray-600"
                    >
                      {size}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </div>
            </div>

            {/* Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 py-3">
              <span className="font-medium text-gray-800">Colors</span>

              <div className="flex flex-wrap gap-2">
                {product?.colors?.length > 0 ? (
                  product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="rounded border border-gray-300 px-3 py-1 text-xs sm:text-sm text-gray-600"
                    >
                      {color}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="flex w-full gap-7 ">
            <div className="w-[25%] flex flex-col gap-5">
              <h1>Rating</h1>
              <div className="flex flex-col gap-7 border border-gray-200 rounded-md p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[50px]">0.0</span>
                  <span className="text-[16px]">0 Product Ratings</span>
                </div>
                <div>
                  {rating.map((rate, index) => {
                    return (
                      <div key={index} className="flex items-center gap-5">
                        <div className="flex items-center gap-1">
                          <div>{rate.star}</div>
                          <div className="text-yellow-600">
                            <FaStar />
                          </div>
                        </div>
                        <div className="w-[100%] rounded-md h-[7px] border bg-gray-300"></div>
                        <div>{rate.count}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="font-zurixFont text-md font-bold">
                    Review this product
                  </h1>
                  <p className="font-zurixFont text-sm ">
                    share your thought with other customers
                  </p>
                </div>
                <button className="border-2 border-black rounded-full py-3 px-2 bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out mt-5">
                  Write A Review
                </button>
              </div>
            </div>
            <div className="w-[80%] flex flex-col gap-4">
              <h1 className="text-lg">Reviews</h1>
              <div className="border border-gray-200 rounded-md h-[500px] p-5">
                <p className="text-gray-400">No Review for this product</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTab;
