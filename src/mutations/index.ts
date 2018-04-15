import { combineReducers } from 'redux';
import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { watchAuthStateSaga } from '../mutations/AuthSaga';
import {
  initFirebaseSagaAfter,
  initFirebaseSagaBefore
} from '../mutations/FirebaseSaga';
import { RootState } from '../queries/RootModel';
import { firebaseReducer } from './FirebaseReducer';
import { noteEntityReducer } from './NoteReducer';
import { userReducer } from './UserReducer';

export const reducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  user: userReducer,
  entities: combineReducers<RootState>({
    notes: noteEntityReducer
  })
});

export function* saga(): SagaIterator {
  yield fork(initFirebaseSagaBefore);
  yield fork(watchAuthStateSaga);
  yield fork(initFirebaseSagaAfter);
}
