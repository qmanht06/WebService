import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { register, updateProfile } from "../../react-redux/actions/userActions";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import { listOrders } from "../../react-redux/actions/ordersListAction";
import { ORDERS_LIST_REQUEST } from "../../react-redux/constants/ordersConstants";

const OrderList = () => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, orders, error } = orderList;

  useEffect(() => {
    dispatch(listOrders());

    return () => {};
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="cart-container">
        <div className="cart-head">
          <div style={{ width: "19%" }}>Mã đơn hàng</div>
          <div style={{ width: "28%" }}>Thời điểm đặt hàng</div>
          <div style={{ width: "17%" }}>Đơn giá</div>
          <div style={{ width: "18%" }}>Trạng thái đơn hàng</div>
          <div style={{ width: "13%" }}>Thành tiền</div>
          <div style={{ width: "5%" }}>Xóa/Update</div>
        </div>
        <div className="cart-body">
          {/* {orders.reverse().map((order) => (
            <h1>First order</h1>
          ))} */}
        </div>
        <div className="cart-footer">
          <div className="cart-info">
            <span className="cart-footer-title">Total:&nbsp;&nbsp;&nbsp;</span>
            {/* <span className="cart-total-price">{total}&nbsp;₫</span> */}
          </div>
          <div className="cart-btn">
            {/* <Link to={"/"}>
              <button type="button" className="cart-btn back-btn">
                Tiếp tục mua hàng
              </button>
            </Link>
            <Link to={"/login"}>
              <button type="button" className="cart-btn buy-btn">
                Tiến hành đặt hàng
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
