import * as types from "../actions/actionTypes";
import * as shoes from "../../data/ImageShoe";

// const initialState = {
//   cartList: [
//     {
//       id: 1,
//       name: "Shoe_01 is the best shoe I have in the store",
//       url: shoes.SHOE_01,
//       price: 100000,
//       quantity: 3,
//     },
//     { id: 2, name: "Shoe_02", url: shoes.SHOE_02, price: 150000, quantity: 4 },
//     { id: 3, name: "Shoe_03", url: shoes.SHOE_03, price: 200000, quantity: 2 },
//     { id: 4, name: "Shoe_04", url: shoes.SHOE_04, price: 300000, quantity: 1 },
//   ],
// };

const initialState = {
  cartList: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CART_LIST:
      return {
        ...state,
        cartList: action.payload,
      };
    case types.INCREASE_QUANTITY:
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item.id === action.payload
            ? item.quantity < 12
              ? { ...item, quantity: item.quantity + 1 }
              : item
            : item
        ),
      };
    case types.DECREASE_QUANTITY:
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item.id === action.payload
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
            : item
        ),
      };
    case types.ADD_TO_CART:
      let checkExist = state.cartList.find(item => item.id === action.payload.id);
      if (checkExist) {
        return {
          ...state,
          cartList: state.cartList.map((item) => item.id === checkExist.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item)
        }
      } else {
        return {
          ...state,
          cartList: [...state.cartList, action.payload]
        }
      }
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
