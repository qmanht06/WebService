import React, { useEffect, useSelector, useState, useRef } from "react";
import Headers from "../../components/Header/Header";
import classNames from "classnames/bind";
import style from "./Payment.module.scss";
import { connect } from "react-redux";
import { fetchCartList } from "../../react-redux/actions/cartActions";
import { Link, useHistory } from "react-router-dom";
import * as selectors from "../../react-redux/selectors";
import CartItem from "../CartPage/CartItem";
import Button from "../../components/common/Button/Button";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import Button from "../../components/common/Button/Button";
import axios from "axios";

const cx = classNames.bind(style);

function PostManagePage(props) {
  const { cartList, quantity, fetchCartList } = props;
  const history = useHistory();
  useEffect(() => {
    fetchCartList();
  }, []);
  console.log(cartList);

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const noteRef = useRef();

  const total =
    cartList?.reduce(
      (prev, curr) => prev + curr.quantity * +curr.productPrice,
      0
    ) || 0;
  const userInfomation = JSON.parse(localStorage.getItem("userInfo"));

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const note = noteRef.current.value;
    const products = cartList.map((item) => ({
      product: item._id,
      quantity: item.quantity,
    }));
    if (
      !name ||
      !phone ||
      !email ||
      !address ||
      !userInfomation._id ||
      !products
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const order = {
      userID: userInfomation._id,
      shippingDetails: {
        name,
        phone,
        email,
        address,
        note,
      },
      products,
      total,
    };

    console.log("order", order);

    try {
      const response = await axios.post("/api/orders", order);
      console.log("réponse: ", response);
    } catch (err) {
      console.log(err);
    }
    history.push("/user/order");
  };
  return (
    <>
      <Headers></Headers>
      <div className={cx("grid", "body")}>
        <form>
          <div>
            <h4 className={cx("body__title")}>Đặt hàng</h4>
            <div className={cx("body__item")}>
              <p className={cx("body__item__title")}>Họ và tên: </p>
              <input
                ref={nameRef}
                className={cx("body__item__input")}
                type="text"
                placeholder="Họ và tên"
                defaultValue={userInfomation.fullName}
              />
            </div>
            <div className={cx("body__item")}>
              <p className={cx("body__item__title")}>Số điện thoại: </p>
              <input
                ref={phoneRef}
                className={cx("body__item__input")}
                type="text"
                placeholder="Số điện thoại"
              />
            </div>
            <div className={cx("body__item")}>
              <p className={cx("body__item__title")}>Email: </p>
              <input
                ref={emailRef}
                className={cx("body__item__input")}
                type="text"
                placeholder="Email"
                defaultValue={userInfomation.email}
              />
            </div>
            <div className={cx("body__item")}>
              <p className={cx("body__item__title")}>Địa chỉ: </p>
              <input
                ref={addressRef}
                className={cx("body__item__input")}
                type="text"
                placeholder="Địa chỉ"
              />
            </div>
            <div className={cx("body__item")}>
              <p className={cx("body__item__title")}>Ghi chú: </p>
              <textarea
                ref={noteRef}
                className={cx("body__item__text-area")}
                id=""
                cols="100"
                rows="10"
                placeholder="Ghi chú"
              ></textarea>
            </div>

            <button className={cx("btn_order")} onClick={submitHandler}>
              Đặt hàng
            </button>
          </div>
          <div style={{ marginTop: "60px" }}>
            <h1 className={cx("body__title")}>Products</h1>
            
            <div>
              {cartList.map((item) => (
                <CartItem key={item._id} product={item} editable={false} />
              ))}
            </div>
          </div>
          <div className={cx("total")}>
            <h1>Tổng tiền: {total}</h1>
          </div>
        </form>
      </div>
    </>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(PostManagePage);
