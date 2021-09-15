import React from "react";
import Link from "next/link";

const FeaturedProducts = (props) => {
  const { products } = props;

  const allProducts = () => {
    return products.map((product) => (
      <div className="product-card" key={product._id}>
        <Link href={`/products/${product._id}`}>
          <img
            src={data.product.data.photos.url}
            alt={product.name}
            className="product-img"
          />
          <div className="product-name">{data.product.data.name}</div>
          <div className="product-seller">{product.seller}</div>
        </Link>
      </div>
    ));
  };

  //   const filteredProducts = () => {
  //     return (
  //       products
  //           .filter((product) =>
  //             product.name.toLowerCase().includes(props.name.toLowerCase())
  //           )
  //         .map((product) => (
  //           <Link
  //             to={`/products/${product._id}`}
  //             className="product-card"
  //             key={product._id}
  //           >
  //             <img
  //               src={product.image}
  //               alt={product.name}
  //               className="product-img"
  //             />
  //             <div className="product-name">{product.name}</div>
  //             <div className="product-seller">{product.seller}</div>
  //           </Link>
  //         ))
  //     );
  //   };

  const test = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <div className="products-header">
        <h1>Featured Products</h1>
        <Link href="/products" className="see-all">
          See All
        </Link>
      </div>
      <div className="products-container">
        {/* {props.location === "" ? allProducts() : filteredProducts()} */}
      </div>
      <button onClick={test}>Test</button>
    </>
  );
};

export default FeaturedProducts;
