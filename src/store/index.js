import { createStore, compose, applyMiddleware } from 'redux';
import reducer, { rootSaga } from './modules';
// import authMiddlewares from './modules/auth/middlewares';
import createSagaMiddleware from 'redux-saga';

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
  sagaMiddleware.run(rootSaga);
  
  return store;
}

export default createAppStore;