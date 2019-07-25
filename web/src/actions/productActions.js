import * as types from './actionTypes';
import productsApi from '../api/productsApi';

const loadProducts = () => async (dispatch) => {
  dispatch({
    type: types.LOADING,
  });
  try {
    const products = await productsApi.getProducts();
    dispatch({
      type: types.LOAD_PRODUCTS,
      payload: products,
    });
  } catch (err) {
    dispatch({
      type: types.ERROR,
      payload: err.message,
    });
  }
};

export default loadProducts;
