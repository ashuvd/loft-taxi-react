import { combineReducers } from 'redux';
import auth from './auth';
import address from './address';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user: auth,
  addressList: address,
  form: formReducer
});