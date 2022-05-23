import React from "react";
import { Link } from "react-router-dom";
import imgShoe01 from "../../assets/images/shoe_01.jpg";
import "./Product.css";

const Product = ({ id, name }) => {
  return (
    <div className="container">
      <img className="imgContainer" src={imgShoe01} alt="Error" />
      <div className="info-Container">
        <div className="productInfo">{name}</div>

        <div className="sellerInfo">
          <div className="productPrice">20000 đ</div>
          <div className="sellerAmount">Sell: 5K</div>
        </div>
        <Link to={`/product/${id}`}>View</Link>
      </div>
    </div>
  );
};

export default Product;
