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
          <div style={{ width: "20%" }}>Thời điểm đặt hàng</div>
          <div style={{ width: "19%" }}>Trạng thái đơn hàng</div>
          <div style={{ width: "30%" }}>Đơn giá</div>
          <div style={{ width: "6%" }}>Xóa</div>
          <div style={{ width: "6%" }}>Edit</div>
        </div>
        <div className="cart-body ">
          {/* {orders.reverse().map((order) => (
            <h1>First order</h1>
          ))} */}
          <div className="cart-item-container ">
            <div style={{ width: "19%" }}>
              <div>0b9238671c4f61f2b0n3</div>
            </div>
            <div style={{ width: "20%" }}>
              <div>Time dat hang</div>
            </div>
            <div style={{ width: "19%" }}>
              <div>Đang giao hàng</div>
            </div>
            <div style={{ width: "30%" }}>
              <div className="cart-item-price">50000₫</div>
            </div>
            <div style={{ width: "6%" }} className="align-items-center">
              <button type="button" className="item-remove-btn">
                <i className="fa-solid fa-trash-can fa-xs"></i>
              </button>
            </div>
            <div style={{ width: "6%" }} className="align-items-center">
              <button type="button" className="item-remove-btn">
                <i className="fa-solid fa-edit fa-xs"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-footer">
          <div className="cart-info">
            {/* <span className="cart-footer-title">Total:&nbsp;&nbsp;&nbsp;</span> */}
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
