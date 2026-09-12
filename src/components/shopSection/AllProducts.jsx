import React from "react";
import { useGetProductsQuery } from "../../redux/productApi";

const AllProducts = () => {
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
    <section>
      {products.map((product) => (
        <div key={product._id}>
          <img src={product.category.image} alt="" />
        </div>
      ))}
    </section>
  );
};

export default AllProducts;
