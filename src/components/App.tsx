import * as React from 'react';
import './App.css';

interface Props {
  appName: string;
}

export const App: React.SFC<Props> = ({ appName }) => {
  return <div>{appName}</div>;
};
