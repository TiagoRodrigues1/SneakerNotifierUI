"use client"
import ProductCard from "./ProductCard";
import Sneaker from "@models/sneaker";

function Feed({products} : {products : Sneaker[]}) {

  return (
    <div className="grid grid-cols-3">
      {products.map((product: Sneaker) => (
        <ProductCard sneaker={product} />
      ))}
    </div>
  );
}

export default Feed;
