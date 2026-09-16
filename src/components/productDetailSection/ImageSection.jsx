import React, { useEffect, useState } from "react";

const ImageSection = ({ product }) => {
  const [selectImage, setSelectImage] = useState("");

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectImage(product.images[0].url);
    }
  }, [product]);

  if (!product?.images?.length) {
    return (
      <div className="flex min-h-[250px] items-center justify-center">
        <p className="text-sm text-gray-500 sm:text-base">
          No Image is Available...
        </p>
      </div>
    );
  }

  return (
    <section
      className="
        flex
        w-full
        flex-col
        gap-[12px]

        sm:gap-[16px]

        md:gap-[20px]
      "
    >
      {/* =================================================
          MAIN IMAGE
      ================================================== */}

      <div
        className="
          flex
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-[10px]
          bg-gray-100

          sm:rounded-[12px]

          md:rounded-[14px]
        "
      >
        {selectImage && (
          <img
            src={selectImage}
            alt={product.name}
            className="
              h-auto
              max-h-[500px]
              w-full
              object-cover
              transition-all
              duration-300

              sm:max-h-[600px]

              md:max-h-[650px]
            "
          />
        )}
      </div>

      {/* =================================================
          IMAGE THUMBNAILS
      ================================================== */}

      <div
        className="
          scrollbar-none
          flex
          w-full
          gap-[8px]
          overflow-x-auto
          pb-[4px]

          sm:gap-[10px]

          md:justify-start
          md:gap-[12px]
          md:overflow-x-visible
          md:pb-0
        "
      >
        {product.images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectImage(image.url)}
            className={`
              h-[65px]
              w-[65px]
              shrink-0
              overflow-hidden
              rounded-[5px]
              border
              bg-white
              transition-all
              duration-200

              sm:h-[75px]
              sm:w-[75px]
              sm:rounded-[6px]

              md:h-[85px]
              md:w-[85px]

              lg:h-[95px]
              lg:w-[95px]

              ${
                selectImage === image.url
                  ? "border-[2px] border-black"
                  : "border border-gray-300 hover:border-black"
              }
            `}
          >
            <img
              src={image.url}
              alt={`${product.name}-${index + 1}`}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;
