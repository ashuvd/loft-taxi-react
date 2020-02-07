import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './modules';
import authMiddlewares from './modules/auth/middlewares';

const createAppStore = () => {
  return createStore(
    reducer, 
    compose(
      applyMiddleware(...authMiddlewares),
      // applyMiddleware(registerMiddleware),
      // applyMiddleware(setProfileMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
    )
  )
}

export default createAppStore;
