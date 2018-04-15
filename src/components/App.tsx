import * as React from 'react';
import './App.css';
import { SignInScreen } from './SignInScreen';

interface Props {
  login: string | null;
  init: boolean;
  text: string;
}

const Loading = () => <div>Loading...</div>;

export const App: React.SFC<Props> = ({ login, init, text }) => {
  if (!init) {
    return <Loading />;
  }
  if (!login) {
    return <SignInScreen />;
  }

  return (
    <div>
      Hello, {login}!
      <textarea value={text} />
    </div>
  );
};
