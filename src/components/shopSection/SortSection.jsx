import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { BsGrid3X3GapFill } from "react-icons/bs";

const SortSection = ({ queryParams, setQueryParams }) => {
  const [showCount, setShowCount] = useState(12);
  const [sortBy, setSortBy] = useState("Default sorting");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [view, setView] = useState("grid");

  const sortOptions = [
    "Default sorting",
    "Sort by popularity",
    "Sort by average rating",
    "Sort by latest",
    "Sort by price: low to high",
    "Sort by price: high to low",
  ];

  const handleSortChange = (option) => {
    setSortBy(option);
    setIsSortOpen(false);
  };

  return (
    <div className="w-full flex items-center justify-between py-4">
      {/* ================= LEFT ================= */}
      <div className="text-[14px] text-black">Showing all 12 results</div>

      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-[8px]">
        {/* Show */}
        <div className="flex items-center gap-[14px] mr-[12px]">
          <span className="text-[12px] font-medium">Show</span>

          {[12, 15, 30].map((number) => (
            <button
              key={number}
              type="button"
              onClick={() => setShowCount(number)}
              className="relative text-[12px] px-[2px] py-[8px]"
            >
              {number}

              {/* Active underline */}
              {showCount === number && (
                <span
                  className="
                    absolute
                    left-0
                    right-0
                    bottom-[-2px]
                    h-[1px]
                    bg-black
                  "
                />
              )}
            </button>
          ))}
        </div>

        {/* ================= CUSTOM SORT DROPDOWN ================= */}
        <div className="relative">
          {/* Dropdown Button */}
          <button
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="
              w-[180px]
              h-[40px]
              px-[12px]
              border
              border-[#dedede]
              rounded-[6px]
              bg-white
              flex
              items-center
              justify-between
              text-[12px]
              text-black
              cursor-pointer
            "
          >
            <span>{sortBy}</span>

            {isSortOpen ? (
              <IoChevronUp className="text-[18px]" />
            ) : (
              <IoChevronDown className="text-[18px]" />
            )}
          </button>

          {/* Dropdown Menu */}
          {isSortOpen && (
            <div
              className="
                absolute
                z-[50]
                top-[64px]
                right-0
                w-[200px]
                bg-white
                shadow-[0px_8px_20px_rgba(0,0,0,0.08)]
              "
            >
              {sortOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSortChange(option)}
                  className={`
                    w-full
                    text-left
                    px-[14px]
                    h-[51px]
                    flex
                    items-center
                    text-[12px]
                    transition-colors
                    ${
                      sortBy === option
                        ? "bg-[#e6531c] text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ================= GRID BUTTON ================= */}
        <button
          type="button"
          onClick={() => setView("grid")}
          className={`
            w-[40px]
            h-[40px]
            rounded-[6px]
            flex
            items-center
            justify-center
            border
            transition-all
            ${
              view === "grid"
                ? "bg-[#e6531c] text-white border-[#e6531c]"
                : "bg-white text-black border-[#dedede]"
            }
          `}
        >
          <BsGrid3X3GapFill className="text-[28px]" />
        </button>

        {/* ================= LIST BUTTON ================= */}
        <button
          type="button"
          onClick={() => setView("list")}
          className={`
            w-[40px]
            h-[40px]
            rounded-[6px]
            flex
            items-center
            justify-center
            border
            transition-all
            ${
              view === "list"
                ? "bg-[#e6531c] text-white border-[#e6531c]"
                : "bg-white text-black border-[#dedede]"
            }
          `}
        >
          <TfiLayoutGrid4Alt className="text-[28px]" />
        </button>
      </div>
    </div>
  );
};

export default SortSection;
