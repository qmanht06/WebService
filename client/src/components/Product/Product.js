import React from "react";
import { Link } from "react-router-dom";
import imgShoe01 from "../../assets/images/shoe_01.jpg";
import shoppingCartIcon from "../../assets/images/shopping-cart.png";
import productViewIcon from "../../assets/images/view.png";
import "./Product.css";

const Product = ({ id, name }) => {
  return (
    <div className="product-container col-xs-1 col-sm-2 col-md-4 col-lg-6 col-xl-6">
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
      {/* <img src={shoppingCartIcon} alt="test"></img> */}
      <div className="icon-container">
        <img className="icon" src={shoppingCartIcon} alt="cart-outline" />
        <Link to={`/product/${id}`}>
          <img className="icon" src={productViewIcon} alt="eye-outline" />
        </Link>
      </div>
    </div>
  );
};

export default Product;
