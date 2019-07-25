import * as types from './actionTypes';
import productsApi from '../api/productsApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export const loadProducts = () => async (dispatch) => {
  try {
    dispatch(beginAjaxCall());
    const products = await productsApi.getProducts();
    dispatch({
      type: types.LOAD_PRODUCTS_SUCCESS,
      payload: products,
    });
  } catch (err) {
    dispatch(ajaxCallError());
    throw err;
  }
};

/* export function loadProducts() {
  return dispatch => dispatch(productsApi.getProducts());
   return (dispatch) => {
    dispatch(beginAjaxCall());
    return productsApi
      .getProducts()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch((error) => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
} */
