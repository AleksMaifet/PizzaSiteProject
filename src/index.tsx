import React from 'react';

import 'index.scss';
import './firebase/firebase';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from 'App';
import { store } from 'store/store';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
