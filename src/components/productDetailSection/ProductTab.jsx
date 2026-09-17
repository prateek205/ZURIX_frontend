import React, { useState } from "react";

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
    <section className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* =========================
          TABS
      ========================== */}
      <div className="w-full overflow-x-auto scrollbar-none">
        <div className="min-w-max flex items-center justify-center gap-6 sm:gap-10 lg:gap-16">
          {/* Description */}
          <button
            type="button"
            onClick={() => setActiveTab("description")}
            className={`whitespace-nowrap pb-2 text-sm sm:text-base lg:text-xl font-zurixFont transition-all duration-200 ${
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
            className={`whitespace-nowrap pb-2 text-sm sm:text-base lg:text-xl font-zurixFont transition-all duration-200 ${
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
            className={`whitespace-nowrap pb-2 text-sm sm:text-base lg:text-xl font-zurixFont transition-all duration-200 ${
              activeTab === "reviews"
                ? "border-b-2 border-orange-500"
                : "border-b-2 border-transparent"
            }`}
          >
            Reviews (0)
          </button>
        </div>
      </div>

      {/* ======================
          CONTENT
      ====================== */}
      <div className="w-full p-2 sm:p-4 md:p-6">
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

        {/* ======================
            ADDITIONAL INFORMATION
        ====================== */}
        {activeTab === "additional" && (
          <div className="w-full max-w-3xl">
            {/* Category */}
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 py-3 border-b border-gray-200">
              <span className="font-medium text-sm sm:text-base text-gray-800">
                Category
              </span>

              <span className="text-sm sm:text-base text-gray-600">
                {product?.category?.name || "N/A"}
              </span>
            </div>

            {/* Sizes */}
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 py-3 border-b border-gray-200">
              <span className="font-medium text-sm sm:text-base text-gray-800">
                Sizes
              </span>

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
                  <span className="text-sm text-gray-500">N/A</span>
                )}
              </div>
            </div>

            {/* Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 py-3">
              <span className="font-medium text-sm sm:text-base text-gray-800">
                Colors
              </span>

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
                  <span className="text-sm text-gray-500">N/A</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ======================
            REVIEWS
        ====================== */}
        {activeTab === "reviews" && (
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* ======================
                RATING SECTION
            ====================== */}
            <div className="w-full lg:w-[30%] flex flex-col gap-4 sm:gap-5">
              <h1 className="text-base sm:text-lg font-medium">Rating</h1>

              <div className="w-full border border-gray-200 rounded-md p-4 sm:p-5 flex flex-col gap-6">
                {/* Rating Summary */}
                <div className="flex flex-col xs:flex-row sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-4xl sm:text-5xl font-medium">0.0</span>

                  <span className="text-xs sm:text-sm text-gray-600">
                    0 Product Ratings
                  </span>
                </div>

                {/* Rating Bars */}
                <div className="flex flex-col gap-4">
                  {rating.map((rate, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex items-center gap-2 sm:gap-4"
                      >
                        {/* Star Number */}
                        <div className="flex items-center gap-1 shrink-0">
                          <span className="text-xs sm:text-sm">
                            {rate.star}
                          </span>

                          <FaStar className="text-yellow-600 text-xs sm:text-sm" />
                        </div>

                        {/* Progress Bar */}
                        <div className="flex-1 min-w-0 h-[6px] sm:h-[7px] rounded-md bg-gray-300 overflow-hidden">
                          <div
                            className="h-full bg-yellow-500 rounded-md"
                            style={{
                              width: "0%",
                            }}
                          ></div>
                        </div>

                        {/* Count */}
                        <span className="text-xs sm:text-sm shrink-0">
                          {rate.count}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Write Review Information */}
                <div className="flex flex-col gap-2">
                  <h1 className="font-zurixFont text-sm sm:text-base font-bold">
                    Review this product
                  </h1>

                  <p className="font-zurixFont text-xs sm:text-sm text-gray-600">
                    Share your thought with other customers
                  </p>
                </div>

                {/* Write Review Button */}
                <button
                  type="button"
                  className="w-full sm:w-fit border-2 border-black rounded-full py-2.5 sm:py-3 px-5 bg-black text-white text-sm hover:bg-white hover:text-black transition duration-300 ease-in-out"
                >
                  Write A Review
                </button>
              </div>
            </div>

            {/* ======================
                REVIEWS LIST
            ====================== */}
            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <h1 className="text-base sm:text-lg font-medium">Reviews</h1>

              <div className="w-full min-h-[300px] sm:min-h-[400px] lg:h-[500px] border border-gray-200 rounded-md p-4 sm:p-5">
                <p className="text-xs sm:text-sm text-gray-400">
                  No Review for this product
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTab;
