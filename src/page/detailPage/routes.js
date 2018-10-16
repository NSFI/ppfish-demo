import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailPage from './DetailPage';
import AdvancedDetail from './components/AdvancedDetail/';
import BasicDetail from './components/BasicDetail/';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route path="/detailPage/basic" render={props=>
          <DetailPage {...props}>
            <BasicDetail {...props}/>
          </DetailPage>
        }/>
        <Route path="/detailPage/advanced"  render={props=>
          <DetailPage {...props}>
            <AdvancedDetail {...props}/>
          </DetailPage>
        }/>
      </Switch>
    );
  }
}
export default App;
