import { 
  setLoginRequest, setLoginSuccess, setLoginFailure,
  setRegisterRequest, setRegisterSuccess, setRegisterFailure,
  setProfileRequest, setProfileSuccess, setProfileFailure,
  fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure,
 } from './actions';
import { postAuth, postRegister, postCard, getCard } from './api';
import { takeEvery, call, put, all } from 'redux-saga/effects';

export function* authorizationSaga(action) {
  try{
    console.log(action);
    const response = yield call(postAuth, action.payload);
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
}

export function* registrationSaga(action) {
  try{
    console.log(action);
    const response = yield call(postRegister, action.payload);
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
}

export function* setPaymentSaga(action) {
  try{
    console.log(action);
    const response = yield call(postCard, action.payload);
    yield put(setProfileSuccess(response.data));
  } catch (error) {
    yield put(setProfileFailure(error));
  }
}

export function* fetchPaymentSaga(action) {
  try{
    console.log(action);
    let user = localStorage.user ? JSON.parse(localStorage.user) : {};
    const response = yield call(getCard, user.token);
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
}

export default function* rootSaga() {
  yield all([
    takeEvery(setLoginRequest, authorizationSaga),
    takeEvery(setRegisterRequest, registrationSaga),
    takeEvery(setProfileRequest, setPaymentSaga),
    takeEvery(fetchProfileRequest, fetchPaymentSaga),
  ])
};