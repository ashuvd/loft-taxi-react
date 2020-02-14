import { createAction } from 'redux-actions';

export const fetchAddressListRequest = createAction("FETCH_ADDRESS_LIST_REQUEST");
export const fetchAddressListSuccess = createAction("FETCH_ADDRESS_LIST_SUCCESS");
export const fetchAddressListFailure = createAction("FETCH_ADDRESS_LIST_FAILURE");

export const fetchRouteRequest = createAction("FETCH_ROUTE_REQUEST");
export const fetchRouteSuccess = createAction("FETCH_ROUTE_SUCCESS");
export const fetchRouteFailure = createAction("FETCH_ROUTE_FAILURE");