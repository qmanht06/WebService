import { createStore, combineReducers, applyMiddleware } from "redux";

import cartReducer from "./reducers/cartReducers";
import filterReducer from "./reducers/filterReducer";
import productReducer from "./reducers/productReducers";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const rootReducer = combineReducers({
  cart: cartReducer,
  filters: filterReducer,
  products: productReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
