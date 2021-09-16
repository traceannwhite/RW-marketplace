import React from "react";
import Link from "next/link";

const FeaturedProducts = () => {
  return (
    <>
      <div className="products-header">
        <h1>Featured Products</h1>
        <Link href="/products" className="see-all">
          See All
        </Link>
      </div>
      <div className="products-container"></div>
    </>
  );
};

export default FeaturedProducts;
