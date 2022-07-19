import React, { useEffect } from "react";
import "./CartPage.scss";
import Header from "../../components/Header/Header";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCartList } from "../../react-redux/actions/cartActions";
import * as selectors from "../../react-redux/selectors";

const CartPage = (props) => {
  const { cartList, quantity, fetchCartList } = props;
  const init = 0;
  const total = cartList
    ? cartList.reduce((prev, curr) => prev + curr.quantity * curr.price, init)
    : 0;

  useEffect(() => {
    fetchCartList();
  }, []);

  console.log(quantity);

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
        <div className="cart-footer">
          <div className="cart-info">
            <span className="cart-footer-title">Total:&nbsp;&nbsp;&nbsp;</span>
            <span className="cart-total-price">{total}&nbsp;₫</span>
          </div>
          <div className="cart-btn">
            <Link to={"/"}>
              <button type="button" className="cart-btn back-btn">
                Tiếp tục mua hàng
              </button>
            </Link>
            <Link to={"/login"}>
              <button type="button" className="cart-btn buy-btn">
                Tiến hành đặt hàng
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const data = selectors.cartSelector(state);
  // const test = selectors.productSelector(state);
  // console.log("product: ",test);
  console.log("cart: ", data);

  return { cartList: data.cartList, quantity: data.cartTotalQuantity };
};

const mapDispatchToProps = (dispatch) => {
  console.log("ok");
  return {
    fetchCartList: (data) => dispatch(fetchCartList(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
