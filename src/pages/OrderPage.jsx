import React from "react";
import OrderSection from "../components/orders/OrderSection";
import OrderHistory from "../components/orders/OrderHistory";

const OrderPage = () => {
  return (
    <section>
      <OrderSection />
      <OrderHistory/>
    </section>
  );
};

export default OrderPage;
