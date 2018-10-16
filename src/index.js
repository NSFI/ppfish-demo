import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <Route component={App}/>
  </Router>
  , document.getElementById('root')
);