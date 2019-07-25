import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS:
      return { ...state, products: action.payload, loading: false };
    case types.LOADING:
      return { ...state, loading: true };
    case types.ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
