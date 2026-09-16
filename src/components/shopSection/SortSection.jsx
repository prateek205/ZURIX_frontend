import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
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
    <div
      className="
        flex
        w-full
        flex-col
        gap-[16px]
        py-[12px]

        sm:gap-[18px]
        sm:py-[14px]

        md:flex-row
        md:items-center
        md:justify-between
        md:gap-4
        md:py-4
      "
    >
      {/* =================================================
          LEFT - RESULT COUNT
      ================================================== */}

      <div
        className="
          text-[12px]
          text-black
          sm:text-[13px]
          md:text-[14px]
        "
      >
        Showing all 12 results
      </div>

      {/* =================================================
          RIGHT - CONTROLS
      ================================================== */}

      <div
        className="
          flex
          w-full
          flex-wrap
          items-center
          justify-between
          gap-[8px]

          sm:justify-end
          sm:gap-[10px]

          md:w-auto
          md:gap-[8px]
        "
      >
        {/* =================================================
            SHOW COUNT
        ================================================== */}

        <div
          className="
            flex
            items-center
            gap-[9px]
            mr-0

            sm:gap-[12px]
            sm:mr-[5px]

            md:gap-[14px]
            md:mr-[12px]
          "
        >
          <span
            className="
              text-[11px]
              font-medium

              sm:text-[12px]
            "
          >
            Show
          </span>

          {[12, 15, 30].map((number) => (
            <button
              key={number}
              type="button"
              onClick={() => setShowCount(number)}
              className="
                relative
                min-h-[36px]
                min-w-[25px]
                px-[2px]
                py-[6px]
                text-[11px]

                sm:min-h-[38px]
                sm:text-[12px]

                md:min-h-[40px]
              "
            >
              {number}

              {/* Active underline */}
              {showCount === number && (
                <span
                  className="
                    absolute
                    bottom-[2px]
                    left-0
                    right-0
                    h-[1px]
                    bg-black
                  "
                />
              )}
            </button>
          ))}
        </div>

        {/* =================================================
            SORT DROPDOWN
        ================================================== */}

        <div
          className="
            relative
            min-w-0
          "
        >
          {/* Dropdown Button */}
          <button
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="
              flex
              h-[38px]
              w-[145px]
              items-center
              justify-between
              gap-[6px]
              rounded-[6px]
              border
              border-[#dedede]
              bg-white
              px-[9px]
              text-left
              text-[10px]
              text-black
              transition-colors
              hover:border-black

              sm:h-[40px]
              sm:w-[165px]
              sm:px-[11px]
              sm:text-[11px]

              md:w-[180px]
              md:px-[12px]
              md:text-[12px]
            "
          >
            <span className="truncate">{sortBy}</span>

            {isSortOpen ? (
              <IoChevronUp
                className="
                  shrink-0
                  text-[16px]
                  sm:text-[17px]
                  md:text-[18px]
                "
              />
            ) : (
              <IoChevronDown
                className="
                  shrink-0
                  text-[16px]
                  sm:text-[17px]
                  md:text-[18px]
                "
              />
            )}
          </button>

          {/* Dropdown Menu */}
          {isSortOpen && (
            <div
              className="
                absolute
                right-0
                top-[44px]
                z-[50]
                w-[190px]
                overflow-hidden
                rounded-[6px]
                bg-white
                shadow-[0px_8px_20px_rgba(0,0,0,0.08)]

                sm:top-[46px]
                sm:w-[200px]
              "
            >
              {sortOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSortChange(option)}
                  className={`
                    flex
                    min-h-[44px]
                    w-full
                    items-center
                    px-[11px]
                    text-left
                    text-[10px]
                    transition-colors

                    sm:min-h-[48px]
                    sm:px-[13px]
                    sm:text-[11px]

                    md:h-[51px]
                    md:text-[12px]

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

        {/* =================================================
            GRID BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setView("grid")}
          aria-label="Grid view"
          className={`
            flex
            h-[38px]
            w-[38px]
            shrink-0
            items-center
            justify-center
            rounded-[6px]
            border
            transition-all

            sm:h-[40px]
            sm:w-[40px]

            ${
              view === "grid"
                ? "border-[#e6531c] bg-[#e6531c] text-white"
                : "border-[#dedede] bg-white text-black"
            }
          `}
        >
          <BsGrid3X3GapFill
            className="
              text-[20px]
              sm:text-[23px]
              md:text-[28px]
            "
          />
        </button>

        {/* =================================================
            LIST BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setView("list")}
          aria-label="List view"
          className={`
            flex
            h-[38px]
            w-[38px]
            shrink-0
            items-center
            justify-center
            rounded-[6px]
            border
            transition-all

            sm:h-[40px]
            sm:w-[40px]

            ${
              view === "list"
                ? "border-[#e6531c] bg-[#e6531c] text-white"
                : "border-[#dedede] bg-white text-black"
            }
          `}
        >
          <TfiLayoutGrid4Alt
            className="
              text-[20px]
              sm:text-[23px]
              md:text-[28px]
            "
          />
        </button>
      </div>
    </div>
  );
};

export default SortSection;
