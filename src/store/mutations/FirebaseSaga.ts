import { firebase } from '@firebase/app';
import { SagaIterator, delay } from 'redux-saga';
import { call, put, race, take } from 'redux-saga/effects';
import { firebaseConfig } from '../../config/firebase';
import { initFirebase } from '../queries/FirebaseModel';
import { UserActionType } from '../queries/UserModel';

export function* initFirebaseSagaBefore(): SagaIterator {
  yield call(firebase.initializeApp, firebaseConfig);
}

export function* initFirebaseSagaAfter(): SagaIterator {
  yield race({
    signUp: take(UserActionType.SIGN_UP),
    cancel: call(delay, 1500)
  });
  yield put(initFirebase());
}
