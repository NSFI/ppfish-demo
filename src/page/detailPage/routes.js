import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Title from '../../components/Title';
import AdvancedDetail from './components/AdvancedDetail/';
import BasicDetail from './components/BasicDetail/';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  const basicList = [{ conditions: 'basic', result: '基础详情页', }, { conditions: 'advanced', result: '高级详情页' }];
    return (
      <Switch>
        <Route path="/detailPage/basic" render={props=>{
          const defaultProps = {
            ...props,
            basicList
          }
          return <Title {...defaultProps}>
          <BasicDetail {...props}/>
        </Title>
        }
        }/>
        <Route path="/detailPage/advanced"  render={props=>{
          const defaultProps = {
            ...props,
            basicList
          }
          return <Title {...defaultProps}>
          <AdvancedDetail {...props}/>
        </Title>
        }
        }/>
      </Switch>
    );
  }
}
export default App;
