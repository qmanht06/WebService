import React from "react";
import "./CartItem.scss";
import { connect } from "react-redux";
import * as actions from "../../react-redux/actions/cartActions";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  const { url, name, price, quantity, id } = props.product;
  const { increaseQuantity, decreaseQuantity, removeProductFromCart } = props;

  // const handleIncreaseClicked = ()

  return (
    <div className="cart-item-container">
      <div style={{ width: "19%" }} className="cart-item-image">
        <Link to={`/product/${id}`}>
          <img src={url} alt=""></img>
        </Link>
      </div>
      <div style={{ width: "28%" }}>
        <Link to={`/product/${id}`}>
          <div className="cart-item-info">
            <div className="item-name">{name}</div>
            <div className="item-size">Size: 35</div>
          </div>
        </Link>
      </div>
      <div style={{ width: "17%" }}>
        <div className="cart-item-price">{price}₫</div>
      </div>
      <div style={{ width: "18%" }}>
        <div className="cart-item-quantity">
          <button
            type="button"
            className="item-quantity-btn decrease"
            onClick={() => decreaseQuantity(id)}
          >
            -
          </button>
          <div className="item-quantity">{quantity}</div>
          <button
            type="button"
            className="item-quantity-btn increase"
            onClick={() => increaseQuantity(id)}
          >
            +
          </button>
        </div>
      </div>
      <div style={{ width: "13%" }}>
        <div className="cart-item-sum">{Number(price) * Number(quantity)}₫</div>
      </div>
      <div style={{ width: "5%" }}>
        <div className="cart-item-remove">
          <button
            type="button"
            className="item-remove-btn"
            onClick={() => removeProductFromCart(id)}
          >
            <i className="fa-solid fa-trash-can fa-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseQuantity: (productID) =>
      dispatch(actions.increaseQuantity(productID)),
    decreaseQuantity: (productID) =>
      dispatch(actions.decreaseQuantity(productID)),
    removeProductFromCart: (productID) =>
      dispatch(actions.removeProductFromCart(productID)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
