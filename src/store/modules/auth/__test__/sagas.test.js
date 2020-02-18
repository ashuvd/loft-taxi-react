import { call, put } from 'redux-saga/effects';
import { authorizationSaga } from '../sagas';
import { setLoginSuccess } from '../actions';
import { postAuth } from '../api';

describe('authorizationSaga', () => {
  it('should get profile from API and call success action if authenticated', () => {
    const action = { payload: { email: 'ashuv@ashuv.ru', password: 123 }};
    const gen = authorizationSaga(action);

    const response = {data: {success: true}};

    expect(gen.next().value).toEqual(call(postAuth, action.payload));
    expect(gen.next(response).value).toEqual(put(setLoginSuccess(response.data)));
    expect(gen.next().done).toBeTruthy();
  });
});