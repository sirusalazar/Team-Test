import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productsReducer from './productsReducer';

const frmReducer = {
  form: formReducer,
};

export default combineReducers({
  productsReducer,
  frmReducer,
});
