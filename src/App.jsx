import React from "react";
import HeroPage from "./pages/HeroPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
