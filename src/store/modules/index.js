import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth, { sagas as authSagas } from './auth';
import address, { sagas as addressSagas } from './address';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user: auth,
  addressList: address,
  form: formReducer
});

export function* rootSaga() {
  yield fork(authSagas);
  yield fork(addressSagas);
}