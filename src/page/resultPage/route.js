import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Success from './components/success';
import Fail from './components/fail';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route path="/resultPage/success" component={Success} />
        <Route path="/resultPage/fail" component={Fail} />
      </Switch>
    );
  }
}
export default App;

