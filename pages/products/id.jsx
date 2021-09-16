import React from "react";
import Link from "next/link";
import Image from "next/image";

const SingleProduct = ({ match, products, edit, deleteProduct }) => {
  const id = parseInt(match.params.id);
  const product = products.find((product) => product.id === id);

  return (
    <div className="product-page">
      <div className="product-images">
        <Image src={product.image} alt="product" />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <h3>{product.description}</h3>
        <p>{product.price}</p>
      </div>
      <div className="product-buttons">
        <button onClick={(event) => add(product)}>Add to Cart</button>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
