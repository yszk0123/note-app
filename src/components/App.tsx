import * as React from 'react';
import './App.css';
import { SignInScreen } from './SignInScreen';

interface Props {
  appName: string;
  login: string | null;
  init: boolean;
  text: string;
}

const Loading = () => <div>Loading...</div>;

export const App: React.SFC<Props> = ({ appName, login, init, text }) => {
  if (!init) {
    return <Loading />;
  }
  if (!login) {
    return <SignInScreen />;
  }

  return (
    <div>
      <h1>{appName}</h1>
      Hello, {login}!
      <textarea value={text} />
    </div>
  );
};
