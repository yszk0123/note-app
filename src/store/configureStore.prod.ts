import { applyMiddleware, createStore } from 'redux';
import { reducer } from '../reducers';
import { saga } from '../sagas';
import { createSagaMiddleware } from './createSagaMiddleware';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(saga);

  return store;
};
