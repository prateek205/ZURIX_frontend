import React, { useEffect, useState } from "react";

const ImageSection = ({ product }) => {
  const [selectImage, setSelectImage] = useState("");

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectImage(product.images[0].url);
    }
  }, [product]);

  if (!product?.images?.length > 0) {
    return <p>No Image is Available...</p>;
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-center">
        {selectImage && (
          <img
            src={selectImage}
            alt={product.name}
            className="w-[100%] rounded-xl"
          />
        )}
      </div>
      <div className="flex items-center justify-evenly gap-4">
        {product.images.map((image, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => setSelectImage(image.url)}
              className={`w-[100px] h-[100px] border rounded-sm ${selectImage === image ? "border-black" : "border-gray-400"}`}
            >
              <img
                src={image.url}
                alt={`${product.name}-${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ImageSection;
