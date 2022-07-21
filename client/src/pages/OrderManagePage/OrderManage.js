import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { register, updateProfile } from "../../react-redux/actions/userActions";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import {
  deleteOrderAction,
  listOrders,
} from "../../react-redux/actions/ordersListAction";
import { ORDERS_LIST_REQUEST } from "../../react-redux/constants/ordersConstants";

const OrderList = () => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;

  const history = useHistory();

  useEffect(() => {
    dispatch(listOrders());
    if (!userInfo) {
      history.push("/login");
    }

    return () => {};
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure? This action can't be reverse!")) {
      dispatch(deleteOrderAction(id));
    }
  };
  return (
    <div>
      <Header />
      {console.log(orders)}
      <div className="cart-container">
        {error && <ErrorMessage variant="danger">{error} </ErrorMessage>}
        {/* {!loading && message && (
          <ErrorMessage variant="danger">{message}</ErrorMessage>
        )} */}
        {loading && <Loading />}
        <div className="cart-head">
          <div style={{ width: "19%" }}>Mã đơn hàng</div>
          <div style={{ width: "20%" }}>Thời điểm đặt hàng</div>
          <div style={{ width: "19%" }}>Trạng thái đơn hàng</div>
          <div style={{ width: "30%" }}>Đơn giá</div>
          <div style={{ width: "6%" }}>Xóa</div>
          <div style={{ width: "6%" }}>Edit</div>
        </div>
        <div className="cart-body ">
          {orders?.map((order) => (
            <div className="cart-item-container ">
              <div style={{ width: "19%" }}>
                <div>{order._id}</div>
              </div>
              <div style={{ width: "20%" }}>
                <div>{order.createdAt}</div>
              </div>
              <div style={{ width: "19%" }}>
                <div>{order.status}</div>
              </div>
              <div style={{ width: "30%" }}>
                <div className="cart-item-price">{order.total}đ</div>
              </div>
              <div style={{ width: "6%" }} className="align-items-center">
                <button
                  type="button"
                  className="item-remove-btn"
                  onClick={() => deleteHandler(order._id)}
                >
                  <i className="fa-solid fa-trash-can fa-xs"></i>
                </button>
              </div>
              <div style={{ width: "6%" }} className="align-items-center">
                <button type="button" className="item-remove-btn">
                  <i className="fa-solid fa-edit fa-xs"></i>
                </button>
              </div>
            </div>
          ))}
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
