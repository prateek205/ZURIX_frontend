import React, { useState } from "react";
import {
  useGetAllCartsQuery,
  useUpdateCartMutation,
} from "../../redux/cartApi";
import { useNavigate } from "react-router-dom";
import { useApplyCouponCodeMutation } from "../../redux/couponApi";
import { toast } from "react-toastify";

const CartSection = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetAllCartsQuery();
  const [updateCart] = useUpdateCartMutation();

  const [applyCoupon, { isLoading: couponLoading }] =
    useApplyCouponCodeMutation();

  const [couponCode, setCouponCode] = useState("");
  const [couponData, setCouponData] = useState(null);
  const [couponError, setCouponError] = useState("");

  // Loading state
  if (isLoading) {
    return (
      <section className="w-[90%] max-w-[1400px] mx-auto py-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-gray-500">Loading...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (isError) {
    return (
      <section className="w-[90%] max-w-[1400px] mx-auto py-20">
        <div className="flex flex-col justify-center items-center min-h-[400px] text-center">
          <h2 className="text-xl font-medium text-gray-900">
            Unable to fetch cart
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Something went wrong while loading your cart.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-6 px-6 py-3 bg-black text-white text-sm hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  // Get cart items
  const cartData = data?.data?.items || [];

  console.log("CART_ITEM:", cartData);

  // ---------------------------------------
  // EMPTY CART
  // ---------------------------------------

  if (cartData.length === 0) {
    return (
      <section className="w-[90%] max-w-[1400px] mx-auto py-10">
        <div className="min-h-[600px] flex flex-col items-center justify-center text-center">
          {/* Empty Cart Icon */}
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <span className="text-4xl">🛒</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Your Cart is Empty
          </h1>

          {/* Description */}
          <p className="mt-3 text-sm text-gray-500 max-w-md">
            Looks like you haven't added anything to your cart yet. Explore our
            collection and find something you love.
          </p>

          {/* Continue Shopping */}
          <button
            onClick={() => navigate("/products")}
            className="mt-8 px-8 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  // ---------------------------------------
  // QUANTITY HANDLER
  // ---------------------------------------

  const handleQuantity = async (item, action) => {
    let newQty = item.quantity;

    if (action === "inc") {
      newQty = item.quantity + 1;
    }

    if (action === "dec") {
      newQty = item.quantity - 1;
    }

    // Don't allow quantity below 1
    if (newQty < 1) {
      return;
    }

    try {
      await updateCart({
        itemId: item._id,
        quantity: newQty,
      }).unwrap();
    } catch (error) {
      console.log("UPDATE_ERROR:", error);
    }
  };

  // ---------------------------------------
  // CHECKOUT
  // ---------------------------------------

  const handleCheckout = () => {
    navigate("/order", {
      state: {
        couponData,
      },
    });
  };

  // ---------------------------------------
  // CONTINUE SHOPPING
  // ---------------------------------------

  const handleContinueShopping = () => {
    navigate("/products");
  };

  // ---------------------------------------
  // MAIN PRICE
  // ---------------------------------------

  const mainPrice = cartData.reduce((total, item) => {
    const product = item?.productId;

    const originalPrice = product?.price || 0;

    return total + Number(originalPrice);
  }, 0);

  // ---------------------------------------
  // SELLING PRICE
  // ---------------------------------------

  const sellingPrice = cartData.reduce((total, item) => {
    const product = item?.productId;

    const salePrice = product?.salePrice || 0;
    const quantity = item?.quantity || 0;

    return total + Number(salePrice) * Number(quantity);
  }, 0);

  // ---------------------------------------
  // DISCOUNT
  // ---------------------------------------

  const discount = mainPrice - sellingPrice;

  // ---------------------------------------
  // SHIPPING
  // ---------------------------------------

  const shipping = 0;

  // ---------------------------------------
  // TOTAL
  // ---------------------------------------

  const couponDiscount = couponData?.discountAmount || 0;

  const total = sellingPrice - couponDiscount + shipping;

  // ---------------------------------------
  // COUPON CODE
  // ---------------------------------------

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error("please enter the coupen code");
      return;
    }

    try {
      const response = await applyCoupon({
        code: couponCode.trim(),
        subtotal: sellingPrice,
      }).unwrap();

      console.log("COUPON_DATA:", response);

      setCouponData(response.data);
      toast.success("Coupon Added Successfully!!!");
    } catch (error) {
      console.log("COUPON_APPLY_ERROR:", error);
      toast.error(error?.data?.message);
    }
  };

  const handleChange = (e) => {
    setCouponCode(e.target.value);
  };

  return (
    <section className="w-[90%] max-w-[1400px] mx-auto py-10">
      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Shopping Cart
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Review your items before proceeding to checkout.
        </p>
      </div>

      {/* =========================================
          MAIN CART LAYOUT
      ========================================= */}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* =========================================
            LEFT SIDE - CART ITEMS
        ========================================= */}

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

            {/* =====================================
                CART ITEMS
            ===================================== */}

            {cartData.map((item) => {
              const product = item?.productId;

              return (
                <div
                  key={item?._id}
                  className="flex gap-5 p-6 border-b border-gray-200"
                >
                  {/* Product Image */}

                  <div className="w-[120px] h-[150px] bg-gray-100 overflow-hidden shrink-0">
                    <img
                      src={product?.images?.[0]?.url}
                      alt={product?.name || "Product"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}

                  <div className="flex-1 flex flex-col justify-between">
                    {/* Product Name */}

                    <div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <h3 className="text-base font-medium text-gray-900">
                            {product?.name}
                          </h3>
                        </div>

                        {/* Remove Button */}

                        <button className="text-gray-400 hover:text-black transition text-xl">
                          ×
                        </button>
                      </div>

                      {/* Size / Color */}

                      <div className="flex gap-6 mt-4 text-sm text-gray-500">
                        <p>
                          Size:{" "}
                          <span className="text-gray-900">{item?.size}</span>
                        </p>

                        <p>
                          Color:{" "}
                          <span className="text-gray-900">{item?.color}</span>
                        </p>
                      </div>
                    </div>

                    {/* Quantity + Price */}

                    <div className="flex items-center justify-between mt-5">
                      {/* Quantity */}

                      <div className="flex items-center border border-gray-300">
                        {/* Decrease */}

                        <button
                          onClick={() => handleQuantity(item, "dec")}
                          disabled={item?.quantity <= 1}
                          className="w-9 h-9 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          −
                        </button>

                        {/* Quantity */}

                        <span className="w-10 text-center text-sm">
                          {item?.quantity}
                        </span>

                        {/* Increase */}

                        <button
                          onClick={() => handleQuantity(item, "inc")}
                          className="w-9 h-9 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}

                      <div className="text-right flex items-center gap-2">
                        <p className="text-xl font-medium text-gray-900">
                          ₹{product?.salePrice}
                        </p>

                        <p className="text-md text-gray-500 line-through">
                          ₹{product?.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continue Shopping */}

          <button
            onClick={handleContinueShopping}
            className="mt-5 text-sm text-gray-600 hover:text-black transition"
          >
            ← Continue Shopping
          </button>
        </div>

        {/* =========================================
            RIGHT SIDE - ORDER SUMMARY
        ========================================= */}

        <div className="w-full lg:w-[32%]">
          <div className="border border-gray-200 rounded-sm p-6 sticky top-6">
            {/* Summary Heading */}

            <h2 className="text-lg font-medium text-gray-900 pb-5 border-b border-gray-200">
              Order Summary
            </h2>

            {/* Price Details */}

            <div className="space-y-4 py-5 text-sm">
              {/* Main Price */}

              <div className="flex justify-between text-gray-600">
                <span className="text-black font-bold">Original Price</span>

                <span className="text-gray-900 font-bold">
                  ₹{mainPrice.toFixed(2)}
                </span>
              </div>

              {/* Sale Price */}

              <div className="flex justify-between text-gray-600">
                <span>Salling Price</span>

                <span className="text-gray-900">
                  ₹{sellingPrice.toFixed(2)}
                </span>
              </div>

              {/* Discount */}

              <div className="flex justify-between text-gray-600">
                <span>Discount</span>

                <span className="text-gray-900">-₹{discount.toFixed(2)}</span>
              </div>

              {/* Coupon Discount */}
              {couponCode && (
                <div className="flex justify-between text-gray-600">
                  <span>Coupon Discount</span>

                  <span className="text-gray-900">
                    -₹{couponDiscount.toFixed(2)}
                  </span>
                </div>
              )}

              {/* Shipping */}

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>

                <span className="text-green-600">Free</span>
              </div>
            </div>

            {/* Total */}

            <div className="border-t border-gray-200 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-900">
                  Total
                </span>

                <span className="text-xl font-semibold text-gray-900">
                  ₹{total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* =====================================
                COUPON
            ===================================== */}

            <div className="flex mt-6">
              <input
                type="text"
                placeholder="Coupon code"
                onChange={handleChange}
                value={couponCode}
                name="couponCode"
                className="w-full border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
              />

              <button
                onClick={handleApplyCoupon}
                disabled={couponLoading}
                className="px-5 bg-black text-white text-sm hover:bg-gray-800 transition"
              >
                {couponLoading ? "Applying code..." : "Applied"}
              </button>
            </div>

            {/* =====================================
                CHECKOUT BUTTON
            ===================================== */}

            <button
              onClick={handleCheckout}
              className="w-full mt-5 py-4 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </button>

            {/* Footer Text */}

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
