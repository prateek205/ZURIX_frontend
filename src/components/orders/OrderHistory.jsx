import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBoxOpen,
  FaChevronRight,
  FaClock,
  FaCheck,
  FaTruck,
  FaTimes,
} from "react-icons/fa";
import { useGetAllOrderQuery } from "../../redux/orderApi";
import OrderDetails from "./OrderDetails";

const OrderHistory = () => {
  const navigate = useNavigate();

  // Selected order for popup modal
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { data, isLoading, isError, error } = useGetAllOrderQuery();

  const orders = data?.data || [];

  // Loading
  if (isLoading) {
    return (
      <section className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 border-b border-gray-200 pb-6">
            <div className="h-8 w-48 animate-pulse bg-gray-100" />
            <div className="mt-3 h-4 w-32 animate-pulse bg-gray-100" />
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse border border-gray-200 p-6"
              >
                <div className="h-5 w-40 bg-gray-100" />
                <div className="mt-6 h-20 w-full bg-gray-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error
  if (isError) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="text-center">
          <FaBoxOpen className="mx-auto text-4xl text-gray-300" />

          <h2 className="mt-5 text-lg font-medium uppercase tracking-wider">
            Unable to Load Orders
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {error?.data?.message || "Something went wrong."}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-black px-7 py-3 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-gray-800"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  // Empty Orders
  if (!orders.length) {
    return (
      <section className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-black"
            >
              Home
            </span>

            <span>/</span>

            <span className="text-black">Orders</span>
          </div>

          {/* Header */}
          <div className="border-b border-gray-200 pb-6">
            <h1 className="text-2xl font-medium uppercase tracking-[0.15em] text-black sm:text-3xl">
              My Orders
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Track and manage your orders
            </p>
          </div>

          {/* Empty State */}
          <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-50">
              <FaBoxOpen className="text-2xl text-gray-400" />
            </div>

            <h2 className="mt-6 text-lg font-medium uppercase tracking-[0.12em]">
              No Orders Yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              You haven't placed any orders yet. Explore our collection and find
              something you love.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="mt-7 bg-black px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-gray-800"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-black"
            >
              Home
            </span>

            <span>/</span>

            <span className="text-black">Orders</span>
          </div>

          {/* Header */}
          <div className="mb-10 flex items-end justify-between border-b border-gray-200 pb-6">
            <div>
              <h1 className="text-2xl font-medium uppercase tracking-[0.15em] text-black sm:text-3xl">
                My Orders
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                {orders.length} {orders.length === 1 ? "order" : "orders"}{" "}
                placed
              </p>
            </div>

            <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-gray-200 sm:flex">
              <FaBoxOpen className="text-sm" />
            </div>
          </div>

          {/* Orders */}
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="border border-gray-200 bg-white transition hover:border-gray-300"
              >
                {/* Order Header */}
                <div className="flex flex-col gap-4 border-b border-gray-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
                      Order ID
                    </p>

                    <p className="mt-1 text-xs font-medium text-black">
                      #{order._id}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
                      Order Date
                    </p>

                    <p className="mt-1 text-xs text-black">
                      {new Date(order.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2">
                    <OrderStatus status={order.orderStatus} />
                  </div>
                </div>

                {/* Order Items */}
                <div className="divide-y divide-gray-100">
                  {order.items?.map((item) => {
                    const product = item.productId;

                    return (
                      <div
                        key={item._id}
                        className="flex gap-4 px-5 py-5 sm:px-6"
                      >
                        {/* Product Image */}
                        <div className="h-24 w-20 shrink-0 overflow-hidden bg-gray-100 sm:h-28 sm:w-24">
                          {product?.images?.[0] ? (
                            <img
                              src={product.images[0].url}
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <FaBoxOpen className="text-gray-300" />
                            </div>
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                              {product?.category?.name || "Product"}
                            </p>

                            <h3 className="mt-1 text-sm font-medium uppercase tracking-wide text-black">
                              {product?.name || "Product"}
                            </h3>

                            <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500">
                              <span>
                                Qty:{" "}
                                <span className="text-black">
                                  {item.quantity}
                                </span>
                              </span>

                              {item.size && (
                                <span>
                                  Size:{" "}
                                  <span className="text-black">
                                    {item.size}
                                  </span>
                                </span>
                              )}

                              {item.color && (
                                <span>
                                  Color:{" "}
                                  <span className="text-black">
                                    {item.color}
                                  </span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Order Footer */}
                <div className="flex flex-col gap-5 border-t border-gray-200 px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                        Payment
                      </p>

                      <p className="mt-1 text-xs font-medium uppercase">
                        {order.paymentMethod}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                        Payment Status
                      </p>

                      <p className="mt-1 text-xs font-medium uppercase">
                        {order.paymentStatus}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                        Total
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        ₹
                        {Number(order.totalAmount || 0).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  {/* View Order */}
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="flex items-center justify-center gap-3 border border-black px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-black transition hover:bg-black hover:text-white"
                  >
                    View Order
                    <FaChevronRight className="text-[10px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </>
  );
};

const OrderStatus = ({ status }) => {
  const statusConfig = {
    PENDING: {
      icon: <FaClock />,
      text: "Pending",
    },

    PROCESSING: {
      icon: <FaClock />,
      text: "Processing",
    },

    CONFIRM: {
      icon: <FaCheck />,
      text: "Confirmed",
    },

    SHIPPED: {
      icon: <FaTruck />,
      text: "Shipped",
    },

    DELIVERED: {
      icon: <FaCheck />,
      text: "Delivered",
    },

    CANCELLED: {
      icon: <FaTimes />,
      text: "Cancelled",
    },
  };

  const currentStatus = statusConfig[status] || {
    icon: <FaClock />,
    text: status || "Pending",
  };

  return (
    <span className="flex items-center gap-2 bg-gray-50 px-3 py-2 text-[10px] font-medium uppercase tracking-wider text-gray-700">
      <span className="text-[9px]">{currentStatus.icon}</span>
      {currentStatus.text}
    </span>
  );
};

export default OrderHistory;
