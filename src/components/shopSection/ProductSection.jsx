import React, { useState } from "react";
import { useGetProductsQuery } from "../../redux/productApi";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";

const ProductSection = () => {
  const [isHovered, setIsHovered] = useState(false);
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
    <section className="p-2 grid grid-cols-3 gap-2">
      <div
        className="w-[100%] h-auto p-2 bg-[rgb(91,91,91,.1)] rounded-xl flex flex-col gap-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden w-[100%] h-96 rounded-md flex items-center justify-center">
          <img
            src="images/category/womens/women-1.jpg"
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out 
              ${isHovered ? "opacity-0" : "opacity-100"}`}
          />
          <img
            src="images/category/womens/women-2.jpg"
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out 
              ${isHovered ? "opacity-100" : "opacity-0"}`}
          />

          <button
            className={`absolute top-4 flex-col gap-5 right-4 flex items-center justify-center transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            <LuEye className="text-2xl w-7 h-7 rounded-full border border-black bg-white" />
            <CiHeart className="text-sm w-6 h-6 rounded-full bg-white" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">Basic blazer</h1>
          <p className="text-lg">$199.99</p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
