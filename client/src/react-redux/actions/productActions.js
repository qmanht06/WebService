import * as types from "./actionTypes";

export const addProduct = (productItem) => ({
  type: types.ADD_PRODUCT,
  payload: productItem,
});

export const setProductList = (data) => ({
  type: types.SET_PRODUCT_LIST,
  payload: data,
});

export const fetchProductList = (productId) => ({
  type: types.FETCH_PRODUCT_LIST,
  payload: productId,
})