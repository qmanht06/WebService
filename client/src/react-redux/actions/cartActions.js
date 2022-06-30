import * as types from "./actionTypes";

export const increaseQuantity = (productID) => ({
  type: types.INCREASE_QUANTITY,
  payload: productID,
});

export const decreaseQuantity = (productID) => ({
  type: types.DECREASE_QUANTITY,
  payload: productID,
});

export const addProductToCart = (product) => ({
  type: types.ADD_TO_CART,
  payload: product,
});

export const removeProductFromCart = (productID) => ({
  type: types.REMOVE_FROM_CART,
  payload: productID,
});

export const fetchCartList = () => ({
  type: types.FETCH_CART_LIST,
});

export const setCartList = (data) => ({
  type: types.SET_CART_LIST,
  payload: data,
})

export const totalQuantityChanged = (quantity) => ({
  type: types.CHANGE_TOTAL_QUANTITY,
  payload: quantity,
})