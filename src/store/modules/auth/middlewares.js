import { 
  setLoginRequest, setLoginSuccess, setLoginFailure,
  setRegisterRequest, setRegisterSuccess, setRegisterFailure,
  setProfileRequest, setProfileSuccess, setProfileFailure,
  fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure,
 } from './actions';
import axios from 'axios';
// ссылка на store, ссылка на следующий middleware(next), ссылка на текущий action
export const authMiddleware = (store) => (next) => (action) => {
  console.log(action)
  if (setLoginRequest.toString() === action.type) {
    axios.post('auth', action.payload)
    .then(response => {
      const user = {
        isAuth: response.data.success,
        token: response.data.token
      }
      localStorage.user = JSON.stringify(user);
      store.dispatch(setLoginSuccess(response.data));
    })
    .catch(error => {
      store.dispatch(setLoginFailure(error));
    })
  }
  return next(action);
}

export const registerMiddleware = (store) => (next) => (action) => {
  if (setRegisterRequest.toString() === action.type) {
    axios.post('register', action.payload)
    .then(response => {
      store.dispatch(setRegisterSuccess(response.data));
    })
    .catch(error => {
      store.dispatch(setRegisterFailure(error));
    })
  }
  return next(action);
}

export const setProfileMiddleware = (store) => (next) => (action) => {
  if (setProfileRequest.toString() === action.type) {
    axios.post('card', action.payload)
    .then(response => {
      store.dispatch(setProfileSuccess(response.data));
    })
    .catch(error => {
      store.dispatch(setProfileFailure(error));
    })
  }
  return next(action);
}

export const fetchProfileMiddleware = (store) => (next) => (action) => {
  if (fetchProfileRequest.toString() === action.type) {
    axios.get(`card?token=${action.payload}`)
    .then(response => {
      store.dispatch(fetchProfileSuccess(response.data));
    })
    .catch(error => {
      store.dispatch(fetchProfileFailure(error));
    })
  }
  return next(action);
}

export default [authMiddleware, registerMiddleware, setProfileMiddleware, fetchProfileMiddleware];
