import { UUID } from '../../types/CommonType';

// State

export type UserState = {
  userId: UUID;
  displayName: string;
} | null;

export enum UserActionType {
  SIGN_UP = 'user/SIGN_UP',
  SIGN_OUT = 'user/SIGN_OUT'
}

// Action

interface SignInAction {
  type: UserActionType.SIGN_UP;
  payload: { userId: UUID; displayName: string };
}

interface SignOutAction {
  type: UserActionType.SIGN_OUT;
}

export type UserAction = SignInAction | SignOutAction;

export const signIn = (userId: UUID, displayName: string): SignInAction => ({
  type: UserActionType.SIGN_UP,
  payload: { userId, displayName }
});

export const signOut = (): SignOutAction => ({ type: UserActionType.SIGN_OUT });
