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
          <span
            className="
              text-[16px]
              font-normal
              sm:text-[18px]
              md:text-[20px]
            "
          >
            Categories
          </span>

          <span
            className="
              text-[18px]
              font-medium
              leading-none
              sm:text-[19px]
              md:text-[20px]
            "
          >
            {openSection === "categories" ? "−" : "+"}
          </span>
        </button>

        {/* Content */}
        {openSection === "categories" && (
          <div className="pb-[18px] sm:pb-[20px]">
            <div className="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px]">
              {[
                { label: "All Categories", value: "" },
                { label: "Shirts", value: "shirts" },
                { label: "Blazers", value: "blazers" },
                { label: "Trousers", value: "trousers" },
              ].map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => handleCategoryChange(category.value)}
                  className={`
                    min-h-[36px]
                    text-left
                    text-[13px]
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

      {/* =================================================
          PRICE
      ================================================== */}

      <div className="border-b border-[#e5e5e5]">
        {/* Header */}
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
          <span
            className="
              text-[16px]
              font-normal
              sm:text-[18px]
              md:text-[20px]
            "
          >
            Price
          </span>

          <span
            className="
              text-[18px]
              leading-none
              sm:text-[19px]
              md:text-[20px]
            "
          >
            {openSection === "price" ? "−" : "+"}
          </span>
        </button>

        {/* Content */}
        {openSection === "price" && (
          <div className="pb-[20px] sm:pb-[22px] md:pb-[25px]">
            {/* Slider */}
            <div className="relative mt-[8px] h-[20px] sm:mt-[10px]">
              {/* Track */}
              <div
                className="
                  absolute
                  left-[8px]
                  right-[8px]
                  top-[9px]
                  h-[3px]
                  bg-black
                  sm:left-[10px]
                  sm:right-[10px]
                "
              />

              {/* Left Circle */}
              <div
                className="
                  absolute
                  left-[1px]
                  top-[3px]
                  h-[15px]
                  w-[15px]
                  rounded-full
                  bg-black
                  sm:left-[3px]
                "
              />

              {/* Right Circle */}
              <div
                className="
                  absolute
                  right-[1px]
                  top-[3px]
                  h-[15px]
                  w-[15px]
                  rounded-full
                  bg-black
                  sm:right-[3px]
                "
              />
            </div>

            {/* Price Text */}
            <p
              className="
                mt-[10px]
                pl-[8px]
                text-[13px]
                sm:mt-[12px]
                sm:pl-[10px]
                sm:text-[14px]
                md:text-[15px]
              "
            >
              Price: ${queryParams.minPrice || 10}
              {" — "}${queryParams.maxPrice || 200}
            </p>

            {/* Price Buttons */}
            <div
              className="
                mt-[14px]
                flex
                flex-col
                gap-[6px]
                sm:mt-[16px]
                sm:gap-[8px]
                md:mt-[18px]
                md:gap-[10px]
              "
            >
              {[
                [10, 50, "$10 — $50"],
                [50, 100, "$50 — $100"],
                [100, 200, "$100 — $200"],
              ].map(([min, max, label]) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handlePriceChange(min, max)}
                  className="
                    min-h-[36px]
                    text-left
                    text-[12px]
                    text-gray-500
                    transition-colors
                    hover:text-black
                    sm:text-[13px]
                    md:text-[14px]
                  "
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =================================================
          COLOR
      ================================================== */}

      <div className="border-b border-[#e5e5e5]">
        {/* Header */}
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
          <span
            className="
              text-[16px]
              font-normal
              sm:text-[18px]
              md:text-[20px]
            "
          >
            Color
          </span>

          <span
            className="
              text-[18px]
              leading-none
              sm:text-[19px]
              md:text-[20px]
            "
          >
            {openSection === "color" ? "−" : "+"}
          </span>
        </button>

        {/* Content */}
        {openSection === "color" && (
          <div className="pb-[20px] sm:pb-[22px] md:pb-[25px]">
            <div className="flex flex-col gap-[8px] sm:gap-[10px] md:gap-[14px]">
              {["black", "white", "blue", "red"].map((color) => (
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
                    checked={queryParams.colors.includes(color)}
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

      {/* =================================================
          SIZE
      ================================================== */}

      <div className="border-b border-[#e5e5e5]">
        {/* Header */}
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
          <span
            className="
              text-[16px]
              font-normal
              sm:text-[18px]
              md:text-[20px]
            "
          >
            Size
          </span>

          <span
            className="
              text-[18px]
              leading-none
              sm:text-[19px]
              md:text-[20px]
            "
          >
            {openSection === "size" ? "−" : "+"}
          </span>
        </button>

        {/* Content */}
        {openSection === "size" && (
          <div className="pb-[20px] sm:pb-[22px] md:pb-[25px]">
            <div className="flex flex-wrap gap-[7px] sm:gap-[8px]">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSizeChange(size)}
                  className={`
                    flex
                    h-[38px]
                    w-[38px]
                    items-center
                    justify-center
                    border
                    text-[12px]
                    transition
                    sm:h-[40px]
                    sm:w-[40px]
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

      {/* =================================================
          TAGS
      ================================================== */}

      <div className="border-b border-[#e5e5e5]">
        {/* Header */}
        <button
          type="button"
          onClick={() => toggleSection("tags")}
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
          <span
            className="
              text-[16px]
              font-normal
              sm:text-[18px]
              md:text-[20px]
            "
          >
            Tags
          </span>

          <span
            className="
              text-[18px]
              leading-none
              sm:text-[19px]
              md:text-[20px]
            "
          >
            {openSection === "tags" ? "−" : "+"}
          </span>
        </button>

        {/* Content */}
        {openSection === "tags" && (
          <div className="pb-[20px] sm:pb-[22px] md:pb-[25px]">
            <div className="flex flex-wrap gap-[6px] sm:gap-[8px]">
              {["New", "Sale", "Trending", "Featured"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="
                    min-h-[34px]
                    rounded-full
                    border
                    border-[#e5e5e5]
                    px-[11px]
                    py-[6px]
                    text-[11px]
                    transition
                    hover:border-black
                    sm:px-[13px]
                    sm:text-[12px]
                    md:px-[14px]
                    md:py-[7px]
                    md:text-[13px]
                  "
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
