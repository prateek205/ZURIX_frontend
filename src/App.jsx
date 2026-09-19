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

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/productDetail/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
