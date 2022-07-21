import * as types from "../actions/actionTypes";
import { all, put, call, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

//Async function
async function fetchCartData() {
  try {
    const response = await axios.get("/api/cart");
    // console.log("axios res: ", response);
    if (response && response.data) {
      return response.data;
    } else return [];
  } catch (err) {
    console.log("err: ");
    return "Failed";
  }
}

async function fetchCartFromDB(userId) {
  try {
    const response = await axios.get("/api/db/cart", { userId: userId });
    console.log("axios res: ", response);
    if (response && response.data.message) {
      return response.data.message;
    } else return [];
  } catch (err) {
    console.log("err: ");
    return "Failed";
  }
}

async function postCartItem(cartItem) {
  try {
    const response = await axios.post(`/api/cart`, { cartItem });
    // console.log("axios res: ", response);
    if (response && response.data) {
      return response.data;
    } else return [];
  } catch (err) {
    console.log("err");
    return "Failed";
  }
}

async function deleteCartItem(id) {
  try {
    const response = await axios.delete(`/api/cart/${id}`);
    // console.log("axios res: ", response);
    if (response && response.data) {
      return response.data;
    } else return [];
  } catch (err) {
    console.log("err: ", err);
    return "Failed";
  }
}

async function productQuantityChanged(id, check) {
  try {
    const response = await axios.put(`/api/cart/${check}/${id}`);
    console.log("axios res: ", response);
    if (response && response.data) {
      return response.data;
    } else return [];
  } catch (err) {
    console.log("err: ", err);
    return "Failed";
  }
}

//Workers
export function* getCartData() {
  // console.log("Worker!");
  const response = yield call(fetchCartData);
  console.log("fetch data: ", response);
  yield put({ type: types.SET_CART_LIST, payload: response });
}

export function* addProductToCart(action) {
  // console.log("payload: ", action.payload);
  const response = yield call(postCartItem, action.payload);
  // const response = action.payload;
  console.log("fetch data: ", response || 0);
  yield put({ type: types.CHANGE_TOTAL_QUANTITY, payload: response.quantity });
}

export function* removeProductFromCart(action) {
  yield console.log("Delete!");
  const response = yield call(deleteCartItem, action.payload);
  console.log("Data: ", response);
}

export function* handleTotalQuantityChanged(action) {
  // console.log("Changed!");
  // const temp = Number(localStorage.getItem('quantity'));
  switch (action.type) {
    case types.INCREASE_QUANTITY:
      const response1 = yield call(
        productQuantityChanged,
        action.payload,
        "increase"
      );
      console.log(response1);
      break;
    case types.DECREASE_QUANTITY:
      const response2 = yield call(
        productQuantityChanged,
        action.payload,
        "decrease"
      );
      console.log(response2);
      break;
    default:
      console.log("Nothing!");
  }
}

export function* getCartFromDB(action) {
  console.log("Testing!: ", action.payload);
  const response = yield call(fetchCartFromDB, action.payload);
  console.log("fetch data: ", response);
  // yield put({ type: types.SET_CART_LIST, payload: response });
}

//Watchers
function* watchFetchCartList() {
  yield takeLatest(types.FETCH_CART_LIST, getCartData);
}
function* watchAddProductToCartList() {
  yield takeEvery(types.ADD_TO_CART, addProductToCart);
}
function* watchRemoveProductFromCart() {
  yield takeLatest(types.REMOVE_FROM_CART, removeProductFromCart);
}
function* watchTotalQuantityChanged() {
  yield takeEvery(
    [types.INCREASE_QUANTITY, types.DECREASE_QUANTITY],
    handleTotalQuantityChanged
  );
}
function* watchGetCartFromDB() {
  yield takeLatest("GET_CART_FROM_DB", getCartFromDB);
}

export default function* cartSaga() {
  yield all([
    watchFetchCartList(),
    watchAddProductToCartList(),
    watchRemoveProductFromCart(),
    watchTotalQuantityChanged(),
    watchGetCartFromDB(),
  ]);
}
