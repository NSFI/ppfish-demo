import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Login from './page/login'
import './index.css';

ReactDOM.render(
  <Router>
    <Route render={props => {
      if (props.location.pathname === '/login/' || props.location.pathname === '/login'||props.location.pathname === '/') {
        return (
          <Login {...props} />
        )
      } else {
        return (
          <App {...props} />
        )
      }
    }} />
  </Router>
  , document.getElementById('root')
);