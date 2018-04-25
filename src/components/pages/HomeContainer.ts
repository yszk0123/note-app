import { connect } from 'react-redux';
import {
  RootState,
  selectFirebase,
  selectNotes,
  selectUser
} from '../../store';
import { Home } from './Home';

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

export const HomeContainer = connect(mapStateToProps)(Home);
