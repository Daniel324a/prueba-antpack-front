import React from 'react';
import ReactDOM from 'react-dom';

import { AppRouter } from './router/AppRouter';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
