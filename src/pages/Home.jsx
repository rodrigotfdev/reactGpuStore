import React from "react";
import { ProductItem } from "../components/ProductItem";
import ProductViewMore from "./ProductViewMore";
import { productData } from "../ProductData";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const products = productData;

  return (
    <div>
      <ul className="products-list justify-center my-20">
        {products.map((product) => (
          <ProductItem productObj={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
