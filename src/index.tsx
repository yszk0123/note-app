import '@firebase/auth';
import '@firebase/firestore';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HomeContainer } from './components/pages';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './store';

const store = configureStore();

function Routes() {
  return <HomeContainer />;
}

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
