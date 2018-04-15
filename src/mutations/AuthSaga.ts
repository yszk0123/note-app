import { firebase } from '@firebase/app';
import { SagaIterator, eventChannel } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { signIn, signOut } from '../queries/UserModel';

const LOGOUT = 'LOGOUT';

function createAuthStateChangedChannel() {
  return eventChannel(emit =>
    firebase.auth!().onAuthStateChanged(user => emit(user || LOGOUT))
  );
}

export function* watchAuthStateSaga(): SagaIterator {
  const channel = yield call(createAuthStateChangedChannel);

  try {
    while (true) {
      const user = yield take(channel);
      if (user === LOGOUT) {
        yield put(signOut());
      } else {
        yield put(signIn(user.userId, user.displayName));
      }
    }
  } finally {
    channel.close();
  }
}
