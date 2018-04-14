import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import sagaMiddlewareFactory from 'redux-saga';
import { reducer } from '../reducers';
import { saga } from '../sagas';

export const configureStore = () => {
  const sagaMiddleware = sagaMiddlewareFactory();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, createLogger())
  );
  sagaMiddleware.run(saga);

  return store;
};
