import React from "react";
import { useGetProductsQuery } from "../../redux/productApi";

const PaletteEdit = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  const products = data?.data || [];

  return (
    <section className="mx-auto w-[92%] py-[60px] sm:w-[90%] sm:py-[75px] md:w-[88%] md:py-[90px] lg:w-[85%] lg:py-[100px]">
      {/* =========================
          SECTION HEADER
      ========================== */}

      <div className="mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px]">
        <h1 className="font-zurixFont text-[12px] font-normal uppercase tracking-[2px] text-[rgb(222,89,34)] sm:text-[14px] sm:tracking-[2.5px] md:text-[15px] lg:text-[16px] lg:tracking-[3px]">
          SS26 — Palette Edit
        </h1>

        <div className="mt-[12px] flex flex-col items-start gap-[20px] sm:mt-[15px] md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[800px] font-zurixFont text-[30px] font-bold leading-[1.05] tracking-[-1px] sm:text-[36px] md:text-[42px] lg:text-[46px] lg:tracking-[-1.5px]">
            Colours that define a season
          </h2>

          <button className="shrink-0 border-b border-black pb-[4px] text-[11px] font-semibold uppercase tracking-[1px] transition-opacity duration-300 hover:opacity-50 sm:text-[12px] md:text-[13px]">
            Shop All
          </button>
        </div>
      </div>

      {/* =========================
          LOADING
      ========================== */}

      {isLoading && (
        <div className="grid grid-cols-2 gap-[12px] sm:gap-[16px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[20px]">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="animate-pulse">
              <div className="h-[230px] rounded-[16px] bg-gray-200 sm:h-[280px] md:h-[320px] lg:h-[350px] lg:rounded-[20px]" />

              <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />

              <div className="mt-2 h-4 w-1/4 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      )}

      {/* =========================
          ERROR
      ========================== */}

      {isError && (
        <div className="py-[40px] text-center sm:py-[50px]">
          <p className="text-[14px] text-gray-500">Failed to load products.</p>
        </div>
      )}

      {/* =========================
          PRODUCTS
      ========================== */}

      {!isLoading && !isError && (
        <div className="grid grid-cols-2 gap-x-[12px] gap-y-[30px] sm:gap-x-[16px] sm:gap-y-[35px] md:grid-cols-3 md:gap-x-[20px] md:gap-y-[40px] lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <div key={product._id} className="group min-w-0 cursor-pointer">
              {/* =========================
                  IMAGE
              ========================== */}

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[14px] bg-gray-100 sm:rounded-[16px] lg:rounded-[20px]">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Wishlist */}

                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="absolute right-[8px] top-[8px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white text-[18px] shadow-sm transition-all duration-300 sm:right-[10px] sm:top-[10px] sm:h-[36px] sm:w-[36px] md:right-[15px] md:top-[15px] md:h-[38px] md:w-[38px] md:opacity-0 md:group-hover:opacity-100"
                >
                  ♡
                </button>

                {/* Shop Now */}

                <button
                  type="button"
                  className="absolute bottom-[8px] left-[8px] right-[8px] rounded-full bg-white py-[9px] text-[9px] font-semibold uppercase tracking-[1px] shadow-sm sm:bottom-[10px] sm:left-[10px] sm:right-[10px] sm:py-[10px] sm:text-[10px] md:bottom-[15px] md:left-[15px] md:right-[15px] md:py-[12px] md:text-[12px] md:translate-y-[10px] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                >
                  Shop Now
                </button>
              </div>

              {/* =========================
                  PRODUCT INFO
              ========================== */}

              <div className="mt-[12px] sm:mt-[15px] md:mt-[18px]">
                <h3 className="line-clamp-2 font-zurixFont text-[13px] font-medium leading-[1.4] sm:text-[15px] md:text-[16px]">
                  {product.name}
                </h3>

                <p className="mt-[4px] text-[13px] font-medium sm:mt-[5px] sm:text-[14px] md:text-[15px]">
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
