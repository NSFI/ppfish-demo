import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Center from './components/Center/Center';
import Basic from './components/Settings/Basic';
import Binding from './components/Settings/Binding';
import NewMessage from './components/Settings/NewMessage';
import Setting from './components/Settings/Setting';
import Safe from './components/Settings/Safe';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route path="/settingPage/center" component={Center} />
        <Switch>
          <Route path="/settingPage/settings/basic" render={props =>
            <Setting {...props}>
              <Basic {...props} />
            </Setting>}
          />
          <Route path="/settingPage/settings/binding" render={props =>
            <Setting {...props}>
              <Binding {...props} />
            </Setting>
          }
          />
          <Route path="/settingPage/settings/newMessage" render={props =>
            <Setting {...props}>
              <NewMessage {...props} />
            </Setting>}
          />

          <Route path="/settingPage/settings/safe" render={props =>
            <Setting {...props}>
              <Safe {...props} />
            </Setting>}
          />
        </Switch>
      </Switch>
    );
  }
}
export default App;

