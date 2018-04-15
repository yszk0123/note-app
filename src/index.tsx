import '@firebase/auth';
import '@firebase/firestore';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from './containers/AppContainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
