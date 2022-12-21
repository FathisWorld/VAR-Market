import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
// Components
import ProductsPage from "./views/ProductsPage";
import DetailsPage from "./views/DetailsPage";
import CartPage from "./views/CartPage";
import Landing from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Market" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
