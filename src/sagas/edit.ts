import { firebase } from '@firebase/app';
import { FirebaseFirestore, QuerySnapshot } from '@firebase/firestore-types';
import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { edit } from '../actions';

export function* watchEdit() {
  yield call(delay, 2000);
  const db: FirebaseFirestore = yield call(firebase.firestore!);
  const query = db.collection('notes');
  console.log('query', query); // tslint:disable-line
  const snapshot: QuerySnapshot = yield call([query, query.get]);
  put(edit(snapshot.docs[0].data().text));
}
