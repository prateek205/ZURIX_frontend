import React from "react";
import { useGetProductsQuery } from "../redux/productApi";

const ProductsPage = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <p>Loading the Product...</p>;
  }

  if (isError) {
    return <p>Unable to fetch data...</p>;
  }

  const products = data?.data || [];

  console.log("PRODUCTS:", products);

  return (
    <section className="h-full">
      <div className="mt-14 pb-2">
        <img
          src="images/shop/hero_banner_shop.jpg"
          alt=""
          className="w-[87%] m-auto h-[400px] rounded-[20px] object-cover"
        />
      </div>

      {products.map((product) => (
        <div key={product._id}>
          <img src={product.category.image} alt="" />
        </div>
      ))}
    </section>
  );
};

export default ProductsPage;
