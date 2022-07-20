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
      <div className="cart-container"></div>
    </div>
  );
};

export default OrderListItem;
