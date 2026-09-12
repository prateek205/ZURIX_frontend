import React from "react";
import AllProducts from "../components/shopSection/allProducts";

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

      <div>
        <AllProducts />
      </div>
    </section>
  );
};

export default ProductsPage;
