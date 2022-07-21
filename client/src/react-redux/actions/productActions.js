import * as types from "./actionTypes";

export const addProduct = (productItem) => ({
  type: types.ADD_PRODUCT,
  payload: productItem,
});

export const setProductList = (data) => ({
  type: types.SET_PRODUCT_LIST,
  payload: data,
});

export const fetchProductList = (pagination) => ({
  type: types.FETCH_PRODUCT_LIST,
  payload: pagination,
});

export const getSingleProduct = (productId) => ({
  type: types.GET_SINGLE_PRODUCT,
  payload: productId,
});

export const setSingleProduct = (product) => ({
  type: types.GET_SINGLE_PRODUCT,
  payload: product,
});

export const fetchAllProducts = () => ({
  type: types.FETCH_ALL_PRODUCTS,
});

export const setAllProducts = (data) => ({
  type: types.SET_ALL_PRODUCTS,
  payload: data,
});

// export const fetchSingleProduct = () => ({
//   type: types.FETCH_SINGLE_PRODUCT,
// });

// export const setSingleProductAdmin = (data) => ({
//   type: types.SET_SINGLE_PRODUCT_ADMIN,
//   payload: data,
// });
