import React, { useMemo, useState } from "react";

const FilterSection = ({ queryParams, setQueryParams, products = [] }) => {
  const [openSection, setOpenSection] = useState("categories");

  /* =====================================================
      DYNAMIC FILTER DATA
  ====================================================== */

  // Dynamic Categories
  const categories = useMemo(() => {
    const categoryMap = new Map();

    products.forEach((product) => {
      if (product?.category?._id && product?.category?.name) {
        categoryMap.set(product.category._id, product.category.name);
      }
    });

    return Array.from(categoryMap, ([value, label]) => ({
      value,
      label,
    }));
  }, [products]);

  // Dynamic Colors
  const colors = useMemo(() => {
    const colorSet = new Set();

    products.forEach((product) => {
      product?.colors?.forEach((color) => {
        if (color) {
          colorSet.add(color);
        }
      });
    });

    return Array.from(colorSet);
  }, [products]);

  // Dynamic Sizes
  const sizes = useMemo(() => {
    const sizeSet = new Set();

    products.forEach((product) => {
      product?.size?.forEach((size) => {
        if (size) {
          sizeSet.add(size);
        }
      });
    });

    return Array.from(sizeSet);
  }, [products]);

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

      {/* =================================================
          PRICE
      ================================================== */}

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

        {openSection === "price" && (
          <div className="pb-[20px] sm:pb-[22px] md:pb-[25px]">
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
              Price: ₹{queryParams.minPrice || 0}
              {" — "}₹{queryParams.maxPrice || 1000}
            </p>

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
                [0, 500, "₹0 — ₹500"],
                [500, 1000, "₹500 — ₹1,000"],
                [1000, 5000, "₹1,000 — ₹5,000"],
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
                    checked={queryParams.colors?.includes(color)}
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

      {/* =================================================
          TAGS
      ================================================== */}

      <div className="border-b border-[#e5e5e5]">
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

        {openSection === "tags" && (
          <div className="pb-[20px] sm:pb-[22px] md:pb-[25px]">
            <div className="text-sm text-gray-500">No tags available.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
