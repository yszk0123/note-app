import * as React from 'react';
import { NoteState, UserState } from '../../store';
import { SignInScreen } from '../molecules';
import './Home.css';

interface Props {
  user: UserState;
  init: boolean;
  notes: NoteState[];
}

const Loading = () => <div>Loading...</div>;

export const Home: React.SFC<Props> = ({ user, init, notes }) => {
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
