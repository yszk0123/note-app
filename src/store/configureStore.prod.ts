import { applyMiddleware, createStore } from 'redux';
import { reducer, saga } from '../mutations';
import { createSagaMiddleware } from './createSagaMiddleware';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(saga);

  return store;
};
