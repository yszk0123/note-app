import { firebase } from '@firebase/app';
import { SagaIterator, delay, eventChannel } from 'redux-saga';
import { call, fork, put, race, take } from 'redux-saga/effects';
import { initFirebase, signIn, signOut } from '../actions';
import { firebaseConfig } from '../config/firebase';
import { ActionType } from '../constants/ActionType';

const LOGOUT = 'LOGOUT';

function createAuthStateChangedChannel() {
  return eventChannel(emit =>
    firebase.auth!().onAuthStateChanged(user => emit(user || LOGOUT))
  );
}

function* watchAuthStateChanged(): SagaIterator {
  const channel = yield call(createAuthStateChangedChannel);

  try {
    while (true) {
      const user = yield take(channel);
      if (user === LOGOUT) {
        yield put(signOut());
      } else {
        yield put(signIn(user.displayName));
      }
    }
  } finally {
    channel.close();
  }
}

function* init(): SagaIterator {
  yield race({
    signUp: take(ActionType.SIGN_UP),
    cancel: call(delay, 1500)
  });
  yield put(initFirebase());
}

export function* saga(): SagaIterator {
  yield call(firebase.initializeApp, firebaseConfig);
  yield fork(watchAuthStateChanged);
  yield fork(init);
}
