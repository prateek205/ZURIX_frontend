import React, { useState } from "react";

import FilterSection from "../components/shopSection/FilterSection";
import SortSection from "../components/shopSection/SortSection";
import ProductSection from "../components/shopSection/ProductSection";

const ProductsPage = () => {
  const [queryParams, setQueryParams] = useState({
    sort: "",
    search: "",
    filter: "",
    minPrice: "",
    maxPrice: "",
    colors: [],
    size: "",
    category: "",
  });

  return (
    <section className="h-full w-full">
      {/* =================================================
          HERO
      ================================================== */}

      <div
        className="
          mt-[20px]
          pb-[5px]
          sm:mt-[28px]
          sm:pb-[8px]
          md:mt-[35px]
          lg:mt-[55px]
        "
      >
        <img
          src="images/shop/hero_banner_shop.jpg"
          alt="Shop"
          className="
            mx-auto
            h-[220px]
            w-[92%]
            rounded-[12px]
            object-cover

            sm:h-[280px]
            sm:w-[90%]
            sm:rounded-[15px]

            md:h-[340px]
            md:w-[89%]
            md:rounded-[18px]

            lg:h-[400px]
            lg:w-[87%]
            lg:rounded-[20px]
          "
        />
      </div>

      {/* =================================================
          SHOP SECTION
      ================================================== */}

      <div
        className="
          mx-auto
          w-[94%]
          py-[20px]

          sm:w-[92%]
          sm:py-[25px]

          md:w-[90%]
          md:py-[30px]

          lg:w-[88%]
          lg:py-[35px]
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            gap-[20px]

            md:gap-[25px]

            lg:flex-row
            lg:gap-[15px]
          "
        >
          {/* =================================================
              FILTER
          ================================================== */}

          <div
            className="
              w-full
              px-0
              py-0

              md:px-[5px]

              lg:w-[25%]
              lg:px-[8px]
              lg:py-1
            "
          >
            <div
              className="
                w-full

                lg:sticky
                lg:top-[20px]
              "
            >
              <FilterSection
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            </div>
          </div>

          {/* =================================================
              PRODUCTS
          ================================================== */}

          <div
            className="
              flex
              w-full
              min-w-0
              flex-col
              gap-[8px]

              md:gap-[12px]

              lg:w-[75%]
              lg:gap-3
            "
          >
            {/* =================================================
                SORT
            ================================================== */}

            <div className="w-full">
              <SortSection
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            </div>

            {/* =================================================
                PRODUCT GRID
            ================================================== */}

            <div className="w-full min-w-0">
              <ProductSection queryParams={queryParams} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
