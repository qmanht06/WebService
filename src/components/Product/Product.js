import React from "react";
import { Link } from "react-router-dom";
import imgShoe01 from "../../assets/images/shoe_01.jpg";
import "./Product.css";

const Product = ({ id, name }) => {
  return (
    <div className="product-container">
      <Link to={`/product/${id}`}>
        <img className="img-container" src={imgShoe01} alt="Error" />
        <div className="info-container">
          <div className="product-info">{name}</div>
          <div className="seller-info">
            <div className="product-price">
              <span>20000</span>
              <span className="units"> đ</span>
            </div>
            <div className="seller-amount">Sell: 5K</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
