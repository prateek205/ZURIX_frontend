import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const OrderSuccess = () => {
  const location = useLocation();

  const order = location.state?.order;

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-10">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <FaCheck className="text-white text-xl" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-zurixFont">
            Order Confirmed!
          </h1>

          <p className="text-gray-500 mt-3 font-zurixFont">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>
        </div>

        {/* Order Details */}
        {order && (
          <div className="mt-8 border border-gray-200 rounded-lg p-5">
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-semibold mt-1 break-all">{order._id}</p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">Order Status</p>
                <p className="font-semibold text-green-600 mt-1">
                  {order.orderStatus}
                </p>
              </div>
            </div>

            {/* Payment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5 border-b">
              <div>
                <p className="text-sm text-gray-500">Payment Method</p>

                <p className="font-medium mt-1">{order.paymentMethod}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Payment Status</p>

                <p className="font-medium text-green-600 mt-1">
                  {order.paymentStatus}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Shipping Charges</p>

                <p className="font-medium mt-1">₹{order.shippingCharges}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Total Amount</p>

                <p className="font-bold text-lg mt-1">₹{order.totalAmount}</p>
              </div>
            </div>

            {/* Shipping Address */}
            {order.shippingAddress && (
              <div className="pt-5">
                <p className="text-sm text-gray-500 mb-2">Delivery Address</p>

                <div className="text-sm font-medium leading-6">
                  <p>{order.shippingAddress.fullName}</p>
                  <p>{order.shippingAddress.mobileNumber}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state}
                  </p>
                  <p>
                    {order.shippingAddress.pincode},{" "}
                    {order.shippingAddress.country}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Link
            to="/"
            className="w-full bg-black text-white text-center py-3 rounded-md font-semibold hover:bg-gray-800 transition font-zurixFont"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="w-full border border-black text-black text-center py-3 rounded-md font-semibold hover:bg-black hover:text-white transition font-zurixFont"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
