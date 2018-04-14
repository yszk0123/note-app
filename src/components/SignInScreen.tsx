import { firebase } from '@firebase/app';
import '@firebase/auth';
import * as React from 'react';
import FirebaseAuth from 'react-firebaseui';

interface Props {
  signIn: boolean;
  onSignIn: () => void;
}

export class SignInScreen extends React.Component<Props> {
  private uiConfig: any;

  constructor(props: Props) {
    super(props);

    this.uiConfig = {
      callbacks: {
        signInSuccess: this.handleFirebaseSignInSuccess
      },
      signInFlow: 'popup',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth!.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth!.FacebookAuthProvider.PROVIDER_ID
      ]
    };
  }

  public render() {
    const { signIn } = this.props;

    if (signIn) {
      return null;
    }

    return (
      <div>
        <FirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth!()}
        />
      </div>
    );
  }

  private handleFirebaseSignInSuccess = () => {
    this.props.onSignIn();
    return false;
  };
}
