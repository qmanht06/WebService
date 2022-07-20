import axios from "axios";
import {
  ORDERS_LIST_FAIL,
  ORDERS_LIST_REQUEST,
  ORDERS_LIST_SUCCESS,
} from "../constants/ordersConstants";

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDERS_LIST_REQUEST,
    });

    //get userInfo from state
    const {
      userLogin: { userInfo },
    } = getState();

    //Sent request to get all note belong to this token to server
    const config = {
      header: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders`, config);

    //-----------------------
    dispatch({
      type: ORDERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ORDERS_LIST_FAIL,
      payload: message,
    });
  }
};
