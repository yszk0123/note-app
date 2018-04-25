// State

export interface FirebaseState {
  init: boolean;
}

// Action

export enum FirebaseActionType {
  INIT_FIREBASE = 'firebase/INIT_FIREBASE'
}

interface InitFirebaseAction {
  type: FirebaseActionType.INIT_FIREBASE;
}

export type FirebaseAction = InitFirebaseAction;

export const initFirebase = (): InitFirebaseAction => ({
  type: FirebaseActionType.INIT_FIREBASE
});
