import { FirebaseAction, FirebaseState } from './FirebaseModel';
import { NoteAction, NoteEntity, NoteState } from './NoteModel';
import { UserAction, UserState } from './UserModel';

export interface RootState {
  firebase: FirebaseState;
  user: UserState;
  entities: {
    notes: NoteEntity;
  };
}

export type RootAction = UserAction | NoteAction | FirebaseAction;

// Selector

export const selectFirebase = (state: RootState): FirebaseState =>
  state.firebase;

export const selectUser = (state: RootState): UserState => state.user;

export const selectNotes = (state: RootState): NoteState[] => {
  const { byId, ids } = state.entities.notes;
  return ids.map(id => byId[id]);
};
