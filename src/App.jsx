// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/index";
import ShopNow from "./pages/shop-now";
import AdminProducts from "./pages/admin/products";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-now" element={<ShopNow />} />
        <Route path="/admin/products" element={<AdminProducts />} />
      </Routes>
    </Router>
  );
}
