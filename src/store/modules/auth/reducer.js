import { handleActions } from 'redux-actions';
// import { combineReducers } from 'redux';
import { 
  setLoginRequest, setLoginSuccess, setLoginFailure,
  setRegisterRequest, setRegisterSuccess, setRegisterFailure,
  setProfileRequest, setProfileSuccess, setProfileFailure,
  fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure,
  setCardNumber, setExpiryDate, setCardName, setCvc,
  setLogout
} from './actions';

const user = handleActions(
  {
    [setLoginRequest]: (state) => ({...state}),
    [setLoginSuccess]: (state, action) => ({...state, isAuth: action.payload.success, token: action.payload.token}),
    [setLoginFailure]: (state) => ({...state, isAuth: false}),
    [setRegisterRequest]: (state) => ({...state}),
    [setRegisterSuccess]: (state, action) => ({...state, isAuth: action.payload.success, token: action.payload.token}),
    [setRegisterFailure]: (state) => ({...state, isAuth: false}),
    [setProfileRequest]: (state) => ({...state}),
    [setProfileSuccess]: (state, action) => ({...state, isAuth: action.payload.success}),
    [setProfileFailure]: (state) => ({...state, isAuth: false}),
    [fetchProfileRequest]: (state) => ({...state}),
    [fetchProfileSuccess]: (state, action) => ({...state, cardNumber: action.payload.cardNumber, expiryDate: action.payload.expiryDate, cardName: action.payload.cardName, cvc: action.payload.cvc}),
    [fetchProfileFailure]: (state) => ({...state, isAuth: false}),
    [setLogout]: (state) => ({...state, isAuth: false}),
    [setCardNumber]: (state, action) => ({...state, cardNumber: action.payload.cardNumber}),
    [setExpiryDate]: (state, action) => ({...state, expiryDate: action.payload.expiryDate}),
    [setCardName]: (state, action) => ({...state, cardName: action.payload.cardName}),
    [setCvc]: (state, action) => ({...state, cvc: action.payload.cvc}),
  },
  {
    isAuth: false,
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: ""
  }
)

// Если не использовать handleActions - альтернативный вариант

// function user(state = {isAuth: false}, action) {
//   switch (action.type) {
//     case setLoginRequest.toString():
//       return {...state};
//     case setLoginSuccess.toString():
//       console.log('response -->>', action.payload);
//       return {...state, isAuth: action.payload.success, token: action.payload.token};
//     case setLoginFailure.toString():
//       console.log('error -->>', action.payload);
//       return {...state, isAuth: false};

//     case setRegisterRequest.toString():
//       return {...state};
//     case setRegisterSuccess.toString():
//       console.log('response -->>', action.payload);
//       return {...state, isAuth: action.payload.success, token: action.payload.token};
//     case setRegisterFailure.toString():
//       console.log('error -->>', action.payload);
//       return {...state, isAuth: false};
//     case setLogout.toString():
//       return {...state, isAuth: false};
//     default:
//       return state;
//   };
// }


// Если не использовать модули то нужно возвращать combineReducers
// const reducer = combineReducers({
//   user
// })

// Если не использовать combineReucers - альтернативный вариант

// const reducer = (state = {}, action) => {
//   return {
//     filter: filter(state.filter, action),
//     todos: todos(state.todos, action)
//   }
// };

export default {user};