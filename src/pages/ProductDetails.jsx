import React from "react";
import ImageSection from "../components/productDetailSection/ImageSection";
import ProductInfo from "../components/productDetailSection/ProductInfo";
import { useGetProductByIdQuery } from "../redux/productApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (isError) {
    return <p>...unable to fetch data</p>;
  }

  const product = data?.data || [];

  console.log("PRODUCT_DATA:", product);

  return (
    <section className="flex items-center w-[95%] m-auto py-[28px] mt-10">
      <div className="w-[100%] p-5 flex gap-5">
        <div className="w-[50%] p-2">
          <ImageSection product={product} />
        </div>
        <div className="w-[50%] border border-black p-2">
          <ProductInfo product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
