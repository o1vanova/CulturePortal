import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './app/i18n';
import App from './pages/App';
import routes from './constants/routes';

ReactDOM.render(
  <HashRouter basename={routes.LANDING}>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
