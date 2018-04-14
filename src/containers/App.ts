import { connect } from 'react-redux';
import { App as Component } from '../components/App';
import { State } from '../types';

function mapStateToProps(state: State) {
  return { appName: state.appName };
}

export const App = connect(mapStateToProps)(Component);
