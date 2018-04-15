import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import sagaMiddlewareFactory from 'redux-saga';
import { reducer, saga } from '../mutations';

export const configureStore = () => {
  const sagaMiddleware = sagaMiddlewareFactory();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, createLogger())
  );
  sagaMiddleware.run(saga);

  return store;
};
