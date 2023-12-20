import React from "react";
import { ProductList } from "../data/ProductList.js";
import ProductCard from "../Components/ProductCard/ProductCard";




const Dashboard = () => {
  return (
    <div
      className="d-flex flex-wrap justify-content-center p-3"
      
    >
      {ProductList.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};

export default Dashboard;