import React from "react";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="cart-item-container">
      <div style={{ width: "19%" }}>Img-01</div>
      <div style={{ width: "28%" }}>Name-01</div>
      <div style={{ width: "17%" }}>Price-01</div>
      <div style={{ width: "18%" }}>Amount-01</div>
      <div style={{ width: "13%" }}>Sum-01</div>
      <div style={{ width: "5%" }}>Delete</div>
    </div>
  );
};

export default CartItem;
