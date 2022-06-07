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
