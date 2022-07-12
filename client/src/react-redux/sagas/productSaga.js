import { call, put, all, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import axios from "axios";

//Async functions
async function fetchData() {
    try {
        const response = await axios.get('/api/products');
        console.log("axios res: ", response);
        if (response && response.data) {
            return response.data;
        } else return [];
    } catch (err) {
        console.log("err");
        console.log();
        return "Failed";
    }
}

async function getSingleProduct(productId) {
    try {
        const response = await axios.get(`/api/products/${productId}`);
        if (response && response.data) {
            return response.data;
        } else return {};
    } catch (err) {
        console.log("err");
        console.log();
        return "Failed";
    }
}

//Workers
export function* fetchProductList() {
    console.log("Worker!")
    const response = yield call(fetchData);
    console.log("fetch data: ", response);
    yield put({ type: types.SET_PRODUCT_LIST, payload: response });
}

export function* getProductDetail(action) {
    const response = yield call(getSingleProduct, action.payload);
    console.log("fetch data: ", response);
    yield put({ type: types.SET_SINGLE_PRODUCT, payload: response })
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
    yield all([
        watchFetchProductList(),
        watchGetProductDetail(),
    ]);
}