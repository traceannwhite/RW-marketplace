import React from "react";
import Product from "../components/Product";

const products = (props) => {
  return props.products.map((product) => (
    <Product product={product} key={product.id} />
  ));
};

export default products;
