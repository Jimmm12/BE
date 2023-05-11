import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CartState from "./context/cart/CartStaet";
function App() {
  return (
    <Router>
      <CartState>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </CartState>
    </Router>
  );
}

export default App;
