import React from "react";
import HeroPage from "./pages/HeroPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/productDetail/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
