import { call, put, all, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import axios from "axios";

//Async functions
async function fetchData(pagination) {
  try {
    const response = await axios.post("api/product", { pagination });
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

//Watchers
function* watchFetchProductList() {
  yield takeLatest(types.FETCH_PRODUCT_LIST, fetchProductList);
}

function* watchGetProductDetail() {
  yield takeLatest(types.GET_SINGLE_PRODUCT, getProductDetail);
}

//rootSaga
export default function* productSaga() {
  yield all([watchFetchProductList(), watchGetProductDetail()]);
}
