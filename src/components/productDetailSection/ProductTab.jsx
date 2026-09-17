import React, { useState } from "react";

const ProductTab = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

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

      {/* =========================
          CONTENT
      ========================== */}
      <div className="w-full border border-gray-300 p-4 sm:p-6">
        {/* =========================
            DESCRIPTION
        ========================== */}
        {activeTab === "description" && (
          <div className="w-full">
            <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-700">
              {product?.description || "No description available."}
            </p>
          </div>
        )}

        {/* =========================
            ADDITIONAL INFORMATION
        ========================== */}
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

        {/* =========================
            REVIEWS
        ========================== */}
        {activeTab === "reviews" && (
          <div className="w-full">
            <p className="text-sm sm:text-base text-gray-700">
              There are no reviews yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTab;
