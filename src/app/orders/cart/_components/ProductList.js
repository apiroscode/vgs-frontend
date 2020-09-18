import React from "react";

import { EmptyCart } from "@/components";
import ProductCard from "./ProductCard";

const ProductList = ({ cart }) => {
  const { id, items: products } = cart;
  return products.length > 0 ? (
    products.map((product) => <ProductCard key={product.id} orderId={id} product={product} />)
  ) : (
    <EmptyCart />
  );
};

export default ProductList;
