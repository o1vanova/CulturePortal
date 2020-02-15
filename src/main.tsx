import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from 'pages/App';
import Header from 'components/header/Header';

import './main.scss';

ReactDOM.render(
  <BrowserRouter>
  <div>
  <Header />
  <App />
  </div>

  </BrowserRouter>,
  document.getElementById('root')
);
