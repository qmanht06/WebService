import React from "react";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
  const Products = [
    { id: 1, name: "Shoe_01" },
    { id: 2, name: "Shoe_02" },
    { id: 3, name: "Shoe_03" },
    { id: 4, name: "Shoe_04" },
    { id: 5, name: "Shoe_05" },
    { id: 6, name: "Shoe_06" },
    { id: 7, name: "Shoe_07" },
    { id: 8, name: "Shoe_08" },
  ];

  return (
    <div className="containerTotal">
      {Products.map((item) => (
        <Product key={item.id} id={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default ProductList;
