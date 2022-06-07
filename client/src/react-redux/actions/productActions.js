import * as types from "./actionTypes";

export const addProduct = (productItem) => ({
  type: types.ADD_PRODUCT,
  payload: productItem,
});

export const setProductList = (data) => ({
  type: types.SET_PRODUCT_LIST,
  payload: data,
});
