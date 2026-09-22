import React, { useState } from "react";
import { useGetAllCartsQuery } from "../../redux/cartApi";
import { useCreateOrderMutation } from "../../redux/orderApi";
import {
  useGetAllAddressQuery,
  usePostAddressMutation,
} from "../../redux/addressApi";

const OrderSection = () => {
  const {
    data,
    isLoading: cartLoading,
    isError: cartError,
  } = useGetAllCartsQuery();
  const [createOrder, { isLoading: orderLoading }] = useCreateOrderMutation();
  const { data: addAddress, isLoading: addressLoading } =
    usePostAddressMutation();

  const [addressData, setAddressData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addAddress(addressData).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  if (cartLoading) {
    return <p>Loading...</p>;
  }

  if (cartError) {
    return <p>Unable to fetch data</p>;
  }

  const cartItem = data?.data?.items || [];
  console.log("CART_DATA:", cartItem);

  const mainPrice = cartItem.reduce((total, item) => {
    const product = item.productId;
    const orginalPrice = product?.salePrice || 0;
    const quantity = item.quantity || 0;

    return total + Number(orginalPrice) * Number(quantity);
  }, 0);

  const sellingPrice = cartItem.reduce((total, item) => {
    const product = item.productId;
    const salesPrice = product?.price || 0;
    const quantity = item.quantity || 0;

    return total + Number(salesPrice) * Number(quantity);
  }, 0);

  const discount = mainPrice - sellingPrice;

  const shipping = 0;

  const total = sellingPrice + shipping;

  return (
    <section className="w-[92%] md:w-[90%] lg:w-[85%] mx-auto py-8 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
        {/* ================= LEFT SECTION ================= */}
        <div className="w-full">
          <div onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Heading */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-zurixFont">
                Checkout
              </h1>
              <p className="text-gray-500 mt-2 font-zurixFont">
                Complete your order by providing your details below.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold font-zurixFont">
                Contact Information
              </h2>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium font-zurixFont">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black transition font-zurixFont"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium font-zurixFont">
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={addressData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black transition font-zurixFont"
                />
              </div>
            </div>

            {/* Billing Address */}
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold font-zurixFont">
                Billing Address
              </h2>

              {/* First Name / Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium font-zurixFont">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={addressData.fullName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black transition font-zurixFont"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium font-zurixFont">
                  Street Address
                </label>

                <input
                  type="text"
                  value={addressData.address}
                  onChange={handleChange}
                  placeholder="House number and street name"
                  className="border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black transition font-zurixFont"
                />
              </div>

              {/* City / State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium font-zurixFont">
                    City
                  </label>

                  <input
                    type="text"
                    value={addressData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black transition font-zurixFont"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium font-zurixFont">
                    State
                  </label>

                  <select
                    value={addressData.state}
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black transition font-zurixFont bg-white"
                  >
                    <option value="">Select State</option>
                    <option>Maharashtra</option>
                    <option>Gujarat</option>
                    <option>Madhya Pradesh</option>
                    <option>Goa</option>
                    <option>Karnataka</option>
                    <option>Delhi</option>
                  </select>
                </div>
              </div>

              {/* PIN / Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium font-zurixFont">
                    PIN Code
                  </label>

                  <input
                    type="text"
                    value={addressData.pincode}
                    onChange={handleChange}
                    placeholder="PIN Code"
                    className="border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black transition font-zurixFont"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium font-zurixFont">
                    Country
                  </label>

                  <select
                    value={addressData.country}
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-black transition font-zurixFont bg-white"
                  >
                    <option>India</option>
                  </select>
                </div>
              </div>

              {/* Save Address */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-black" />

                <span className="text-sm text-gray-600 font-zurixFont">
                  Save this information for next time
                </span>
              </label>
            </div>

            {/* Payment */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold font-zurixFont">
                Payment Method
              </h2>

              <div className="border border-gray-300 rounded-md p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="mt-1 accent-black"
                  />

                  <div>
                    <p className="font-medium font-zurixFont">
                      Cash on Delivery
                    </p>

                    <p className="text-sm text-gray-500 mt-1 font-zurixFont">
                      Pay when your order is delivered.
                    </p>
                  </div>
                </label>
              </div>

              <div className="border border-gray-300 rounded-md p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 accent-black"
                  />

                  <div>
                    <p className="font-medium font-zurixFont">Online Payment</p>

                    <p className="text-sm text-gray-500 mt-1 font-zurixFont">
                      Pay securely using your preferred payment method.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Place Order - Mobile */}
            <button
              className="
                lg:hidden
                w-full
                bg-black
                text-white
                py-4
                rounded-md
                font-semibold
                font-zurixFont
                hover:bg-gray-800
                transition
              "
            >
              Place Order
            </button>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <aside className="w-full">
          <div className="lg:sticky lg:top-6">
            <div className="border border-gray-200 rounded-lg p-5 md:p-6">
              {/* Summary Heading */}
              <h2 className="text-xl md:text-2xl font-semibold font-zurixFont">
                Order Summary
              </h2>

              {cartItem.map((item, index) => {
                const product = item.productId;
                return (
                  <div
                    key={index}
                    className="flex gap-4 py-6 border-b border-gray-200"
                  >
                    <div className="relative shrink-0">
                      <img
                        src={product?.images[0].url}
                        alt="Product"
                        className="w-20 h-24 md:w-24 md:h-28 object-cover rounded-md bg-gray-100"
                      />

                      <span
                        className="
                      absolute
                      -top-2
                      -right-2
                      bg-black
                      text-white
                      w-6
                      h-6
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-xs
                    "
                      >
                        1
                      </span>
                    </div>

                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-medium font-zurixFont text-sm md:text-base">
                          {product.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1 font-zurixFont">
                          Size: {item.size}
                        </p>

                        <p className="text-sm text-gray-500 font-zurixFont">
                          Color: {item.color}
                        </p>
                      </div>

                      <p className="font-semibold font-zurixFont">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Coupon */}
              <div className="flex gap-2 py-6 border-b border-gray-200">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="
                    min-w-0
                    flex-1
                    border
                    border-gray-300
                    rounded-md
                    px-3
                    py-3
                    outline-none
                    focus:border-black
                    font-zurixFont
                  "
                />

                <button
                  className="
                    px-4
                    py-3
                    bg-gray-100
                    rounded-md
                    font-medium
                    font-zurixFont
                    hover:bg-gray-200
                    transition
                  "
                >
                  Apply
                </button>
              </div>

              {/* Price Details */}
              <div className="flex flex-col gap-4 py-6 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-zurixFont">
                    Main Price
                  </span>

                  <span className="font-medium font-zurixFont">
                    ${mainPrice}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 font-zurixFont">
                    Selling Price
                  </span>

                  <span className="font-medium font-zurixFont">
                    ${sellingPrice}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 font-zurixFont">Discount</span>

                  <span className="font-medium font-zurixFont">
                    -${discount}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 font-zurixFont">Shipping</span>

                  <span className="font-medium font-zurixFont">Free</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-6">
                <span className="text-lg font-semibold font-zurixFont">
                  Total
                </span>

                <span className="text-2xl font-bold font-zurixFont">
                  ${total}
                </span>
              </div>

              {/* Place Order */}
              <button
                className="
                  hidden
                  lg:block
                  w-full
                  bg-black
                  text-white
                  py-4
                  rounded-md
                  font-semibold
                  font-zurixFont
                  hover:bg-gray-800
                  transition
                "
              >
                Place Order
              </button>

              <p className="text-xs text-gray-500 text-center mt-4 font-zurixFont">
                By placing your order, you agree to our terms and conditions.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default OrderSection;
