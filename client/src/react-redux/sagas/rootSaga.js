import { all, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";

//Async functions
// async function fetchData(productId) {
//     const response = await productApi.get(productId);
//     console.log(response);
//     return response;
// }

//Workers
export function* fetchProductList(action) {
    yield console.log("Worker!")
    // yield put({ type: types.SET_PRODUCT_LIST, payload: response });
}

//Watchers
function* watchFetchProductList() {
    yield takeLatest(types.FETCH_PRODUCT_LIST, fetchProductList);
}


//rootSaga
export default function* rootSaga() {
    yield all([
        watchFetchProductList(),
    ]);
}