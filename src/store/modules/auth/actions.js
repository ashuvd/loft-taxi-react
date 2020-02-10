import { createAction } from 'redux-actions';

// Если использовать константы - альтернативный вариант

// export const SET_LOGIN = "SET_LOGIN";
// export const SET_LOGOUT = "SET_LOGOUT";

export const setLoginRequest = createAction("SET_LOGIN_REQUEST");
export const setLoginSuccess = createAction("SET_LOGIN_SUCCESS");
export const setLoginFailure = createAction("SET_LOGIN_FAILURE");

export const setRegisterRequest = createAction("SET_REGISTER_REQUEST");
export const setRegisterSuccess = createAction("SET_REGISTER_SUCCESS");
export const setRegisterFailure = createAction("SET_REGISTER_FAILURE");

export const setProfileRequest = createAction("SET_PROFILE_REQUEST");
export const setProfileSuccess = createAction("SET_PROFILE_SUCCESS");
export const setProfileFailure = createAction("SET_PROFILE_FAILURE");

export const setCardNumber = createAction("SET_CARD_NUMBER");
export const setExpiryDate = createAction("SET_EXPIRY_DATE");
export const setCardName = createAction("SET_CARD_NAME");
export const setCvc = createAction("SET_CVC");

export const fetchProfileRequest = createAction("FETCH_PROFILE_REQUEST");
export const fetchProfileSuccess = createAction("FETCH_PROFILE_SUCCESS");
export const fetchProfileFailure = createAction("FETCH_PROFILE_FAILURE");

export const fetchAddressListRequest = createAction("FETCH_ADDRESS_LIST_REQUEST");
export const fetchAddressListSuccess = createAction("FETCH_ADDRESS_LIST_SUCCESS");
export const fetchAddressListFailure = createAction("FETCH_ADDRESS_LIST_FAILURE");

export const fetchRouteRequest = createAction("FETCH_ROUTE_REQUEST");
export const fetchRouteSuccess = createAction("FETCH_ROUTE_SUCCESS");
export const fetchRouteFailure = createAction("FETCH_ROUTE_FAILURE");

export const setLogout = createAction("SET_LOGOUT");

// Если не использовать createAction - альтернативный вариант

// export const setLogin = (email, password) => ({
//   type: SET_LOGIN,
//   email,
//   password
// })

// export const setLogout = () => ({
//   type: SET_LOGOUT
// })
