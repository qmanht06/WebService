import React, { useEffect, useSelector, useState } from "react";
import Headers from "../../components/Header/Header";
import classNames from "classnames/bind";
import style from "./OrderManageDetail.scss";
import { connect } from "react-redux";
import { fetchCartList } from "../../react-redux/actions/cartActions";
import { fetchProductForOrder } from "../../react-redux/actions/productActions";
import { Link, useHistory } from "react-router-dom";
import * as selectors from "../../react-redux/selectors";
import CartItem from "../CartPage/CartItem";
import Button from "../../components/common/Button/Button";
import { useRef } from "react";
import axios from "axios";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(style);
//let name, note, phone, address, email;
function PostManagePage(props) {
  const { fetchProductForOrder, cartList } = props;
  const [info, setInfo] = useState({
    name: "",
    note: "",
    phone: "",
    address: "",
    email: "",
  });
  const [total, setTotal] = useState("0");
  const [state, setState] = useState("pending");
  const [createdAt, setCreatedAt] = useState(null);
  useEffect(() => {
    try {
      axios.get(`/api/orders/${pathname}`).then((response) => {
        console.log(response.data);
        // let temp = response.data.shippingDetails;
        // name = temp.name;
        // note = temp.note;
        // phone = temp.phone;
        // address = temp.address;
        // email = temp.email;
        setInfo(response.data.shippingDetails);
        setOrderItem(response.data);
        fetchProductForOrder(response.data.products);
        setTotal(response.data.total);
        setState(response.data.state);
        setCreatedAt(response.data.createdAt);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log("productOrder: ", cartList);
  // const { cartList, quantity, fetchCartList } = props;
  const pathname = useLocation().pathname.slice(12);
  const [orderItem, setOrderItem] = useState({});
  console.log("path: ", pathname);
  //   const history = useHistory();

  console.log(orderItem);
  // console.log(Object.keys(orderItem));
  // const { name, note, phone, address, email } = orderItem.shippingDetails;

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const noteRef = useRef();

  // const total =
  //   cartList?.reduce(
  //     (prev, curr) => prev + curr.quantity * +curr.productPrice,
  //     0
  //   ) || 0;
  // const userInfomation = JSON.parse(localStorage.getItem("userInfo"));

  const submitHandler = async (e) => {};
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const name = nameRef.current.value;
  //   const phone = phoneRef.current.value;
  //   const email = emailRef.current.value;
  //   const address = addressRef.current.value;
  //   const note = noteRef.current.value;
  //   const products = cartList.map((item) => ({
  //     product: item._id,
  //     quantity: item.quantity,
  //   }));
  //   if (!name || !phone || !email || !address) {
  //     setMessage("Vui lòng nhập tất cả các trường cần thiết!");
  //   } else {
  //     const order = {
  //       userID: userInfomation._id,
  //       shippingDetails: {
  //         name,
  //         phone,
  //         email,
  //         address,
  //         note,
  //       },
  //       products,
  //       total,
  //     };

  //     console.log("order", order);

  //     await axios.post("/api/orders", order);
  //     history.push("/user/order");
  //     setMessage(null);
  //   }
  // };
  return (
    <>
      <Headers></Headers>
      <div className={cx("grid", "body")}>
        {/* {message && <ErrorMessage variant="danger">{message}</ErrorMessage>} */}
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
                value={info.name}
                readOnly
              />
            </div>
            <div className={cx("body__item")}>
              <p className={cx("body__item__title")}>Số điện thoại: </p>
              <input
                ref={phoneRef}
                className={cx("body__item__input")}
                type="text"
                placeholder="Số điện thoại"
                value={info.phone}
                readOnly
              />
            </div>
            <div className={cx("body__item")}>
              <p className={cx("body__item__title")}>Email: </p>
              <input
                ref={emailRef}
                className={cx("body__item__input")}
                type="text"
                placeholder="Email"
                value={info.email}
                readOnly
              />
            </div>
            <div className={cx("body__item")}>
              <p className={cx("body__item__title")}>Địa chỉ: </p>
              <input
                ref={addressRef}
                className={cx("body__item__input")}
                type="text"
                placeholder="Địa chỉ"
                value={info.address}
                readOnly
              />
            </div>
            <div className={cx("body__item")}>
              <p className={cx("body__item__title")}>Ngày tạo đơn hàng: </p>
              <input
                //ref={addressRef}
                className={cx("body__item__input")}
                type="text"
                placeholder="Date time"
                value={createdAt}
                readOnly
              />
            </div>
            <div className={cx("body__item")}>
              <p className={cx("body__item__title")}>Trạng thái: </p>
              <input
                //ref={addressRef}
                className={cx("body__item__input")}
                type="text"
                placeholder="Trạng thái"
                value={state}
                readOnly
              />
              {/* <select
                className={cx("body__item__input")}
                defaultValue="pending"
              >
                <option value="pending">pending</option>
                <option value="processing">processing</option>
                <option value="shipped">shipped</option>
                <option value="delivered">delivered</option>
                <option value="decided">decided</option>
              </select> */}
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
                value={info.note}
                readOnly
              ></textarea>
            </div>

            {/* <button className={cx("btn_order")} onClick={submitHandler}>
              UPDATE
            </button> */}
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
            <h1>Tổng tiền: {total}₫</h1>
          </div>
        </form>
      </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   const data = selectors.cartSelector(state);
//   // const test = selectors.productSelector(state);
//   // console.log("product: ",test);
//   console.log("cart: ", data);

//   return { cartList: data.cartList, quantity: data.cartTotalQuantity };
// };

// const mapDispatchToProps = (dispatch) => {
//   console.log("ok");
//   return {
//     fetchCartList: (data) => dispatch(fetchCartList(data)),
//   };
// };
const mapStateToProps = (state) => {
  const data = selectors.productSelector(state);
  // console.log("dada: ", data);
  return { cartList: data.productOrder };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addProductToCart: (product) => dispatch(addProductToCart(product)),
    fetchProductForOrder: (productId) =>
      dispatch(fetchProductForOrder(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostManagePage);
