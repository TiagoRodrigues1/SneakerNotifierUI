"use client"
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Sneaker from "@models/sneaker";

function Feed() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("api/products");
      const data = await response.json();

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3">
      {products.map((product: Sneaker) => (
        <ProductCard sneaker={product} />
      ))}
    </div>
  );
}

export default Feed;
