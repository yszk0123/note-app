import { connect } from 'react-redux';
import { App } from '../components/App';
import {
  RootState,
  selectFirebase,
  selectNotes,
  selectUser
} from '../queries/RootModel';

function mapStateToProps(state: RootState) {
  const user = selectUser(state);
  const firebase = selectFirebase(state);
  const notes = selectNotes(state);

  return {
    user,
    init: firebase.init,
    notes
  };
}

export const AppContainer = connect(mapStateToProps)(App);
