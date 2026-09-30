import React, { useState } from "react";

const FilterSection = ({ queryParams, setQueryParams, products = [] }) => {
  const [openSection, setOpenSection] = useState("categories");

  /* =====================================================
      FIXED FILTER DATA
  ====================================================== */

  // Sizes
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  // Colors
  const colors = ["Red", "Green", "Blue", "Violet"];

  // Price Range
  const priceRange = [
    [0, 500, "₹0 — ₹500"],
    [500, 1000, "₹500 — ₹1,000"],
    [1000, 5000, "₹1,000 — ₹5,000"],
  ];

  /* =====================================================
      DYNAMIC CATEGORIES
  ====================================================== */

  const categoryMap = new Map();

  products.forEach((product) => {
    if (product?.category?._id && product?.category?.name) {
      categoryMap.set(product.category._id, product.category.name);
    }
  });

  const categories = Array.from(categoryMap, ([value, label]) => ({
    value,
    label,
  }));

  /* =====================================================
      RESET FILTERS
  ====================================================== */

  const handleResetFilters = () => {
    setQueryParams({
      category: "",
      colors: "",
      size: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  const isFilterApplied =
    queryParams?.category ||
    queryParams?.size ||
    queryParams?.colors||
    queryParams?.minPrice ||
    queryParams?.maxPrice;

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
    console.log("SELECTED COLOR:", color);
    setQueryParams((prev) => ({
      ...prev,
      colors: color,
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
      {/* =====================================================
          RESET FILTER BUTTON
      ====================================================== */}

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[16px] font-medium sm:text-[18px]">Filters</h2>

        {isFilterApplied && (
          <button
            type="button"
            onClick={handleResetFilters}
            className="
              text-[13px]
              font-medium
              text-gray-500
              underline
              underline-offset-4
              transition-colors
              hover:text-black
              sm:text-[14px]
            "
          >
            Reset
          </button>
        )}
      </div>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <div className="border-b border-[#e5e5e5]">
        <button
          type="button"
          onClick={() => toggleSection("categories")}
          className="
            flex
            min-h-[52px]
            w-full
            items-center
            justify-between
            py-[14px]
            sm:min-h-[58px]
            sm:py-[16px]
            md:py-[20px]
          "
        >
          <span className="text-[16px] font-normal sm:text-[18px] md:text-[20px]">
            Categories
          </span>

          <span className="text-[18px] font-medium leading-none">
            {openSection === "categories" ? "−" : "+"}
          </span>
        </button>

        {openSection === "categories" && (
          <div className="pb-[18px] sm:pb-[20px]">
            <div className="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px]">
              {/* All Categories */}
              <button
                type="button"
                onClick={() => handleCategoryChange("")}
                className={`
                  min-h-[36px]
                  text-left
                  text-[13px]
                  transition-colors
                  sm:text-[14px]
                  md:text-[15px]
                  ${
                    !queryParams.category
                      ? "font-medium text-black"
                      : "text-gray-500 hover:text-black"
                  }
                `}
              >
                All Categories
              </button>

              {/* Dynamic Categories */}
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => handleCategoryChange(category.value)}
                  className={`
                    min-h-[36px]
                    text-left
                    text-[13px]
                    capitalize
                    transition-colors
                    sm:text-[14px]
                    md:text-[15px]
                    ${
                      queryParams.category === category.value
                        ? "font-medium text-black"
                        : "text-gray-500 hover:text-black"
                    }
                  `}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          PRICE
      ====================================================== */}

      <div className="border-b border-[#e5e5e5]">
        <button
          type="button"
          onClick={() => toggleSection("price")}
          className="
            flex
            min-h-[52px]
            w-full
            items-center
            justify-between
            py-[14px]
            sm:min-h-[58px]
            sm:py-[16px]
            md:py-[20px]
          "
        >
          <span className="text-[16px] font-normal sm:text-[18px] md:text-[20px]">
            Price
          </span>

          <span className="text-[18px] leading-none">
            {openSection === "price" ? "−" : "+"}
          </span>
        </button>

        {openSection === "price" && (
          <div className="pb-[20px] sm:pb-[22px] md:pb-[25px]">
            <div className="mt-[14px] flex flex-col gap-[6px] sm:mt-[16px] sm:gap-[8px] md:mt-[18px] md:gap-[10px]">
              {priceRange.map(([min, max, label]) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handlePriceChange(min, max)}
                  className={`
                    min-h-[36px]
                    text-left
                    text-[12px]
                    transition-colors
                    sm:text-[13px]
                    md:text-[14px]
                    ${
                      queryParams.minPrice === min &&
                      queryParams.maxPrice === max
                        ? "font-medium text-black"
                        : "text-gray-500 hover:text-black"
                    }
                  `}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          COLORS
      ====================================================== */}

      <div className="border-b border-[#e5e5e5]">
        <button
          type="button"
          onClick={() => toggleSection("color")}
          className="
            flex
            min-h-[52px]
            w-full
            items-center
            justify-between
            py-[14px]
            sm:min-h-[58px]
            sm:py-[18px]
            md:py-[22px]
          "
        >
          <span className="text-[16px] font-normal sm:text-[18px] md:text-[20px]">
            Color
          </span>

          <span className="text-[18px] leading-none">
            {openSection === "color" ? "−" : "+"}
          </span>
        </button>

        {openSection === "color" && (
          <div className="pb-[20px] sm:pb-[22px] md:pb-[25px]">
            <div className="flex flex-col gap-[8px] sm:gap-[10px] md:gap-[14px]">
              {colors.map((color) => (
                <label
                  key={color}
                  className="
                    flex
                    min-h-[36px]
                    cursor-pointer
                    items-center
                    gap-[8px]
                    text-[13px]
                    sm:gap-[10px]
                    sm:text-[14px]
                    md:text-[15px]
                  "
                >
                  <input
                    type="radio"
                    name="color"
                    checked={queryParams.colors.color}
                    onChange={() => handleColorChange(color)}
                    className="h-[15px] w-[15px] shrink-0"
                  />

                  <span className="capitalize">{color}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          SIZES
      ====================================================== */}

      <div className="border-b border-[#e5e5e5]">
        <button
          type="button"
          onClick={() => toggleSection("size")}
          className="
            flex
            min-h-[52px]
            w-full
            items-center
            justify-between
            py-[14px]
            sm:min-h-[58px]
            sm:py-[18px]
            md:py-[22px]
          "
        >
          <span className="text-[16px] font-normal sm:text-[18px] md:text-[20px]">
            Size
          </span>

          <span className="text-[18px] leading-none">
            {openSection === "size" ? "−" : "+"}
          </span>
        </button>

        {openSection === "size" && (
          <div className="pb-[20px] sm:pb-[22px] md:pb-[25px]">
            <div className="flex flex-wrap gap-[7px] sm:gap-[8px]">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSizeChange(size)}
                  className={`
                    flex
                    h-[42px]
                    min-w-[60px]
                    items-center
                    justify-center
                    border
                    px-2
                    text-[12px]
                    transition
                    sm:h-[44px]
                    sm:text-[13px]
                    ${
                      queryParams.size === size
                        ? "border-black bg-black text-white"
                        : "border-[#e5e5e5] hover:border-black"
                    }
                  `}
                >
                  {size}
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
