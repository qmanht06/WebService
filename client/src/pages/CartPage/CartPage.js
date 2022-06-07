import React from "react";
import "./CartPage.css";
import Header from "../../components/Header/Header";
import CartItem from "./CartItem";
import { connect } from "react-redux";

const CartPage = (props) => {
  const cartList = props.cartList;

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
          {cartList.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const cartList = state.cart.cartList;

  return { cartList: cartList };
};

export default connect(mapStateToProps)(CartPage);
