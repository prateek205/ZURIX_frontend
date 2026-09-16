import React, { useState } from "react";
import { useGetAllCategoryQuery } from "../../redux/categoryApi";

const Category = () => {
  const { data, isLoading, isError } = useGetAllCategoryQuery();

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
    <section
      className="
        mx-auto
        w-[92%]
        py-[50px]

        sm:w-[90%]
        sm:py-[65px]

        md:w-[88%]
        md:py-[80px]

        lg:w-[85%]
        lg:py-[100px]
      "
    >
      {/* =========================
          TOP LABEL
      ========================== */}

      <div>
        <h1
          className="
            font-zurixFont
            text-[11px]
            font-normal
            uppercase
            tracking-[2px]
            text-[rgb(222,89,34)]

            sm:text-[13px]
            sm:tracking-[2.5px]

            md:text-[14px]
            md:tracking-[3px]

            lg:text-[16px]
          "
        >
          Browse
        </h1>
      </div>

      {/* =========================
          HEADING + TABS
      ========================== */}

      <div
        className="
          mt-[12px]
          flex
          flex-col
          gap-[20px]

          sm:mt-[15px]
          sm:gap-[25px]

          md:mt-[18px]
          md:gap-[30px]

          lg:mt-[20px]
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Heading */}

        <h2
          className="
            font-zurixFont
            text-[30px]
            font-bold
            leading-[1.05]
            tracking-[-1px]

            sm:text-[36px]

            md:text-[42px]

            lg:text-[46px]
            lg:tracking-[-1.5px]
          "
        >
          Explore Categories
        </h2>

        {/* =========================
            TABS
        ========================== */}

        <div
          className="
            flex
            w-full
            items-center
            gap-[8px]

            sm:gap-[10px]

            lg:w-auto
          "
        >
          {/* Women */}

          <button
            type="button"
            onClick={() => setActiveTab("womens")}
            className={`
              flex
              items-center
              justify-center
              gap-[7px]
              rounded-full
              border
              px-[14px]
              py-[7px]
              text-[12px]
              font-semibold
              transition-all
              duration-300

              sm:px-[17px]
              sm:py-[8px]
              sm:text-[13px]

              md:px-[20px]
              md:py-[9px]
              md:text-[14px]

              lg:text-[15px]

              ${
                activeTab === "womens"
                  ? "border-black bg-black text-white"
                  : "border-[#e5e5e5] bg-white text-black hover:border-black"
              }
            `}
          >
            <span>Women</span>

            <span
              className={`
                flex
                h-[21px]
                w-[21px]
                items-center
                justify-center
                rounded-full
                text-[9px]

                sm:h-[23px]
                sm:w-[23px]
                sm:text-[10px]

                md:h-[25px]
                md:w-[25px]
                md:text-[11px]

                ${
                  activeTab === "womens"
                    ? "bg-[rgb(222,89,34)] text-white"
                    : "bg-[#eef0f4] text-gray-600"
                }
              `}
            >
              {womensCount}
            </span>
          </button>

          {/* Men */}

          <button
            type="button"
            onClick={() => setActiveTab("mens")}
            className={`
              flex
              items-center
              justify-center
              gap-[7px]
              rounded-full
              border
              px-[14px]
              py-[7px]
              text-[12px]
              font-semibold
              transition-all
              duration-300

              sm:px-[17px]
              sm:py-[8px]
              sm:text-[13px]

              md:px-[20px]
              md:py-[9px]
              md:text-[14px]

              lg:text-[15px]

              ${
                activeTab === "mens"
                  ? "border-black bg-black text-white"
                  : "border-[#e5e5e5] bg-white text-black hover:border-black"
              }
            `}
          >
            <span>Men</span>

            <span
              className={`
                flex
                h-[21px]
                w-[21px]
                items-center
                justify-center
                rounded-full
                text-[9px]

                sm:h-[23px]
                sm:w-[23px]
                sm:text-[10px]

                md:h-[25px]
                md:w-[25px]
                md:text-[11px]

                ${
                  activeTab === "mens"
                    ? "bg-[rgb(222,89,34)] text-white"
                    : "bg-[#eef0f4] text-gray-600"
                }
              `}
            >
              {mensCount}
            </span>
          </button>
        </div>
      </div>

      {/* =========================
          CATEGORY LIST
      ========================== */}

      <div
        className="
          mt-[35px]

          sm:mt-[45px]

          md:mt-[55px]

          lg:mt-[65px]
        "
      >
        {/* =========================
            LOADING
        ========================== */}

        {isLoading && (
          <div
            className="
              flex
              gap-[10px]
              overflow-hidden

              sm:gap-[14px]

              md:gap-[18px]
            "
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="
                  h-[190px]
                  min-w-[135px]
                  animate-pulse
                  rounded-[14px]
                  bg-gray-200

                  sm:h-[215px]
                  sm:min-w-[155px]
                  sm:rounded-[16px]

                  md:h-[230px]
                  md:min-w-[170px]

                  lg:h-[245px]
                  lg:min-w-[185px]
                  lg:rounded-[20px]
                "
              />
            ))}
          </div>
        )}

        {/* =========================
            ERROR
        ========================== */}

        {isError && (
          <div
            className="
              flex
              h-[190px]
              items-center
              justify-center

              sm:h-[215px]

              md:h-[230px]

              lg:h-[245px]
            "
          >
            <p
              className="
                text-center
                text-[13px]
                text-gray-500

                sm:text-[14px]

                md:text-[15px]
              "
            >
              Failed to load categories.
            </p>
          </div>
        )}

        {/* =========================
            CATEGORIES
        ========================== */}

        {!isLoading && !isError && (
          <>
            {filteredCategories.length === 0 ? (
              <div
                className="
                  flex
                  h-[190px]
                  items-center
                  justify-center

                  sm:h-[215px]

                  md:h-[230px]

                  lg:h-[245px]
                "
              >
                <p
                  className="
                    text-center
                    text-[13px]
                    text-gray-500

                    sm:text-[14px]

                    md:text-[15px]
                  "
                >
                  No {activeTab} categories found.
                </p>
              </div>
            ) : (
              <div
                className="
                  flex
                  gap-[10px]
                  overflow-x-auto
                  overflow-y-hidden
                  pb-3
                  scrollbar-none

                  sm:gap-[14px]

                  md:gap-[18px]

                  lg:gap-[20px]
                "
              >
                {filteredCategories.slice(0, 8).map((category) => (
                  <div
                    key={category._id}
                    className="
                      group
                      min-w-[135px]
                      cursor-pointer

                      sm:min-w-[155px]

                      md:min-w-[170px]

                      lg:min-w-[185px]
                    "
                  >
                    {/* =========================
                        IMAGE
                    ========================== */}

                    <div
                      className="
                        relative
                        h-[190px]
                        w-[135px]
                        overflow-hidden
                        rounded-[14px]

                        sm:h-[215px]
                        sm:w-[155px]
                        sm:rounded-[16px]

                        md:h-[230px]
                        md:w-[170px]

                        lg:h-[245px]
                        lg:w-[185px]
                        lg:rounded-[20px]
                      "
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        loading="lazy"
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          ease-out
                          group-hover:scale-105
                        "
                      />

                      {/* Count */}

                      <div
                        className="
                          absolute
                          bottom-[7px]
                          right-[7px]
                          flex
                          h-[28px]
                          w-[28px]
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-[9px]
                          font-semibold
                          text-black
                          shadow-sm

                          sm:bottom-[8px]
                          sm:right-[8px]
                          sm:h-[30px]
                          sm:w-[30px]
                          sm:text-[10px]

                          md:bottom-[9px]
                          md:right-[9px]
                          md:h-[32px]
                          md:w-[32px]
                          md:text-[11px]

                          lg:bottom-[10px]
                          lg:right-[10px]
                          lg:h-[34px]
                          lg:w-[34px]
                          lg:text-[12px]
                        "
                      >
                        {category.count || 0}
                      </div>
                    </div>

                    {/* =========================
                        CATEGORY NAME
                    ========================== */}

                    <h3
                      className="
                        mt-[10px]
                        text-center
                        font-zurixFont
                        text-[13px]
                        font-medium
                        capitalize

                        sm:mt-[12px]
                        sm:text-[14px]

                        md:mt-[15px]
                        md:text-[16px]

                        lg:mt-[17px]
                        lg:text-[18px]
                      "
                    >
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
