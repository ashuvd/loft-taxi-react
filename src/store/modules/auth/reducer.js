import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { 
  setLoginRequest, setLoginSuccess, setLoginFailure,
  setRegisterRequest, setRegisterSuccess, setRegisterFailure,
  setProfileRequest, setProfileSuccess, setProfileFailure,
  fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure,
  setCardNumber, setExpiryDate, setCardName, setCvc,
  setLogout
} from './actions';

// const user = handleActions(
//   {
//     [setLoginRequest]: (state) => state,
//     [setLoginSuccess]: (state, action) => ({...state, isAuth: action.payload.success, token: action.payload.token}),
//     [setLoginFailure]: (state) => ({...state, isAuth: false}),
//     [setRegisterRequest]: (state) => state,
//     [setRegisterSuccess]: (state, action) => ({...state, isAuth: action.payload.success, token: action.payload.token}),
//     [setRegisterFailure]: (state) => ({...state, isAuth: false}),
//     [setProfileRequest]: (state) => state,
//     [setProfileSuccess]: (state, action) => ({...state, isAuth: action.payload.success}),
//     [setProfileFailure]: (state) => ({...state, isAuth: false}),
//     [fetchProfileRequest]: (state) => state,
//     [fetchProfileSuccess]: (state, action) => {
//       const cardNumber = action.payload.cardNumber || "";
//       const expiryDate = action.payload.expiryDate || "";
//       const cardName = action.payload.cardName || "";
//       const cvc = action.payload.cvc || "";
//       console.log('success=>', action.payload);
//       return {...state, cardNumber, expiryDate, cardName, cvc}
//     },
//     [fetchProfileFailure]: (state) => ({...state, isAuth: false}),
//     [setLogout]: (state) => ({...state, isAuth: false}),
//     [setCardNumber]: (state, action) => ({...state, cardNumber: action.payload.cardNumber}),
//     [setExpiryDate]: (state, action) => ({...state, expiryDate: action.payload.expiryDate}),
//     [setCardName]: (state, action) => ({...state, cardName: action.payload.cardName}),
//     [setCvc]: (state, action) => ({...state, cvc: action.payload.cvc}),
//   },
//   {
//     isAuth: false,
//     cardNumber: "",
//     expiryDate: "",
//     cardName: "",
//     cvc: ""
//   }
// )

const isAuth = handleActions(
  {
    [setLoginSuccess]: (state, action) => action.payload.success,
    [setLoginFailure]: (state) => false,
    [setRegisterSuccess]: (state, action) => action.payload.success,
    [setRegisterFailure]: (state) => false,
    [setProfileSuccess]: (state, action) => action.payload.success,
    [setProfileFailure]: (state) => false,
    [fetchProfileFailure]: (state) => false,
    [setLogout]: (state) => false,
  },
  false
)

const token = handleActions(
  {
    [setLoginSuccess]: (state, action) => action.payload.token,
    [setRegisterSuccess]: (state, action) => action.payload.token,
  },
  ""
)

const cardNumber = handleActions(
  {
    [fetchProfileSuccess]: (state, action) => action.payload.cardNumber || "",
    [setCardNumber]: (state, action) => action.payload.cardNumber,
  },
  ""
)

const expiryDate = handleActions(
  {
    [fetchProfileSuccess]: (state, action) => action.payload.expiryDate || "",
    [setExpiryDate]: (state, action) => action.payload.expiryDate,
  },
  ""
)

const cardName = handleActions(
  {
    [fetchProfileSuccess]: (state, action) => action.payload.cardName || "",
    [setCardName]: (state, action) => action.payload.cardName,
  },
  ""
)

const cvc = handleActions(
  {
    [fetchProfileSuccess]: (state, action) => action.payload.cvc || "",
    [setCvc]: (state, action) => action.payload.cvc,
  },
  ""
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
const reducer = combineReducers({
  isAuth, token, cardNumber, expiryDate, cardName, cvc
})
export default reducer;

// Если не использовать combineReucers - альтернативный вариант

// const reducer = (state = {}, action) => {
//   return {
//     filter: filter(state.filter, action),
//     todos: todos(state.todos, action)
//   }
// };