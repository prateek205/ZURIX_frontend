import React from "react";
import {
  useGetAllCartsQuery,
  useUpdateCartMutation,
} from "../../redux/cartApi";

const CartSection = () => {
  const { data, isLoading, isError } = useGetAllCartsQuery();
  const [updateCart] = useUpdateCartMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Unable to fetch data</p>;
  }

  const cartData = data?.data?.items || [];

  console.log("CART_ITEM:", cartData);

  const handleQuantity = async (item, action) => {
    let newQty = item.quantity;

    if (action == "inc") {
      newQty = item.quantity + 1;
    }

    if (action == "dec") {
      newQty = item.quantity - 1;
    }

    if (newQty < 1) {
      return;
    }

    try {
      await updateCart({
        itemId:item._id,
        quantity: newQty,
      }).unwrap();
    } catch (error) {
      console.log("UPDATE_ERROR", error);
    }
  };

  const mainPrice = cartData.reduce((total, item) => {
    const product = item.productId;
    const orginalPrice = product?.salePrice || 0;
    const quantity = item?.quantity || 0;

    return total + Number(orginalPrice) * Number(quantity);
  }, 0);

  const sellingPrice = cartData.reduce((total, item) => {
    const product = item.productId;
    const sellPrice = product?.price || 0;
    const quantity = item?.quantity || 0;

    return total + Number(sellPrice) * Number(quantity);
  }, 0);

  const discount = mainPrice - sellingPrice;

  const shipping = 0;

  const total = sellingPrice + shipping;

  return (
    <section className="w-[90%] max-w-[1400px] mx-auto py-10">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Shopping Cart
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Review your items before proceeding to checkout.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Cart Items */}
        <div className="w-full lg:w-[68%]">
          <div className="border border-gray-200 rounded-sm bg-white">
            {/* Cart Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Your Items
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {cartData.length} items in your cart
                </p>
              </div>

              <button className="text-sm text-gray-500 hover:text-black transition">
                Clear Cart
              </button>
            </div>

            {cartData.map((item, index) => {
              const product = item.productId;

              return (
                <div
                  key={index}
                  className="flex gap-5 p-6 border-b border-gray-200"
                >
                  {/* Product Image */}
                  <div className="w-[120px] h-[150px] bg-gray-100 overflow-hidden shrink-0">
                    <img
                      src={product?.images[0]?.url}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <h3 className="text-base font-medium text-gray-900">
                            {product.name}
                          </h3>
                        </div>

                        <button className="text-gray-400 hover:text-black transition">
                          ×
                        </button>
                      </div>

                      <div className="flex gap-6 mt-4 text-sm text-gray-500">
                        <p>
                          Size:{" "}
                          <span className="text-gray-900">{item.size}</span>
                        </p>

                        <p>
                          Color:{" "}
                          <span className="text-gray-900">{item?.color}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-5">
                      {/* Quantity */}
                      <div className="flex items-center border border-gray-300">
                        <button
                          onClick={() => handleQuantity(item, "dec")}
                          className="w-9 h-9 text-gray-600 hover:bg-gray-100"
                        >
                          −
                        </button>

                        <span className="w-10 text-center text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => handleQuantity(item, "inc")}
                          className="w-9 h-9 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-base font-medium text-gray-900">
                          ${product.price}
                        </p>

                        <p className="text-xs text-gray-400 line-through">
                          ${product.salePrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continue Shopping */}
          <button className="mt-5 text-sm text-gray-600 hover:text-black transition">
            ← Continue Shopping
          </button>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full lg:w-[32%]">
          <div className="border border-gray-200 rounded-sm p-6 sticky top-6">
            <h2 className="text-lg font-medium text-gray-900 pb-5 border-b border-gray-200">
              Order Summary
            </h2>

            <div className="space-y-4 py-5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Main Price</span>
                <span className="text-gray-900">${mainPrice}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Sale Price</span>
                <span className="text-gray-900">${sellingPrice}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Discount</span>
                <span className="text-gray-900">-${discount}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-900">
                  Total
                </span>

                <span className="text-xl font-semibold text-gray-900">
                  ${total}
                </span>
              </div>
            </div>

            {/* Coupon */}
            <div className="flex mt-6">
              <input
                type="text"
                placeholder="Coupon code"
                className="w-full border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
              />

              <button className="px-5 bg-black text-white text-sm hover:bg-gray-800 transition">
                Apply
              </button>
            </div>

            {/* Checkout */}
            <button className="w-full mt-5 py-4 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              Secure checkout · Easy returns · Fast delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
