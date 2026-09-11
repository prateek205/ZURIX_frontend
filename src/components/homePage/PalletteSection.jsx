import React from "react";
import { useGetProductsQuery } from "../../redux/productApi";

const PaletteEdit = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  const products = data?.data || [];

  return (
    <section className="mx-auto w-[85%] py-[100px]">
      {/* =========================
          SECTION HEADER
      ========================= */}
      <div className="mb-[50px]">
        <h1 className="font-zurixFont text-[16px] font-normal uppercase tracking-[3px] text-[rgb(222,89,34)]">
          SS26 — Palette Edit
        </h1>

        <div className="mt-[15px] flex items-end justify-between">
          <h2 className="font-zurixFont text-[46px] font-bold leading-none tracking-[-1.5px]">
            Colours that define a season
          </h2>

          <button className="border-b border-black pb-[5px] text-[13px] font-semibold uppercase tracking-[1px]">
            Shop All
          </button>
        </div>
      </div>

      {/* =========================
          LOADING
      ========================= */}
      {isLoading && (
        <div className="flex gap-[20px] overflow-hidden">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="min-w-[260px] animate-pulse">
              <div className="h-[350px] rounded-[20px] bg-gray-200" />

              <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />

              <div className="mt-2 h-4 w-1/4 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      )}

      {/* =========================
          ERROR
      ========================= */}
      {isError && (
        <div className="py-[50px] text-center">
          <p className="text-gray-500">Failed to load products.</p>
        </div>
      )}

      {/* =========================
          PRODUCTS
      ========================= */}
      {!isLoading && !isError && (
        <div className="flex gap-[20px] overflow-hidden">
          {products.slice(0, 6).map((product) => (
            <div
              key={product._id}
              className="group min-w-[260px] cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative h-[350px] overflow-hidden rounded-[20px] bg-gray-100">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Wishlist */}
                <button className="absolute right-[15px] top-[15px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-[18px] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  ♡
                </button>

                {/* Shop Now */}
                <button className="absolute bottom-[15px] left-[15px] right-[15px] translate-y-[10px] rounded-full bg-white py-[12px] text-[12px] font-semibold uppercase tracking-[1px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Shop Now
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-[18px]">
                <h3 className="font-zurixFont text-[16px] font-medium">
                  {product.name}
                </h3>

                <p className="mt-[5px] text-[15px] font-medium">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PaletteEdit;
