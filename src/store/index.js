import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './modules';
import { authMiddleware, registerMiddleware, setProfileMiddleware, fetchProfileMiddleware } from './modules/auth';

const createAppStore = () => {
  return createStore(
    reducer, 
    compose(
      applyMiddleware(authMiddleware, registerMiddleware, setProfileMiddleware, fetchProfileMiddleware),
      // applyMiddleware(registerMiddleware),
      // applyMiddleware(setProfileMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
    )
  )
}

export default createAppStore;
