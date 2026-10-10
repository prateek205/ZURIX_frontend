import React from "react";
import HeroPage from "./pages/HeroPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Login from "./pages/LoginPage";
import Profile from "./pages/Profile";
import OrderPage from "./pages/OrderPage";
import Order_Success from "./pages/Order-Success";
import WishlistSection from "./pages/WishlistSection";
import { Slide, ToastContainer } from "react-toastify";
import OrderHistory from "./components/orders/OrderHistory";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/productDetail/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/order-success" element={<Order_Success />} />
        <Route path="/wishlist" element={<WishlistSection />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
