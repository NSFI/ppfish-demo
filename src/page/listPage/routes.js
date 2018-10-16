import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BasicList from './components/BasicList/';
import CardList from './components/CardList/';
import SearchList from './components/SearchList/';
import TableList from './components/TableList/';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route path="/listPage/basic" component={BasicList} />
        <Route path="/listPage/card" component={CardList} />
        <Route path="/listPage/search" component={SearchList} />
        <Route path="/listPage/table" component={TableList} />
      </Switch>
    );
  }
}
export default App;
