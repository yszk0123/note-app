import {
  FirebaseAction,
  FirebaseActionType,
  FirebaseState
} from '../queries/FirebaseModel';

const initialState = {
  init: false
};

export function firebaseReducer(
  state: FirebaseState = initialState,
  action: FirebaseAction
): FirebaseState {
  switch (action.type) {
    case FirebaseActionType.INIT_FIREBASE:
      return { ...state, init: true };
    default:
      return state;
  }
}
