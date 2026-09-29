import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaTimes, FaBoxOpen } from "react-icons/fa";
import { useGetOrderByIdQuery } from "../../redux/orderApi";

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetOrderByIdQuery(id);

  const order = data?.data;

  // Close popup
  const handleClose = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <section className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
        <div className="w-full max-w-3xl bg-white p-10 text-center">
          <p className="text-sm text-gray-500">Loading order details...</p>
        </div>
      </section>
    );
  }

  if (isError || !order) {
    return (
      <section className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
        <div className="relative w-full max-w-md bg-white p-8 text-center">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-gray-500 transition hover:text-black"
          >
            <FaTimes />
          </button>

          <FaBoxOpen className="mx-auto mb-4 text-4xl text-gray-400" />

          <h2 className="mb-2 text-lg font-semibold">Order Not Found</h2>

          <p className="text-sm text-gray-500">
            Unable to fetch the order details.
          </p>
        </div>
      </section>
    );
  }

  const items = order?.items || [];

  const subtotal =
    order?.subtotal ??
    items.reduce((total, item) => {
      const price = item?.productId?.salePrice || item?.productId?.price || 0;

      return total + Number(price) * Number(item?.quantity || 0);
    }, 0);

  const shipping = order?.shipping ?? 0;

  const total = order?.finalAmount ?? subtotal + Number(shipping);

  return (
    <section
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <div>
            <h1 className="text-lg font-semibold uppercase tracking-wide">
              Order Details
            </h1>

            <p className="mt-1 text-xs text-gray-500">Order ID: {order?._id}</p>
          </div>

          <button
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center border border-gray-300 text-gray-600 transition hover:border-black hover:bg-black hover:text-white"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Order Information */}
        <div className="grid grid-cols-2 gap-4 border-b border-gray-200 px-6 py-5 sm:grid-cols-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">
              Order Date
            </p>

            <p className="mt-1 text-sm font-medium">
              {order?.createdAt
                ? new Date(order.createdAt).toLocaleDateString()
                : "-"}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">
              Status
            </p>

            <p className="mt-1 text-sm font-medium capitalize">
              {order?.status || "Processing"}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">
              Items
            </p>

            <p className="mt-1 text-sm font-medium">{items.length}</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">
              Total
            </p>

            <p className="mt-1 text-sm font-semibold">
              ₹{Number(total).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em]">
            Products
          </h2>

          <div className="space-y-4">
            {items.map((item, index) => {
              const product = item?.productId;

              const price = product?.salePrice || product?.price || 0;

              const quantity = item?.quantity || 1;

              const itemTotal = Number(price) * Number(quantity);

              return (
                <div
                  key={item?._id || index}
                  className="flex gap-4 border border-gray-200 p-4"
                >
                  {/* Product Image */}
                  <div className="h-24 w-20 shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={product?.images?.[0]}
                      alt={product?.name || "Product"}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-sm font-medium">
                        {product?.name || "Product"}
                      </h3>

                      <div className="mt-2 space-y-1 text-xs text-gray-500">
                        <p>
                          Quantity:{" "}
                          <span className="text-black">{quantity}</span>
                        </p>

                        {item?.size && (
                          <p>
                            Size:{" "}
                            <span className="text-black">{item.size}</span>
                          </p>
                        )}

                        {item?.color && (
                          <p>
                            Color:{" "}
                            <span className="text-black">{item.color}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-3 text-right sm:mt-0">
                      <p className="text-xs text-gray-500">
                        ₹{Number(price).toLocaleString()} × {quantity}
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        ₹{Number(itemTotal).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Price Summary */}
          <div className="mt-8 ml-auto w-full max-w-md border-t border-gray-200 pt-5">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em]">
              Price Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>

                <span>₹{Number(subtotal).toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>

                <span>
                  {shipping === 0
                    ? "Free"
                    : `₹${Number(shipping).toLocaleString()}`}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>

                  <span className="text-base font-semibold">
                    ₹{Number(total).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-gray-200 px-6 py-4">
          <button
            onClick={handleClose}
            className="border border-black bg-black px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
