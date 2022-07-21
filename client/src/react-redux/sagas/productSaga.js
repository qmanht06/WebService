import { call, put, all, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import axios from "axios";

//Async functions
async function fetchAll() {
  try {
    const response = await axios.post("/api/product/all");
    console.log("axios res: ", response);
    if (response && response.data.products) {
      return response.data.products;
    } else return [];
  } catch (err) {
    console.log("err");
    console.log();
    return "Failed";
  }
}

// async function fetchSingle(productId) {
//   try {
//     const response = await axios.get(`/api/product/${productId}`);
//     console.log("axios res: ", response);
//     if (response && response.data.products) {
//       return response.data.products;
//     } else return [];
//   } catch (err) {
//     console.log("err");
//     console.log();
//     return "Failed";
//   }
// }

async function fetchData(pagination) {
  try {
    const response = await axios.post("/api/product", { pagination });
    console.log("axios res: ", response);
    if (response && response.data.products) {
      return response.data.products;
    } else return [];
  } catch (err) {
    console.log("err");
    console.log();
    return "Failed";
  }
}

async function getSingleProduct(productId) {
  try {
    const response = await axios.get(`/api/product/${productId}`);
    if (response && response.data.products[0]) {
      return response.data.products[0];
    } else return {};
  } catch (err) {
    console.log("err");
    console.log();
    return "Failed";
  }
}

//Workers
export function* fetchProductList(action) {
  console.log("Payload: ", action.payload);
  const response = yield call(fetchData, action.payload);
  console.log("fetch data: ", response);
  yield put({ type: types.SET_PRODUCT_LIST, payload: response });
}

export function* getProductDetail(action) {
  const response = yield call(getSingleProduct, action.payload);
  console.log("fetch data: ", response);
  yield put({ type: types.SET_SINGLE_PRODUCT, payload: response });
}

export function* fetchAllProducts() {
  // console.log("Payload: ", action.payload);
  const response = yield call(fetchAll);
  console.log("fetch data: ", response);
  yield put({ type: types.SET_ALL_PRODUCTS, payload: response });
}

// export function* fetchSingleProduct(action) {
//   // console.log("Payload: ", action.payload);
//   const response = yield call(fetchSingle, action.payload);
//   console.log("fetch data: ", response);
//   yield put({ type: types.SET_SINGLE_PRODUCT_ADMIN, payload: response });
// }

//Watchers
function* watchFetchProductList() {
  yield takeLatest(types.FETCH_PRODUCT_LIST, fetchProductList);
}

function* watchGetProductDetail() {
  yield takeLatest(types.GET_SINGLE_PRODUCT, getProductDetail);
}

function* watchFetchAllProducts() {
  yield takeLatest(types.FETCH_ALL_PRODUCTS, fetchAllProducts);
}

// function* watchFetchSingleProduct() {
//   yield takeLatest(types.FETCH_SINGLE_PRODUCT, fetchSingleProduct);
// }

//rootSaga
export default function* productSaga() {
  yield all([
    watchFetchProductList(),
    watchGetProductDetail(),
    watchFetchAllProducts(),
  ]);
}
