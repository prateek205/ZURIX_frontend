import React from "react";
import { FaHeart, FaRegHeart, FaShoppingBag, FaTrash } from "react-icons/fa";

const Wishlist = () => {
  // Temporary data
  // Later this will come from useGetWishlistQuery()
  const wishlistItems = [
    {
      _id: "1",
      productId: {
        _id: "p1",
        name: "Oversized Cotton T-Shirt",
        category: "T-Shirts",
        price: 1499,
        salePrice: 999,
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        ],
      },
      quantity: 1,
    },
    {
      _id: "2",
      productId: {
        _id: "p2",
        name: "Relaxed Fit Jeans",
        category: "Jeans",
        price: 2499,
        salePrice: 1799,
        images: ["https://images.unsplash.com/photo-1542272604-787c3835535d"],
      },
      quantity: 1,
    },
    {
      _id: "3",
      productId: {
        _id: "p3",
        name: "Classic Casual Shirt",
        category: "Shirts",
        price: 1999,
        salePrice: 1299,
        images: [
          "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab",
        ],
      },
      quantity: 1,
    },
    {
      _id: "4",
      productId: {
        _id: "p4",
        name: "Minimal Sneakers",
        category: "Footwear",
        price: 2999,
        salePrice: 2199,
        images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff"],
      },
      quantity: 1,
    },
  ];

  return (
    <section className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-10">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
          <span className="cursor-pointer hover:text-black">Home</span>
          <span>/</span>
          <span className="text-black">Wishlist</span>
        </div>

        {/* Header */}
        <div className="mb-10 flex items-center justify-between border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-2xl font-medium uppercase tracking-[0.15em] text-black sm:text-3xl">
              My Wishlist
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {wishlistItems.length} items saved
            </p>
          </div>

          <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-gray-200">
            <FaHeart className="text-sm text-black" />
          </div>
        </div>

        {/* Wishlist Products */}
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlistItems.map((item) => {
              const product = item.productId;

              const discount =
                product.price > product.salePrice
                  ? Math.round(
                      ((product.price - product.salePrice) / product.price) *
                        100,
                    )
                  : 0;

              return (
                <div key={item._id} className="group">
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Discount */}
                    {discount > 0 && (
                      <span className="absolute left-3 top-3 bg-black px-3 py-1 text-[10px] uppercase tracking-wider text-white">
                        {discount}% Off
                      </span>
                    )}

                    {/* Remove Wishlist */}
                    <button
                      type="button"
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-black hover:text-white"
                    >
                      <FaTrash className="text-xs" />
                    </button>

                    {/* Add To Cart */}
                    <button
                      type="button"
                      className="absolute bottom-0 left-0 w-full translate-y-full bg-black py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition duration-300 group-hover:translate-y-0"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <FaShoppingBag />
                        Add to Cart
                      </span>
                    </button>
                  </div>

                  {/* Product Information */}
                  <div className="pt-5">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-gray-400">
                      {product.category}
                    </p>

                    <h2 className="text-sm font-medium uppercase tracking-wide text-gray-900">
                      {product.name}
                    </h2>

                    {/* Price */}
                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-sm font-medium text-black">
                        ₹{product.salePrice.toLocaleString("en-IN")}
                      </span>

                      {product.price > product.salePrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-xs uppercase tracking-wider text-gray-400">
                        Quantity
                      </span>

                      <div className="flex items-center border border-gray-200">
                        <button className="px-3 py-1 text-sm hover:bg-gray-100">
                          −
                        </button>

                        <span className="px-3 text-xs">{item.quantity}</span>

                        <button className="px-3 py-1 text-sm hover:bg-gray-100">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Wishlist */
          <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50">
              <FaRegHeart className="text-2xl text-gray-400" />
            </div>

            <h2 className="text-lg font-medium uppercase tracking-[0.12em]">
              Your Wishlist is Empty
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              Save your favorite products here and come back whenever you're
              ready to shop.
            </p>

            <button
              type="button"
              className="mt-7 bg-black px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-gray-800"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
