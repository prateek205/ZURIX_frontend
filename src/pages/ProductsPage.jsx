import React, { useState } from "react";
import FilterSection from "../components/shopSection/FilterSection";
import SortSection from "../components/shopSection/SortSection";
import ProductSection from "../components/shopSection/ProductSection";

const ProductsPage = () => {
  const [queryParams, setQueryParams] = useState({
    sort: "",
    search: "",
    filter: "",
    minPrice: "",
    maxPrice: "",
    colors: [],
    size: "",
    category: "",
  });

  return (
    <section className="h-full">
      {/* ================= HERO ================= */}
      <div className="mt-14 pb-2">
        <img
          src="images/shop/hero_banner_shop.jpg"
          alt=""
          className="w-[87%] m-auto h-[400px] rounded-[20px] object-cover"
        />
      </div>

      {/* ================= SHOP SECTION ================= */}
      <div className="w-[88%] m-auto p-5">
        <div className="flex w-full gap-3">
          {/* ================= FILTER ================= */}
          <div className="w-[25%] py-1 px-2">
            <div className="sticky top-[20px]">
              <FilterSection
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="w-[75%] flex flex-col gap-3">
            {/* Sort */}
            <div>
              <SortSection
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            </div>

            {/* Products */}
            <div>
              <ProductSection queryParams={queryParams} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
