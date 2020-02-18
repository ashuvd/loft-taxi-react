import { 
  fetchAddressListRequest, fetchAddressListSuccess, fetchAddressListFailure,
  fetchRouteRequest, fetchRouteSuccess, fetchRouteFailure,
} from './actions';
import { getAddressList, getCoordinates } from './api';
import { takeEvery, call, put, all } from 'redux-saga/effects';

export function* addressListSaga(action) {
  try{
    console.log(action);
    const response = yield call(getAddressList);
    yield put(fetchAddressListSuccess(response.data));
  } catch (error) {
    yield put(fetchAddressListFailure(error));
  }
}

export function* routeSaga(action) {
  try{
    console.log(action);
    const response = yield call(getCoordinates, action.payload.from, action.payload.to);
    yield put(fetchRouteSuccess(response.data));
  } catch (error) {
    yield put(fetchRouteFailure(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(fetchAddressListRequest, addressListSaga),
    takeEvery(fetchRouteRequest, routeSaga),
  ])
};