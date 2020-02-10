import { 
  fetchAddressListRequest, fetchAddressListSuccess, fetchAddressListFailure,
  fetchRouteRequest, fetchRouteSuccess, fetchRouteFailure,
} from './actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* addressListSaga() {
  yield takeEvery(fetchAddressListRequest, function* (action) {
    try{
      console.log(action);
      const response = yield call(() => axios.get('addressList'));
      yield put(fetchAddressListSuccess(response.data));
    } catch (error) {
      yield put(fetchAddressListFailure(error));
    }
  })
}

export function* routeSaga() {
  yield takeEvery(fetchRouteRequest, function* (action) {
    try{
      console.log(action);
      const response = yield call(() => axios.get(`route?address1=${action.payload.from}&address2=${action.payload.to}`));
      yield put(fetchRouteSuccess(response.data));
    } catch (error) {
      yield put(fetchRouteFailure(error));
    }
  })
}