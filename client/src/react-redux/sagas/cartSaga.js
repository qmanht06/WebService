import * as types from "../actions/actionTypes";
import { all, put, call, takeLatest } from "redux-saga/effects";
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

//Workers
export function* getCartData() {
    console.log("Worker!")
    const response = yield call(fetchCartData);
    yield console.log("fetch data: ", response);
    yield put({ type: types.SET_CART_LIST, payload: response });
}

//Watchers
function* watchFetchCartList() {
    yield takeLatest(types.FETCH_CART_LIST, getCartData);
}

export default function* cartSaga() {
    yield all([
        watchFetchCartList(),
    ])
}