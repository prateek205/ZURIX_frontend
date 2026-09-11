import React, { useState } from "react";
import { useGetProductsQuery } from "../../redux/productApi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState("bestSeller");

  const { data, isLoading, isError } = useGetProductsQuery();

  const products = data?.data || [];

  /*
    For now both tabs use the same API data.

    Later, when your backend has:
    - bestSeller
    - newArrival
    - createdAt
    - salesCount

    we can make these tabs truly dynamic.
  */

  const displayedProducts = products.slice(0, 8);

  return (
    <section className="mx-auto w-[85%] py-[100px]">
      {/* =================================
          SECTION HEADER
      ================================= */}
      <div className="mb-[45px]">
        <p className="font-zurixFont text-[16px] uppercase tracking-[3px] text-[rgb(222,89,34)]">
          Hot This Week
        </p>

        <div className="mt-[15px] flex items-end justify-between">
          <h2 className="font-zurixFont text-[46px] font-bold leading-none tracking-[-1.5px]">
            Trending right now
          </h2>

          {/* =================================
              TABS
          ================================= */}
          <div className="flex gap-[10px]">
            {/* Best Sellers */}
            <button
              onClick={() => setActiveTab("bestSeller")}
              className={`flex items-center gap-[10px] rounded-full border px-[20px] py-[10px] text-[14px] font-semibold transition-all duration-300 ${
                activeTab === "bestSeller"
                  ? "border-black bg-black text-white"
                  : "border-gray-200 bg-white text-black"
              }`}
            >
              <span>Best Sellers</span>

              <span
                className={`flex h-[25px] min-w-[25px] items-center justify-center rounded-full px-1 text-[11px] ${
                  activeTab === "bestSeller"
                    ? "bg-[rgb(222,89,34)] text-white"
                    : "bg-[#eef0f4] text-gray-600"
                }`}
              >
                24
              </span>
            </button>

            {/* New Arrivals */}
            <button
              onClick={() => setActiveTab("newArrival")}
              className={`flex items-center gap-[10px] rounded-full border px-[20px] py-[10px] text-[14px] font-semibold transition-all duration-300 ${
                activeTab === "newArrival"
                  ? "border-black bg-black text-white"
                  : "border-gray-200 bg-white text-black"
              }`}
            >
              <span>New Arrivals</span>

              <span
                className={`flex h-[25px] min-w-[25px] items-center justify-center rounded-full px-1 text-[11px] ${
                  activeTab === "newArrival"
                    ? "bg-[rgb(222,89,34)] text-white"
                    : "bg-[#eef0f4] text-gray-600"
                }`}
              >
                32
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =================================
          LOADING
      ================================= */}
      {isLoading && (
        <div className="grid grid-cols-2 gap-[20px] md:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item}>
              <div className="h-[390px] animate-pulse rounded-[20px] bg-gray-200" />

              <div className="mt-[15px] h-[18px] w-[70%] animate-pulse rounded bg-gray-200" />

              <div className="mt-[8px] h-[16px] w-[30%] animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      )}

      {/* =================================
          ERROR
      ================================= */}
      {isError && (
        <div className="py-[80px] text-center">
          <p className="text-gray-500">Failed to load products.</p>
        </div>
      )}

      {/* =================================
          PRODUCT GRID
      ================================= */}
      {!isLoading && !isError && (
        <div className="grid grid-cols-2 gap-x-[20px] gap-y-[45px] md:grid-cols-3 lg:grid-cols-4">
          {displayedProducts.map((product) => (
            <div key={product._id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-[20px] bg-[#f4f4f4]">
                <img
                  src={product.images?.[0] || product.image}
                  alt={product.name}
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Sale Badge */}
                {product.discount && (
                  <span className="absolute left-[12px] top-[12px] rounded-full bg-[rgb(222,89,34)] px-[12px] py-[6px] text-[11px] font-semibold uppercase text-white">
                    Sale!
                  </span>
                )}

                {/* Wishlist */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-[12px] top-[12px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100"
                >
                  <CiHeart className="text-[22px]" />
                </button>

                {/* Add To Cart */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-[12px] left-[12px] right-[12px] flex translate-y-[15px] items-center justify-center gap-2 rounded-full bg-white py-[12px] text-[12px] font-semibold uppercase tracking-[1px] opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <MdOutlineShoppingBag className="text-[18px]" />
                  Add to cart
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-[16px]">
                <h3 className="font-zurixFont text-[16px] font-medium">
                  {product.name}
                </h3>

                <div className="mt-[6px] flex items-center gap-[8px]">
                  {product.oldPrice && (
                    <span className="text-[14px] text-gray-400 line-through">
                      ₹{product.oldPrice}
                    </span>
                  )}

                  <span className="text-[15px] font-medium">
                    ₹{product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =================================
          VIEW ALL
      ================================= */}
      {!isLoading && !isError && products.length > 0 && (
        <div className="mt-[55px] flex justify-center">
          <button className="rounded-full border border-black px-[30px] py-[12px] text-[12px] font-semibold uppercase tracking-[1.5px] transition-all duration-300 hover:bg-black hover:text-white">
            View All Products
          </button>
        </div>
      )}
    </section>
  );
};

export default TrendingProducts;
