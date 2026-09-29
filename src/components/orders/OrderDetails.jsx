import React from "react";
import { FaTimes, FaBoxOpen } from "react-icons/fa";

const OrderDetails = ({ order, onClose }) => {
  if (!order) return null;

  const items = order?.items || [];

  // Calculate subtotal from order items
  const subtotal = items.reduce((total, item) => {
    const product = item?.productId;

    const price = Number(product?.salePrice) || Number(product?.price) || 0;

    const quantity = Number(item?.quantity) || 0;

    return total + price * quantity;
  }, 0);

  // Use backend total if available
  const totalAmount = Number(order?.totalAmount) || 0;

  // If you have shippingAmount in backend, it will use it
  const shipping = Number(order?.shippingAmount) || 0;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5 sm:px-7">
          <div>
            <h2 className="text-lg font-semibold uppercase tracking-[0.12em]">
              Order Details
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Order ID: #{order?._id}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center border border-gray-300 text-gray-600 transition hover:border-black hover:bg-black hover:text-white"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* ================= ORDER INFO ================= */}
        <div className="grid grid-cols-2 gap-5 border-b border-gray-200 px-5 py-5 sm:grid-cols-4 sm:px-7">
          {/* Order Date */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
              Order Date
            </p>

            <p className="mt-1 text-xs font-medium text-black">
              {order?.createdAt
                ? new Date(order.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : "-"}
            </p>
          </div>

          {/* Status */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
              Status
            </p>

            <p className="mt-1 text-xs font-medium uppercase text-black">
              {order?.orderStatus || "PENDING"}
            </p>
          </div>

          {/* Payment */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
              Payment
            </p>

            <p className="mt-1 text-xs font-medium uppercase text-black">
              {order?.paymentMethod || "-"}
            </p>
          </div>

          {/* Payment Status */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
              Payment Status
            </p>

            <p className="mt-1 text-xs font-medium uppercase text-black">
              {order?.paymentStatus || "-"}
            </p>
          </div>
        </div>

        {/* ================= SCROLLABLE CONTENT ================= */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {/* Products Heading */}
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">
              Ordered Products
            </h3>

            <span className="text-xs text-gray-500">
              {items.length} {items.length === 1 ? "Item" : "Items"}
            </span>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="space-y-4">
            {items.length > 0 ? (
              items.map((item, index) => {
                const product = item?.productId;

                const price =
                  Number(product?.salePrice) || Number(product?.price) || 0;

                const quantity = Number(item?.quantity) || 1;

                const itemTotal = price * quantity;

                return (
                  <div
                    key={item?._id || index}
                    className="flex gap-4 border border-gray-200 p-4"
                  >
                    {/* Product Image */}
                    <div className="h-24 w-20 shrink-0 overflow-hidden bg-gray-100 sm:h-28 sm:w-24">
                      {product?.images?.[0]?.url ? (
                        <img
                          src={product.images[0].url}
                          alt={product?.name || "Product"}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <FaBoxOpen className="text-xl text-gray-300" />
                        </div>
                      )}
                    </div>

                    {/* Product Information */}
                    <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-center">
                      <div>
                        {/* Category */}
                        <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                          {product?.category?.name || "Product"}
                        </p>

                        {/* Product Name */}
                        <h4 className="mt-1 text-sm font-medium uppercase tracking-wide text-black">
                          {product?.name || "Product"}
                        </h4>

                        {/* Product Options */}
                        <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
                          <span>
                            Qty:{" "}
                            <span className="font-medium text-black">
                              {quantity}
                            </span>
                          </span>

                          {item?.size && (
                            <span>
                              Size:{" "}
                              <span className="font-medium text-black">
                                {item.size}
                              </span>
                            </span>
                          )}

                          {item?.color && (
                            <span>
                              Color:{" "}
                              <span className="font-medium text-black">
                                {item.color}
                              </span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Product Price */}
                      <div className="mt-4 text-left sm:mt-0 sm:text-right">
                        <p className="text-xs text-gray-500">
                          ₹{price.toLocaleString("en-IN")} × {quantity}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-black">
                          ₹{itemTotal.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-10 text-center">
                <FaBoxOpen className="mx-auto text-3xl text-gray-300" />

                <p className="mt-3 text-sm text-gray-500">
                  No products found in this order.
                </p>
              </div>
            )}
          </div>

          {/* ================= PRICE SUMMARY ================= */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="ml-auto w-full max-w-md">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em]">
                Price Summary
              </h3>

              <div className="space-y-3 text-sm">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Subtotal</span>

                  <span className="font-medium text-black">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Shipping */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Shipping</span>

                  <span className="font-medium text-black">
                    {shipping === 0
                      ? "Free"
                      : `₹${shipping.toLocaleString("en-IN")}`}
                  </span>
                </div>

                {/* Discount */}
                {order?.discount > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Discount</span>

                    <span className="font-medium text-black">
                      -₹
                      {Number(order.discount).toLocaleString("en-IN")}
                    </span>
                  </div>
                )}

                {/* Total */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                  <span className="font-semibold uppercase tracking-wide">
                    Total
                  </span>

                  <span className="text-lg font-semibold">
                    ₹{totalAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="flex justify-end border-t border-gray-200 px-5 py-4 sm:px-7">
          <button
            onClick={onClose}
            className="border border-black bg-black px-7 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
