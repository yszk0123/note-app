import { firebase } from '@firebase/app';
import * as React from 'react';
import { FirebaseAuth as FirebaseAuthUI } from 'react-firebaseui';

const uiConfig = {
  callbacks: {
    signInSuccess: () => false
  },
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth!.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth!.FacebookAuthProvider.PROVIDER_ID
  ]
};

export const SignInScreen = () => {
  return <FirebaseAuthUI uiConfig={uiConfig} firebaseAuth={firebase.auth!()} />;
};
