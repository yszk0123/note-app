import * as React from 'react';
import { NoteState } from '../store/queries/NoteModel';
import { UserState } from '../store/queries/UserModel';
import './App.css';
import { SignInScreen } from './SignInScreen';

interface Props {
  user: UserState;
  init: boolean;
  notes: NoteState[];
}

const Loading = () => <div>Loading...</div>;

export const App: React.SFC<Props> = ({ user, init, notes }) => {
  if (!init) {
    return <Loading />;
  }
  if (!user) {
    return <SignInScreen />;
  }

  return (
    <div>
      Hello, {user.displayName}!
      {notes.map(note => note && <div key={note.noteId}>{note.text}</div>)}
    </div>
  );
};
