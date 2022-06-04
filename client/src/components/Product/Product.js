import React from "react";
import { Link } from "react-router-dom";
// import imgShoe01 from "../../assets/images/shoe_01.jpg";
// import shoppingCartIcon from "../../assets/images/shopping-cart.png";
// import productViewIcon from "../../assets/images/view.png";
import "./Product.css";

const Product = ({ id, name, url }) => {
  return (
    <div className="col-xs-1 col-sm-2 col-md-4 col-lg-6 col-xl-6">
      <Link to={`/product/${id}`}>
        <div className="product-container">
          <div
            className="img-container"
            style={{ backgroundImage: `url(${url})` }}
          />

          <div className="product-name">{name}</div>
          <div className="product-price">
            <span className="product-price-old">70000đ</span>
            <span className="product-price-current">50000đ</span>
          </div>
          <div className="product-actions">
            <div className="star-icon">
              {/* <i class="fa-thin fa-star"></i> */}
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <span className="sell-amount">Sell: 5K</span>
          </div>
          {/* <img src={shoppingCartIcon} alt="test"></img> */}
          {/* <div className="icon-container">

            <img className="icon" src={productViewIcon} alt="eye-outline" />
            <FontAwesomeIcon icon="fa-solid fa-eye" /> 

          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default Product;
