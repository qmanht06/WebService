import { call, put, all, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import axios from "axios";

//Async functions
async function fetchData() {
    try {
        const response = await axios.get('/api/products');
        console.log("axios res: ", response);
        if (response && response.data ){
            return response.data;
        } else return [];
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
    yield console.log("fetch data: ", response);
    yield put({ type: types.SET_PRODUCT_LIST, payload: response });
}

//Watchers
function* watchFetchProductList() {
    yield takeLatest(types.FETCH_PRODUCT_LIST, fetchProductList);
}


//rootSaga
export default function* productSaga() {
    yield all([
        watchFetchProductList(),
    ]);
}