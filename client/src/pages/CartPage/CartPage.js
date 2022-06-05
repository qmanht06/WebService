import React from "react";
import "./CartPage.css";
import Header from "../../components/Header/Header";
import CartItem from "./CartItem";

const CartPage = () => {
  return (
    <div>
      <Header />
      <div className="cart-container">
        <div className="cart-head">
          <div style={{ width: "19%" }}>Sản phẩm</div>
          <div style={{ width: "28%" }}>Thông tin sản phẩm</div>
          <div style={{ width: "17%" }}>Đơn giá</div>
          <div style={{ width: "18%" }}>Số lượng</div>
          <div style={{ width: "13%" }}>Thành tiền</div>
          <div style={{ width: "5%" }}>Xóa</div>
        </div>
        <div className="cart-body">
          <CartItem />
          <CartItem />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
