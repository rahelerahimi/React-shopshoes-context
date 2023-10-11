import React from "react";
import Filter from "./Component/Product/Filter/Filter.jsx";
import ProductHeader from "./Component/Product/ProductHeader/ProductHeader.jsx";
import Products from "./Component/Product/Products/Products.jsx";

function Product() {
  return (
    <>
      <ProductHeader />
      <Filter />
      <Products />
    </>
  );
}

export default Product;
