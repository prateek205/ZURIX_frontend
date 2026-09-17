import React, { useState } from "react";

const ProductTab = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="flex flex-col gap-5 items-center justify-center">
      <div className="flex justify-evenly gap-24">
        <button
          className="text-xl font-zurixFont"
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className="text-xl font-zurixFont"
          onClick={() => setActiveTab("Additional Information")}
        >
          Additional Information
        </button>
        <button
          className="text-xl font-zurixFont"
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className="border border-gray-300 w-full p-2">
        {activeTab === "description" && <p>{product?.description}</p>}
        {activeTab === "Additional Information" && (
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-[140px_1fr]">
              <span>Category</span>
              <span>{product?.category?.name || "N/A"}</span>
            </div>
            <div className="grid grid-cols-[140px_1fr]">
              <span>Sizes</span>
              <div className="flex flex-wrap gap-2">
                {product?.size?.length > 0 ? (
                  product.size.map((size, index) => (
                    <span
                      key={index}
                      className="rounded border border-gray-300 px-3 py-1 text-sm text-gray-600"
                    >
                      {size}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-[140px_1fr]">
              <span>Colors</span>
              <div className="flex flex-wrap gap-5">
                {product?.colors?.length > 0 ? (
                  product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="rounded border border-gray-300 px-3 py-1 text-sm text-gray-600"
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
        {activeTab === "reviews" && <p>{product?.description}</p>}
      </div>
    </section>
  );
};

export default ProductTab;
