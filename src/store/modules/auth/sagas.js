import { 
  setLoginRequest, setLoginSuccess, setLoginFailure,
  setRegisterRequest, setRegisterSuccess, setRegisterFailure,
  setProfileRequest, setProfileSuccess, setProfileFailure,
  fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure,
  fetchAddressListRequest, fetchAddressListSuccess, fetchAddressListFailure,
  fetchRouteRequest, fetchRouteSuccess, fetchRouteFailure,
 } from './actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* authorizationSaga() {
  yield takeEvery(setLoginRequest, function* (action) {
    try{
      console.log(action);
      const response = yield call(() => axios.post('auth', action.payload));
      const user = {
        isAuth: response.data.success,
        token: response.data.token,
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: '',
      }
      localStorage.user = JSON.stringify(user);
      yield put(setLoginSuccess(response.data));
    } catch (error) {
      yield put(setLoginFailure(error));
    }
  })
}

export function* registrationSaga() {
  yield takeEvery(setRegisterRequest, function* (action) {
    try{
      console.log(action);
      const response = yield call(() => axios.post('register', action.payload));
      const user = {
        isAuth: response.data.success,
        token: response.data.token,
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: '',
      }
      localStorage.user = JSON.stringify(user);
      yield put(setRegisterSuccess(response.data));
    } catch (error) {
      yield put(setRegisterFailure(error));
    }
  })
}

export function* setPaymentSaga() {
  yield takeEvery(setProfileRequest, function* (action) {
    try{
      console.log(action);
      const response = yield call(() => axios.post('card', action.payload));
      yield put(setProfileSuccess(response.data));
    } catch (error) {
      yield put(setProfileFailure(error));
    }
  })
}

export function* fetchPaymentSaga() {
  yield takeEvery(fetchProfileRequest, function* (action) {
    try{
      console.log(action);
      let user = localStorage.user ? JSON.parse(localStorage.user) : {};
      const response = yield call(() => axios.get(`card?token=${user.token}`));
      user = {
        isAuth: user.isAuth,
        token: user.token,
        cardNumber: response.data.cardNumber,
        expiryDate: response.data.expiryDate,
        cardName: response.data.cardName,
        cvc: response.data.cvc,
      }
      localStorage.user = JSON.stringify(user);
      yield put(fetchProfileSuccess(response.data));
    } catch (error) {
      yield put(fetchProfileFailure(error));
    }
  })
}