import { ActionType } from '../constants/ActionType';
import { RootAction, RootState } from '../types';

const initialState: RootState = {
  appName: 'note',
  init: false,
  login: null,
  text: ''
};

type Action = RootAction;

export function reducer(state: RootState = initialState, action: Action) {
  switch (action.type) {
    case ActionType.INIT_FIREBASE:
      return { ...state, init: true };
    case ActionType.SIGN_UP:
      return { ...state, login: action.payload.username };
    case ActionType.SIGN_OUT:
      return { ...state, login: null };
    case ActionType.EDIT:
      return { ...state, text: action.payload.text };
    default:
      return state;
  }
}
