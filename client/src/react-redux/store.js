import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./reducers/cartReducers";
import filterReducer from "./reducers/filterReducer";
import productReducer from "./reducers/productReducers";

import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  orderListReducer,
  orderDeleteReducer,
  orderListReducerAdmin,
} from "./reducers/orderListReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  filters: filterReducer,
  products: productReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderListAdmin: orderListReducerAdmin,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWares))
);

sagaMiddleware.run(rootSaga);

export default store;
