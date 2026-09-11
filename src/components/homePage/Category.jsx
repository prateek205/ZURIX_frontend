import React, { useState } from "react";
import { useGetAllCategoryQuery } from "../../redux/categoryApi";

const Category = () => {
  const { data, isLoading, isError } = useGetAllCategoryQuery();

  const [activeTab, setActiveTab] = useState("women");

  const categories = data?.data || [];

  console.log("CATEGORY_DATA:", data);

  return (
    <section className="mx-auto w-[85%] pt-[100px] pb-[100px]">
      <div>
        <h1 className="font-zurixFont text-[16px] font-normal uppercase tracking-[3px] text-[rgb(222,89,34)]">
          browse
        </h1>
      </div>

      <div className="mt-[20px] flex items-center justify-between">
        <h2 className="font-zurixFont text-[46px] font-bold leading-none capitalize tracking-[-1.5px]">
          Explore Categories
        </h2>

        <div className="flex items-center gap-[10px]">
          <button
            onClick={() => setActiveTab("women")}
            className={`flex items-center gap-[10px] rounded-full border px-[20px] py-[10px] text-[16px] font-semibold transition-all duration-300 ${
              activeTab === "women"
                ? "border-black bg-black text-white"
                : "border-[#e5e5e5] bg-white text-black"
            }`}
          >
            <span>Women</span>

            <span
              className={`flex h-[25px] w-[25px] items-center justify-center rounded-full text-[12px] ${
                activeTab === "women"
                  ? "bg-[rgb(222,89,34)] text-white"
                  : "bg-[#eef0f4] text-gray-600"
              }`}
            >
              24
            </span>
          </button>

          <button
            onClick={() => setActiveTab("men")}
            className={`flex items-center gap-[10px] rounded-full border px-[20px] py-[10px] text-[16px] font-semibold transition-all duration-300 ${
              activeTab === "men"
                ? "border-black bg-black text-white"
                : "border-[#e5e5e5] bg-white text-black"
            }`}
          >
            <span>Men</span>

            <span
              className={`flex h-[25px] w-[25px] items-center justify-center rounded-full text-[12px] ${
                activeTab === "men"
                  ? "bg-[rgb(222,89,34)] text-white"
                  : "bg-[#eef0f4] text-gray-600"
              }`}
            >
              32
            </span>
          </button>
        </div>
      </div>

      <div className="mt-[75px]">
        {isLoading && (
          <div className="flex gap-[20px] overflow-hidden">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="h-[248px] min-w-[186px] animate-pulse rounded-[20px] bg-gray-200"
              />
            ))}
          </div>
        )}

        {isError && (
          <div className="flex h-[248px] items-center justify-center">
            <p className="text-gray-500">Failed to load categories.</p>
          </div>
        )}

        {!isLoading && !isError && (
          <div className="flex gap-[20px] overflow-hidden">
            {categories.slice(0, 8).map((category) => (
              <div
                key={category._id}
                className="group min-w-[186px] cursor-pointer"
              >
                <div className="relative h-[248px] w-[186px] overflow-hidden rounded-[20px]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute bottom-[10px] right-[10px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[12px] font-semibold text-black shadow-sm">
                    {category.count || 12}
                  </div>
                </div>

                <h3 className="mt-[18px] text-center font-zurixFont text-[18px] font-medium capitalize">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Category;
