import React from "react";
import HeroPage from "./pages/HeroPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/productDetail/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
