import React from "react";
import AllProducts from "../components/shopSection/FilterSection";
import FilterSection from "../components/shopSection/FilterSection";
import SortSection from "../components/shopSection/SortSection";
import ProductSection from "../components/shopSection/ProductSection";

const ProductsPage = () => {
  return (
    <section className="h-full">
      <div className="mt-14 pb-2">
        <img
          src="images/shop/hero_banner_shop.jpg"
          alt=""
          className="w-[87%] m-auto h-[400px] rounded-[20px] object-cover"
        />
      </div>

      <div className="w-[88%] m-auto p-5">
        <div className="flex w-[100%] gap-3">
          <div className="w-[20%] border border-black">
            <FilterSection />
          </div>
          <div className="w-[80%] flex flex-col gap-3">
            <div className="border border-black">
              <SortSection />
            </div>
            <div className="border border-black">
              <ProductSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
