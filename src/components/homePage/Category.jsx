import React, { useState } from "react";
import { useGetAllCategoryQuery } from "../../redux/categoryApi";

const Category = () => {
  const { data, isLoading, isError } = useGetAllCategoryQuery();

  // Use the same values as backend
  const [activeTab, setActiveTab] = useState("womens");

  const categories = data?.data || [];

  // Filter categories based on selected gender
  const filteredCategories = categories.filter(
    (category) => category.gender?.toLowerCase() === activeTab,
  );

  // Count categories
  const mensCount = categories.filter(
    (category) => category.gender?.toLowerCase() === "mens",
  ).length;

  const womensCount = categories.filter(
    (category) => category.gender?.toLowerCase() === "womens",
  ).length;

  return (
    <section className="mx-auto w-[92%] py-[60px] sm:w-[90%] sm:py-[75px] md:w-[88%] md:py-[90px] lg:w-[85%] lg:py-[100px]">
      {/* TOP LABEL */}
      <div>
        <h1 className="font-zurixFont text-[12px] font-normal uppercase tracking-[2.5px] text-[rgb(222,89,34)] sm:text-[14px] sm:tracking-[3px] md:text-[16px]">
          browse
        </h1>
      </div>

      {/* HEADING + TABS */}
      <div className="mt-[15px] flex flex-col gap-[25px] md:mt-[20px] md:flex-row md:items-center md:justify-between md:gap-5">
        {/* Heading */}
        <h2 className="font-zurixFont text-[32px] font-bold leading-[1] capitalize tracking-[-1px] sm:text-[38px] md:text-[42px] lg:text-[46px] lg:tracking-[-1.5px]">
          Explore Categories
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-[8px] sm:gap-[10px]">
          {/* WOMEN */}
          <button
            onClick={() => setActiveTab("womens")}
            className={`flex items-center gap-[8px] rounded-full border px-[14px] py-[8px] text-[13px] font-semibold transition-all duration-300 sm:gap-[10px] sm:px-[18px] sm:py-[9px] sm:text-[14px] md:px-[20px] md:py-[10px] md:text-[16px] ${
              activeTab === "womens"
                ? "border-black bg-black text-white"
                : "border-[#e5e5e5] bg-white text-black"
            }`}
          >
            <span>Women</span>

            <span
              className={`flex h-[22px] w-[22px] items-center justify-center rounded-full text-[10px] sm:h-[24px] sm:w-[24px] sm:text-[11px] md:h-[25px] md:w-[25px] md:text-[12px] ${
                activeTab === "womens"
                  ? "bg-[rgb(222,89,34)] text-white"
                  : "bg-[#eef0f4] text-gray-600"
              }`}
            >
              {womensCount}
            </span>
          </button>

          {/* MEN */}
          <button
            onClick={() => setActiveTab("mens")}
            className={`flex items-center gap-[8px] rounded-full border px-[14px] py-[8px] text-[13px] font-semibold transition-all duration-300 sm:gap-[10px] sm:px-[18px] sm:py-[9px] sm:text-[14px] md:px-[20px] md:py-[10px] md:text-[16px] ${
              activeTab === "mens"
                ? "border-black bg-black text-white"
                : "border-[#e5e5e5] bg-white text-black"
            }`}
          >
            <span>Men</span>

            <span
              className={`flex h-[22px] w-[22px] items-center justify-center rounded-full text-[10px] sm:h-[24px] sm:w-[24px] sm:text-[11px] md:h-[25px] md:w-[25px] md:text-[12px] ${
                activeTab === "mens"
                  ? "bg-[rgb(222,89,34)] text-white"
                  : "bg-[#eef0f4] text-gray-600"
              }`}
            >
              {mensCount}
            </span>
          </button>
        </div>
      </div>

      {/* CATEGORY LIST */}
      <div className="mt-[45px] sm:mt-[55px] md:mt-[65px] lg:mt-[75px]">
        {/* Loading */}
        {isLoading && (
          <div className="flex gap-[12px] overflow-hidden sm:gap-[16px] md:gap-[20px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="h-[200px] min-w-[145px] animate-pulse rounded-[16px] bg-gray-200 sm:h-[220px] sm:min-w-[165px] sm:rounded-[18px] md:h-[235px] md:min-w-[175px] lg:h-[248px] lg:min-w-[186px] lg:rounded-[20px]"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="flex h-[200px] items-center justify-center sm:h-[220px] md:h-[248px]">
            <p className="text-center text-[14px] text-gray-500 sm:text-[15px]">
              Failed to load categories.
            </p>
          </div>
        )}

        {/* Categories */}
        {!isLoading && !isError && (
          <>
            {filteredCategories.length === 0 ? (
              <div className="flex h-[200px] items-center justify-center">
                <p className="text-center text-[14px] text-gray-500 sm:text-[15px]">
                  No {activeTab} categories found.
                </p>
              </div>
            ) : (
              <div className="flex gap-[12px] overflow-x-auto overflow-y-hidden pb-3 scrollbar-none sm:gap-[16px] md:gap-[20px]">
                {filteredCategories.slice(0, 8).map((category) => (
                  <div
                    key={category._id}
                    className="group min-w-[145px] cursor-pointer sm:min-w-[165px] md:min-w-[175px] lg:min-w-[186px]"
                  >
                    {/* Image */}
                    <div className="relative h-[200px] w-[145px] overflow-hidden rounded-[16px] sm:h-[220px] sm:w-[165px] sm:rounded-[18px] md:h-[235px] md:w-[175px] lg:h-[248px] lg:w-[186px] lg:rounded-[20px]">
                      <img
                        src={category.image}
                        alt={category.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      {/* Count */}
                      <div className="absolute bottom-[8px] right-[8px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-[10px] font-semibold text-black shadow-sm sm:bottom-[9px] sm:right-[9px] sm:h-[32px] sm:w-[32px] sm:text-[11px] md:bottom-[10px] md:right-[10px] md:h-[34px] md:w-[34px] md:text-[12px]">
                        {category.count || 0}
                      </div>
                    </div>

                    {/* Category Name */}
                    <h3 className="mt-[12px] text-center font-zurixFont text-[15px] font-medium capitalize sm:mt-[15px] sm:text-[16px] md:mt-[18px] md:text-[18px]">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Category;
