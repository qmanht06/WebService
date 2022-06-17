import * as types from "../actions/actionTypes";
import { all, put, call, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

//Async function
async function fetchCartData() {
    try {
        const response = await axios.get('/api/cart');
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

async function postCartItem(cartItem) {
    try {
        const response = await axios.post(`/api/cart`, { cartItem });
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

//Workers
export function* getCartData() {
    console.log("Worker!")
    const response = yield call(fetchCartData);
    console.log("fetch data: ", response);
    yield put({ type: types.SET_CART_LIST, payload: response });
}

export function* addProductToCart(action) {
    console.log("payload: ", action.payload);
    const response = yield call(postCartItem, action.payload);
    console.log("fetch data: ", response);
}

export function* removeProductFromCart() {
    yield console.log("Delete!");
}

//Watchers
function* watchFetchCartList() {
    yield takeLatest(types.FETCH_CART_LIST, getCartData);
}
function* watchAddProductToCartList() {
    yield takeEvery(types.ADD_TO_CART, addProductToCart);
}

export default function* cartSaga() {
    yield all([
        watchFetchCartList(),
        watchAddProductToCartList(),
    ])
}