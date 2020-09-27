import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollToTop from './utils/ScrollToTop';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
