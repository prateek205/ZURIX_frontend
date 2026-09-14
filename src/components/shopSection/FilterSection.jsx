import React, { useState } from "react";

const FilterSection = ({ queryParams, setQueryParams }) => {
  const [openSection, setOpenSection] = useState("categories");

  /* =====================================================
      ACCORDION
  ====================================================== */

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  /* =====================================================
      CATEGORY
  ====================================================== */

  const handleCategoryChange = (category) => {
    setQueryParams((prev) => ({
      ...prev,
      category,
    }));
  };

  /* =====================================================
      COLOR
  ====================================================== */

  const handleColorChange = (color) => {
    setQueryParams((prev) => ({
      ...prev,
      colors: [color],
    }));
  };

  /* =====================================================
      SIZE
  ====================================================== */

  const handleSizeChange = (size) => {
    setQueryParams((prev) => ({
      ...prev,
      size,
    }));
  };

  /* =====================================================
      PRICE
  ====================================================== */

  const handlePriceChange = (minPrice, maxPrice) => {
    setQueryParams((prev) => ({
      ...prev,
      minPrice,
      maxPrice,
    }));
  };

  return (
    <div className="w-full bg-white">
      {/* =================================================
          CATEGORIES
      ================================================== */}

      <div className="border-b border-[#e5e5e5]">
        {/* Header */}

        <button
          type="button"
          onClick={() => toggleSection("categories")}
          className="flex w-full items-center justify-between py-[20px]"
        >
          <span className="text-[20px] font-normal">Categories</span>

          <span className="text-[20px] font-medium leading-none">
            {openSection === "categories" ? "−" : "+"}
          </span>
        </button>

        {/* Content */}

        {openSection === "categories" && (
          <div className="pb-[20px]">
            <div className="flex flex-col gap-[14px]">
              <button
                type="button"
                onClick={() => handleCategoryChange("")}
                className={`text-left text-[15px] transition-colors ${
                  queryParams.category === ""
                    ? "font-medium text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                All Categories
              </button>

              <button
                type="button"
                onClick={() => handleCategoryChange("shirts")}
                className={`text-left text-[15px] transition-colors ${
                  queryParams.category === "shirts"
                    ? "font-medium text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Shirts
              </button>

              <button
                type="button"
                onClick={() => handleCategoryChange("blazers")}
                className={`text-left text-[15px] transition-colors ${
                  queryParams.category === "blazers"
                    ? "font-medium text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Blazers
              </button>

              <button
                type="button"
                onClick={() => handleCategoryChange("trousers")}
                className={`text-left text-[15px] transition-colors ${
                  queryParams.category === "trousers"
                    ? "font-medium text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Trousers
              </button>
            </div>
          </div>
        )}
      </div>

      {/* =================================================
          PRICE
      ================================================== */}

      <div className="border-b border-[#e5e5e5]">
        {/* Price Header */}

        <button
          type="button"
          onClick={() => toggleSection("price")}
          className="flex w-full items-center justify-between py-[20px]"
        >
          <span className="text-[20px] font-normal">Price</span>

          <span className="text-[20px] leading-none">
            {openSection === "price" ? "−" : "+"}
          </span>
        </button>

        {/* Price Content */}

        {openSection === "price" && (
          <div className="pb-[25px]">
            {/* Slider */}

            <div className="relative mt-[10px] h-[20px]">
              {/* Track */}

              <div className="absolute left-[10px] right-[10px] top-[9px] h-[3px] bg-black" />

              {/* Left Circle */}

              <div className="absolute left-[3px] top-[3px] h-[15px] w-[15px] rounded-full bg-black" />

              {/* Right Circle */}

              <div className="absolute right-[3px] top-[3px] h-[15px] w-[15px] rounded-full bg-black" />
            </div>

            {/* Price Text */}

            <p className="mt-[12px] pl-[10px] text-[15px]">
              Price: ${queryParams.minPrice || 10}
              {" — "}${queryParams.maxPrice || 200}
            </p>

            {/* Price Buttons */}

            <div className="mt-[18px] flex flex-col gap-[10px]">
              <button
                type="button"
                onClick={() => handlePriceChange(10, 50)}
                className="text-left text-[14px] text-gray-500 hover:text-black"
              >
                $10 — $50
              </button>

              <button
                type="button"
                onClick={() => handlePriceChange(50, 100)}
                className="text-left text-[14px] text-gray-500 hover:text-black"
              >
                $50 — $100
              </button>

              <button
                type="button"
                onClick={() => handlePriceChange(100, 200)}
                className="text-left text-[14px] text-gray-500 hover:text-black"
              >
                $100 — $200
              </button>
            </div>
          </div>
        )}
      </div>

      {/* =================================================
          COLOR
      ================================================== */}

      <div className="border-b border-[#e5e5e5]">
        <button
          type="button"
          onClick={() => toggleSection("color")}
          className="flex w-full items-center justify-between py-[27px]"
        >
          <span className="text-[20px] font-normal">Color</span>

          <span className="text-[20px] leading-none">
            {openSection === "color" ? "−" : "+"}
          </span>
        </button>

        {openSection === "color" && (
          <div className="pb-[25px]">
            <div className="flex flex-col gap-[14px]">
              {["black", "white", "blue", "red"].map((color) => (
                <label
                  key={color}
                  className="flex cursor-pointer items-center gap-[10px] text-[15px]"
                >
                  <input
                    type="radio"
                    name="color"
                    checked={queryParams.colors.includes(color)}
                    onChange={() => handleColorChange(color)}
                    className="h-[15px] w-[15px]"
                  />

                  <span className="capitalize">{color}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =================================================
          SIZE
      ================================================== */}

      <div className="border-b border-[#e5e5e5]">
        <button
          type="button"
          onClick={() => toggleSection("size")}
          className="flex w-full items-center justify-between py-[27px]"
        >
          <span className="text-[20px] font-normal">Size</span>

          <span className="text-[20px] leading-none">
            {openSection === "size" ? "−" : "+"}
          </span>
        </button>

        {openSection === "size" && (
          <div className="pb-[25px]">
            <div className="flex flex-wrap gap-[8px]">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSizeChange(size)}
                  className={`flex h-[40px] w-[40px] items-center justify-center border text-[13px] transition ${
                    queryParams.size === size
                      ? "border-black bg-black text-white"
                      : "border-[#e5e5e5] hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =================================================
          TAGS
      ================================================== */}

      <div className="border-b border-[#e5e5e5]">
        <button
          type="button"
          onClick={() => toggleSection("tags")}
          className="flex w-full items-center justify-between py-[27px]"
        >
          <span className="text-[20px] font-normal">Tags</span>

          <span className="text-[20px] leading-none">
            {openSection === "tags" ? "−" : "+"}
          </span>
        </button>

        {openSection === "tags" && (
          <div className="pb-[25px]">
            <div className="flex flex-wrap gap-[8px]">
              {["New", "Sale", "Trending", "Featured"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="rounded-full border border-[#e5e5e5] px-[14px] py-[7px] text-[13px] transition hover:border-black"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
