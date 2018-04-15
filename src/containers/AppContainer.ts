import { connect } from 'react-redux';
import { App } from '../components/App';
import { RootState } from '../queries/RootModel';

function mapStateToProps(state: RootState) {
  return {
    login: state.user && state.user.displayName,
    init: state.firebase.init,
    text: '' // TODO: state.entities.notes.byId
  };
}

export const AppContainer = connect(mapStateToProps)(App);
