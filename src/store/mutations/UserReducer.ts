import { UserAction, UserActionType, UserState } from '../queries/UserModel';

export function userReducer(
  state: UserState = null,
  action: UserAction
): UserState {
  switch (action.type) {
    case UserActionType.SIGN_UP:
      return action.payload;
    case UserActionType.SIGN_OUT:
      return null;
    default:
      return state;
  }
}
