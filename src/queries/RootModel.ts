import { FirebaseAction, FirebaseState } from './FirebaseModel';
import { NoteAction, NoteEntity } from './NoteModel';
import { UserAction, UserState } from './UserModel';

export interface RootState {
  firebase: FirebaseState;
  user: UserState;
  entities: {
    notes: NoteEntity;
  };
}

export type RootAction = UserAction | NoteAction | FirebaseAction;
