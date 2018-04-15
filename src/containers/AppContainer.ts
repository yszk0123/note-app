import { connect } from 'react-redux';
import { App } from '../components/App';
import { RootState } from '../types';

function mapStateToProps(state: RootState) {
  return {
    appName: state.appName,
    login: state.login,
    init: state.init,
    text: state.text
  };
}

export const AppContainer = connect(mapStateToProps)(App);
