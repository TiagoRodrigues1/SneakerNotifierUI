"use client"
import { useEffect, useState } from "react";
import NavBar from "@components/NavBar";
import Feed from "@components/Feed";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("api/products");
      const data = await response.json();

      setProducts(data);
      setSearchProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <section className="container mx-auto">
      <NavBar products = {products} setSearchProducts = {setSearchProducts} />
      <div className="ml-20 mt-5">
        <Feed products={searchProducts}/>
      </div>
    </section>
  );
};

export default Home;
