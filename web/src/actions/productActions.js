import * as types from "./actionTypes";
import NotificationHandler from "../utils/NotificationHandler";
import productsApi from "../api/productsApi";

const loadProducts = () => async dispatch => {
  dispatch({
    type: types.LOADING
  });
  try {
    const products = await productsApi.getProducts();
    dispatch({
      type: types.LOAD_PRODUCTS,
      payload: products
    });
  } catch (err) {
    NotificationHandler.showError(
      "can't connect with server, working with local data..."
    );
    dispatch({
      type: types.LOAD_PRODUCTS,
      payload: productsApi.getLocalProducts()
    });
    dispatch({
      type: types.ERROR,
      payload: err.message
    });
  }
};

export default loadProducts;
