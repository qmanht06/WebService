import React from "react";
import Product from "./Product";
import {
  SHOE_01,
  SHOE_02,
  SHOE_03,
  SHOE_04,
  SHOE_05,
  SHOE_06,
  SHOE_07,
  SHOE_08,
} from "./ImageShoe";

const ProductList = () => {
  const Products = [
    { id: 1, name: "Shoe_01", url: SHOE_01 },
    { id: 2, name: "Shoe_02", url: SHOE_02 },
    { id: 3, name: "Shoe_03", url: SHOE_03 },
    { id: 4, name: "Shoe_04", url: SHOE_04 },
    { id: 5, name: "Shoe_05", url: SHOE_05 },
    { id: 6, name: "Shoe_06", url: SHOE_06 },
    { id: 7, name: "Shoe_07", url: SHOE_07 },
    { id: 9, name: "Shoe_08", url: SHOE_08 },
    { id: 10, name: "Shoe_08", url: SHOE_08 },
    { id: 11, name: "Shoe_08", url: SHOE_08 },
  ];

  return (
    <div className="grid">
      <div className="row body">
        {Products.map((item) => (
          <Product key={item.id} id={item.id} name={item.name} url={item.url} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
