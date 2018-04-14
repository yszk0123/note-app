import { SagaIterator } from 'redux-saga';
import { getContext } from 'redux-saga/effects';

export function* saga(): SagaIterator {
  // TODO
  console.log('called'); // tslint:disable-line no-console
  const firebase = getContext('firebase');
}
