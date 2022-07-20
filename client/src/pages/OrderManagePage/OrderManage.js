import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { register, updateProfile } from "../../react-redux/actions/userActions";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

const OrderList = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default OrderList;
