import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { 
  fetchAddressListRequest, fetchAddressListSuccess, fetchAddressListFailure,
  fetchRouteRequest, fetchRouteSuccess, fetchRouteFailure,
} from './actions';

// const addressList = handleActions(
//   {
//     [fetchAddressListRequest]: (state) => state,
//     [fetchAddressListSuccess]: (state, action) => ({...state, addresses: action.payload.addresses, error: false}),
//     [fetchAddressListFailure]: (state) => ({...state, addresses: [], error: true}),
//     [fetchRouteRequest]: (state) => state,
//     [fetchRouteSuccess]: (state, action) => ({...state, coordinates: action.payload, error: false}),
//     [fetchRouteFailure]: (state) => ({...state, coordinates: [], error: true}),
//   },
//   {
//     addresses: [],
//     coordinates: [],
//     error: false
//   }
// )

const addresses = handleActions(
  {
    [fetchAddressListSuccess]: (state, action) => action.payload.addresses,
    [fetchAddressListFailure]: (state) => [],
  },
  []
)

const coordinates = handleActions(
  {
    [fetchRouteSuccess]: (state, action) => action.payload,
    [fetchRouteFailure]: (state) => [],
  },
  []
)

const error = handleActions(
  {
    [fetchAddressListSuccess]: (state, action) => false,
    [fetchAddressListFailure]: (state) => true,
    [fetchRouteSuccess]: (state, action) => false,
    [fetchRouteFailure]: (state) => true,
  },
  false
)

const reducer = combineReducers({
  addresses, coordinates, error
})

export default reducer;