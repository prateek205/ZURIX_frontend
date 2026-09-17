import React from "react";
import ImageSection from "../components/productDetailSection/ImageSection";
import ProductInfo from "../components/productDetailSection/ProductInfo";
import { useGetProductByIdQuery } from "../redux/productApi";
import { useParams } from "react-router-dom";
import ProductTab from "../components/productDetailSection/ProductTab";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-sm text-gray-500 sm:text-base">...loading</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-sm text-red-500 sm:text-base">
          ...unable to fetch data
        </p>
      </div>
    );
  }

  const product = data?.data || {};

  console.log("PRODUCT_DATA:", product);
  console.log("API DATA:", data);
  console.log("PRODUCT:", product);

  return (
    <section
      className="
        mx-auto
        flex
        w-[94%]
        flex-col
        items-center
        gap-[30px]
        py-[20px]
        pt-[30px]

        sm:w-[92%]
        sm:gap-[35px]
        sm:py-[25px]
        sm:pt-[35px]

        md:w-[90%]
        md:gap-[40px]
        md:py-[30px]
        md:pt-[40px]

        lg:w-[88%]
        lg:gap-[50px]
        lg:py-[35px]
        lg:pt-[45px]
      "
    >
      {/* =================================================
          PRODUCT MAIN SECTION
      ================================================== */}

      <div
        className="
          flex
          w-full
          flex-col
          gap-[25px]

          sm:gap-[30px]

          md:flex-row
          md:items-start
          md:gap-[20px]

          lg:gap-[30px]

          xl:gap-[40px]
        "
      >
        {/* =================================================
            PRODUCT IMAGE
        ================================================== */}

        <div
          className="
            w-full
            p-0

            md:w-1/2
            md:p-[5px]

            lg:p-[8px]
          "
        >
          <ImageSection product={product} />
        </div>

        {/* =================================================
            PRODUCT INFORMATION
        ================================================== */}

        <div
          className="
            w-full
            p-0

            md:w-1/2
            md:p-[5px]

            lg:p-[8px]
          "
        >
          <div
            className="
              w-full
              rounded-[8px]
              border
              border-black/10
              p-[16px]

              sm:rounded-[10px]
              sm:p-[20px]

              md:p-[22px]

              lg:p-[28px]

              xl:p-[32px]
            "
          >
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      {/* =================================================
          PRODUCT TABS
      ================================================== */}

      <div
        className="
          w-full
          px-0

          sm:px-[5px]

          md:px-[8px]

          lg:px-[10px]
        "
      >
        <ProductTab product={product} />
      </div>
    </section>
  );
};

export default ProductDetails;
