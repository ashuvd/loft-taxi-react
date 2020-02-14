import { combineReducers } from 'redux';
import auth from './auth';
import address from './address';

export default combineReducers({
  user: auth,
  addressList: address
});