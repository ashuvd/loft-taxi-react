import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './modules';
// import authMiddlewares from './modules/auth/middlewares';
import createSagaMiddleware from 'redux-saga';
import rootAuthSaga from './modules/auth/sagas';
import rootAddressSaga from './modules/address/sagas';

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
  sagaMiddleware.run(rootAuthSaga);
  sagaMiddleware.run(rootAddressSaga);
  return store;
}

export default createAppStore;