import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  products: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
