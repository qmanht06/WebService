import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducers";
import filterReducer from "./reducers/filterReducer";
import productReducer from "./reducers/productReducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  filters: filterReducer,
  products: productReducer,
});

const store = createStore(rootReducer);

export default store;
