import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './modules';
// import authMiddlewares from './modules/auth/middlewares';
import createSagaMiddleware from 'redux-saga';
import { authorizationSaga, registrationSaga, setPaymentSaga, fetchPaymentSaga } from './modules/auth/sagas';
import { addressListSaga, routeSaga } from './modules/address/sagas';

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
  const store =  createStore(
    reducer, 
    compose(
      applyMiddleware(sagaMiddleware),
      // applyMiddleware(...authMiddlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
    )
  )
  sagaMiddleware.run(authorizationSaga);
  sagaMiddleware.run(registrationSaga);
  sagaMiddleware.run(setPaymentSaga);
  sagaMiddleware.run(fetchPaymentSaga);
  sagaMiddleware.run(addressListSaga);
  sagaMiddleware.run(routeSaga);

  return store;
}

export default createAppStore;