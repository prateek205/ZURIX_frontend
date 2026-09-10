import React from "react";
import { useGetProductsQuery } from "../redux/productApi";

const ProductsPage = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  const products = data?.data || [];

  console.log("PRODUCTS:", products);

  return <div>ProductsPage</div>;
};

export default ProductsPage;
