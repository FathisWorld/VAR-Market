import React, { useContext } from "react";
import Categories from "../components/Acide/Categories";
import Price from "../components/Acide/Price";
import Products from "../components/Products/Products";
import "../components/Acide/asideStyling.css";
import { productsContext } from "../contexts/productsContext";

function ProductsPage() {
  const { filterShow } = useContext(productsContext);
  return (
    <main>
      <aside className={`${filterShow ? "mobile" : ""}`}>
        <Categories />
        <Price />
      </aside>
      <Products />
    </main>
  );
}

export default ProductsPage;