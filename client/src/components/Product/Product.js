import React from "react";
import { Link } from "react-router-dom";
// import imgShoe01 from "../../assets/images/shoe_01.jpg";
// import shoppingCartIcon from "../../assets/images/shopping-cart.png";
// import productViewIcon from "../../assets/images/view.png";
import "./Product.css";

const Product = (props) => {
  const currency = { style: 'currency', currency: 'VND' };
  const { id, name, imageURL, oldPrice, price, rating } = props.product;

  const processRating = (rating) => {
    const star = Math.floor(rating);
    const checked = Math.round(rating * 10) - star * 10
    const halfStar = (checked > 2 && checked < 5) ? true : false;
    return {
      star: star,
      halfStar: halfStar,
    }
  }
  const ratingStar = processRating(rating / 10000);
  console.log(ratingStar);

  return (
    <div className="col-xs-1 col-sm-2 col-md-4 col-lg-6 col-xl-6">
      <Link to={`/product/${id}`}>
        <div className="product-container">
          <div
            className="img-container"
            style={{ backgroundImage: `url(${imageURL})` }}
          />

          <div className="product-name">{name}</div>
          <div className="product-price">
            <span className="product-price-old">{Number(oldPrice).toLocaleString('en-US', currency)}</span>
            <span className="product-price-current">{Number(price).toLocaleString('en-US', currency)}</span>
          </div>
          <div className="product-actions">
            <div className="star-icon">
              {Array.from({ length: 5 }).map((item, index) => {
                if (index < ratingStar.star) {
                  return <i className="fa-solid fa-star"></i>
                } else if (ratingStar.halfStar) {
                  ratingStar.halfStar = false;
                  return <i className="fa-solid fa-star-half-stroke"></i>
                } else return <i className="fa-regular fa-star"></i>
              })}
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
