import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.less';
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import './scss/App.scss';
import { store, persistor } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from 'app/router';
import 'app/lang';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
