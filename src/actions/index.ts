import { ActionType } from '../constants/ActionType';
import { InitFirebaseAction, SignInAction, SignOutAction } from '../types';

export const initFirebase = (): InitFirebaseAction => ({
  type: ActionType.INIT_FIREBASE
});

export const signIn = (username: string): SignInAction => ({
  type: ActionType.SIGN_UP,
  payload: { username }
});

export const signOut = (): SignOutAction => ({ type: ActionType.SIGN_OUT });
