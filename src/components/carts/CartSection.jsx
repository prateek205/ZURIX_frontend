import React, { useState } from "react";
import {
  useGetAllCartsQuery,
  useUpdateCartMutation,
  useDeleteCartItemMutation,
} from "../../redux/cartApi";
import { useNavigate } from "react-router-dom";
import { useApplyCouponCodeMutation } from "../../redux/couponApi";
import { toast } from "react-toastify";

const CartSection = () => {
  const navigate = useNavigate();

  // GET CART API
  const { data, isLoading, isError, refetch } = useGetAllCartsQuery();

  // UPDATE CART API
  const [updateCart, { isLoading: isUpdatingCart }] = useUpdateCartMutation();

  // DELETE CART ITEM API
  const [deleteCartItem, { isLoading: isDeletingCartItem }] =
    useDeleteCartItemMutation();

  // APPLY COUPON API
  const [applyCoupon, { isLoading: couponLoading }] =
    useApplyCouponCodeMutation();

  // STATES
  const [couponCode, setCouponCode] = useState("");
  const [couponData, setCouponData] = useState(null);
  const [updatingItemId, setUpdatingItemId] = useState(null);
  const [deletingItemId, setDeletingItemId] = useState(null);

  // CART ITEMS
  const cartData = Array.isArray(data?.data?.items) ? data.data.items : [];

  // =========================================
  // UPDATE QUANTITY
  // =========================================
  const handleQuantity = async (item, action) => {
    if (!item?._id) {
      toast.error("Cart item ID is missing.");
      return;
    }

    const currentQuantity = Number(item.quantity) || 1;

    const newQuantity =
      action === "inc" ? currentQuantity + 1 : currentQuantity - 1;

    // Quantity must not be below 1
    if (newQuantity < 1) {
      return;
    }

    // Check available stock when product stock is provided
    const stock = Number(item?.productId?.stock);

    if (action === "inc" && Number.isFinite(stock) && newQuantity > stock) {
      toast.info("Available stock limit reached.");
      return;
    }

    try {
      setUpdatingItemId(item._id);

      const response = await updateCart({
        itemId: item._id,
        quantity: newQuantity,
      }).unwrap();

      toast.success(response?.message || "Cart quantity updated.");
    } catch (error) {
      console.error("UPDATE_CART_ERROR:", error);

      toast.error(
        error?.data?.message ||
          error?.error ||
          "Failed to update cart quantity.",
      );
    } finally {
      setUpdatingItemId(null);
    }
  };

  // =========================================
  // DELETE CART ITEM
  // =========================================
  const handleDeleteCartItem = async (itemId) => {
    if (!itemId) {
      toast.error("Cart item ID is missing.");
      return;
    }

    try {
      setDeletingItemId(itemId);

      const response = await deleteCartItem(itemId).unwrap();

      toast.success(response?.message || "Product removed from cart.");

      // Clear coupon after cart changes to avoid stale discount
      setCouponData(null);
      setCouponCode("");
    } catch (error) {
      console.error("DELETE_CART_ERROR:", error);

      toast.error(
        error?.data?.message ||
          error?.error ||
          "Failed to remove product from cart.",
      );
    } finally {
      setDeletingItemId(null);
    }
  };

  // =========================================
  // APPLY COUPON
  // =========================================
  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code.");
      return;
    }

    if (cartData.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    try {
      const response = await applyCoupon({
        code: couponCode.trim().toUpperCase(),
        subtotal: sellingPrice,
      }).unwrap();

      console.log("COUPON_DATA:", response);

      setCouponData(response?.data || null);

      toast.success(response?.message || "Coupon applied successfully!");
    } catch (error) {
      console.error("COUPON_APPLY_ERROR:", error);

      setCouponData(null);

      toast.error(
        error?.data?.message || error?.error || "Unable to apply coupon.",
      );
    }
  };

  // =========================================
  // COUPON INPUT CHANGE
  // =========================================
  const handleChange = (e) => {
    setCouponCode(e.target.value);
  };

  // =========================================
  // CHECKOUT
  // =========================================
  const handleCheckout = () => {
    if (cartData.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    navigate("/order", {
      state: {
        couponData,
      },
    });
  };

  // =========================================
  // CONTINUE SHOPPING
  // =========================================
  const handleContinueShopping = () => {
    navigate("/products");
  };

  // =========================================
  // ORIGINAL PRICE
  // =========================================
  const mainPrice = cartData.reduce((total, item) => {
    const product = item?.productId;
    const originalPrice = Number(product?.price) || 0;

    return total + originalPrice;
  }, 0);

  // =========================================
  // SELLING PRICE
  // =========================================
  const sellingPrice = cartData.reduce((total, item) => {
    const product = item?.productId;

    const price =
      product?.salePrice != null
        ? Number(product.salePrice)
        : Number(product?.price) || 0;

    const quantity = Number(item?.quantity) || 0;

    return total + price * quantity;
  }, 0);

  // =========================================
  // DISCOUNT
  // =========================================
  const discount = Math.max(0, mainPrice - sellingPrice);

  // =========================================
  // SHIPPING
  // =========================================
  const shipping = 0;

  // =========================================
  // COUPON DISCOUNT
  // =========================================
  const couponDiscount = Number(couponData?.discountAmount) || 0;

  // =========================================
  // FINAL TOTAL
  // =========================================
  const total = Math.max(0, sellingPrice - couponDiscount + shipping);

  // =========================================
  // LOADING STATE
  // =========================================
  if (isLoading) {
    return (
      <section className="w-[90%] max-w-[1400px] mx-auto py-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-gray-500">Loading your cart...</p>
        </div>
      </section>
    );
  }

  // =========================================
  // ERROR STATE
  // =========================================
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
            type="button"
            onClick={() => refetch()}
            className="mt-6 px-6 py-3 border border-black text-black text-sm hover:bg-gray-100 transition"
          >
            Try Again
          </button>

          <button
            type="button"
            onClick={handleContinueShopping}
            className="mt-3 px-6 py-3 bg-black text-white text-sm hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  // =========================================
  // EMPTY CART
  // =========================================
  if (cartData.length === 0) {
    return (
      <section className="w-[90%] max-w-[1400px] mx-auto py-10">
        <div className="min-h-[600px] flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <span className="text-4xl">🛒</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-sm text-gray-500 max-w-md">
            Looks like you haven't added anything to your cart yet. Explore our
            collection and find something you love.
          </p>

          <button
            type="button"
            onClick={handleContinueShopping}
            className="mt-8 px-8 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-[90%] max-w-[1400px] mx-auto py-10">
      {/* PAGE HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Shopping Cart
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Review your items before proceeding to checkout.
        </p>
      </div>

      {/* MAIN CART LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE - CART ITEMS */}
        <div className="w-full lg:w-[68%]">
          <div className="border border-gray-200 rounded-sm bg-white">
            {/* CART HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Your Items
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {cartData.length} items in your cart
                </p>
              </div>
            </div>

            {/* CART ITEMS */}
            {cartData.map((item) => {
              const product = item?.productId;

              const itemPrice =
                product?.salePrice != null
                  ? Number(product.salePrice)
                  : Number(product?.price) || 0;

              const isUpdating = updatingItemId === item?._id;
              const isDeleting = deletingItemId === item?._id;

              return (
                <div
                  key={item?._id}
                  className="flex flex-col sm:flex-row gap-5 p-6 border-b border-gray-200"
                >
                  {/* PRODUCT IMAGE */}
                  <div className="w-[120px] h-[150px] bg-gray-100 overflow-hidden shrink-0">
                    <img
                      src={
                        typeof product?.images?.[0] === "string"
                          ? product.images[0]
                          : product?.images?.[0]?.url
                      }
                      alt={product?.name || "Product"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <h3 className="text-base font-medium text-gray-900">
                            {product?.name || "Product unavailable"}
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            ₹{itemPrice.toFixed(2)} each
                          </p>
                        </div>

                        {/* REMOVE BUTTON */}
                        <button
                          type="button"
                          onClick={() => handleDeleteCartItem(item?._id)}
                          disabled={isDeleting}
                          aria-label={`Remove ${product?.name || "product"} from cart`}
                          title="Remove item"
                          className="text-gray-400 hover:text-red-600 transition text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isDeleting ? "..." : "×"}
                        </button>
                      </div>

                      {/* SIZE AND COLOR */}
                      <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-500">
                        <p>
                          Size:{" "}
                          <span className="text-gray-900">
                            {item?.size || "N/A"}
                          </span>
                        </p>

                        <p>
                          Color:{" "}
                          <span className="text-gray-900">
                            {item?.color || "N/A"}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* QUANTITY AND PRICE */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
                      {/* QUANTITY CONTROL */}
                      <div className="flex items-center border border-gray-300">
                        {/* DECREASE */}
                        <button
                          type="button"
                          onClick={() => handleQuantity(item, "dec")}
                          disabled={item?.quantity <= 1 || isUpdating}
                          aria-label="Decrease quantity"
                          className="w-9 h-9 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          −
                        </button>

                        {/* QUANTITY */}
                        <span className="w-10 text-center text-sm">
                          {isUpdating ? "..." : item?.quantity}
                        </span>

                        {/* INCREASE */}
                        <button
                          type="button"
                          onClick={() => handleQuantity(item, "inc")}
                          disabled={isUpdating}
                          aria-label="Increase quantity"
                          className="w-9 h-9 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>

                      {/* ITEM TOTAL */}
                      <div className="text-right">
                        <p className="text-xl font-medium text-gray-900">
                          ₹
                          {(itemPrice * (Number(item?.quantity) || 0)).toFixed(
                            2,
                          )}
                        </p>

                        {product?.salePrice != null &&
                          Number(product.salePrice) < Number(product.price) && (
                            <p className="text-sm text-gray-500 line-through">
                              ₹{Number(product.price).toFixed(2)}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CONTINUE SHOPPING */}
          <button
            type="button"
            onClick={handleContinueShopping}
            className="mt-5 text-sm text-gray-600 hover:text-black transition"
          >
            ← Continue Shopping
          </button>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="w-full lg:w-[32%]">
          <div className="border border-gray-200 rounded-sm p-6 sticky top-6">
            {/* SUMMARY HEADING */}
            <h2 className="text-lg font-medium text-gray-900 pb-5 border-b border-gray-200">
              Order Summary
            </h2>

            {/* PRICE DETAILS */}
            <div className="space-y-4 py-5 text-sm">
              {/* ORIGINAL PRICE */}
              <div className="flex justify-between text-gray-600">
                <span className="text-black font-bold">Original Price</span>

                <span className="text-gray-900 font-bold">
                  ₹{mainPrice.toFixed(2)}
                </span>
              </div>

              {/* SELLING PRICE */}
              <div className="flex justify-between text-gray-600">
                <span>Selling Price</span>

                <span className="text-gray-900">
                  ₹{sellingPrice.toFixed(2)}
                </span>
              </div>

              {/* PRODUCT DISCOUNT */}
              <div className="flex justify-between text-gray-600">
                <span>Discount</span>

                <span className="text-gray-900">-₹{discount.toFixed(2)}</span>
              </div>

              {/* COUPON DISCOUNT */}
              {couponData && (
                <div className="flex justify-between text-gray-600">
                  <span>Coupon Discount</span>

                  <span className="text-gray-900">
                    -₹{couponDiscount.toFixed(2)}
                  </span>
                </div>
              )}

              {/* SHIPPING */}
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>

                <span className="text-green-600">
                  {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
                </span>
              </div>
            </div>

            {/* TOTAL */}
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

            {/* COUPON */}
            <div className="flex mt-6">
              <input
                type="text"
                placeholder="Coupon code"
                onChange={handleChange}
                value={couponCode}
                name="couponCode"
                className="w-full min-w-0 border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
              />

              <button
                type="button"
                onClick={handleApplyCoupon}
                disabled={couponLoading}
                className="px-5 bg-black text-white text-sm hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {couponLoading ? "Applying..." : "Apply"}
              </button>
            </div>

            {/* REMOVE COUPON */}
            {couponData && (
              <button
                type="button"
                onClick={() => {
                  setCouponData(null);
                  setCouponCode("");
                  toast.info("Coupon removed.");
                }}
                className="mt-2 text-xs text-gray-500 underline hover:text-black"
              >
                Remove coupon
              </button>
            )}

            {/* CHECKOUT BUTTON */}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={isUpdatingCart || isDeletingCartItem}
              className="w-full mt-5 py-4 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Proceed to Checkout
            </button>

            {/* FOOTER */}
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
