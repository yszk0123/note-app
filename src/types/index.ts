import { ActionType } from '../constants/ActionType';

export interface SignInAction {
  type: ActionType.SIGN_UP;
  payload: { username: string };
}

export interface SignOutAction {
  type: ActionType.SIGN_OUT;
}

export interface EditAction {
  type: ActionType.EDIT;
  payload: { text: string };
}

export interface InitFirebaseAction {
  type: ActionType.INIT_FIREBASE;
}

export type RootAction =
  | SignInAction
  | SignOutAction
  | EditAction
  | InitFirebaseAction;

export interface RootState {
  appName: string;
  login: string | null;
  init: boolean;
  text: string;
}
