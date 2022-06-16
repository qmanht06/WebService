import cartSaga from './cartSaga';
import productSaga from './productSaga';
import { spawn } from 'redux-saga/effects'

export default function* rootSaga() {
    yield spawn(cartSaga)
    yield spawn(productSaga)
}