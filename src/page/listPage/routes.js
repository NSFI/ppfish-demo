import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BasicList from './components/BasicList/';
import CardList from './components/CardList/';
import SearchList from './components/SearchList/';
import TableList from './components/TableList/';
import Title from '../../components/Title';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const basicList = [
      {conditions:'basic',result:'基础列表'},
      {conditions:'card',result:'卡片列表'},
      {conditions:'search',result:'搜索列表'},
      {conditions:'table',result:'表格列表'},
  ]
    return (
      <Switch>
        <Route path="/listPage/basic" render={props=>
          {
            const defaultProps = {
              ...props,
              basicList
            }
            return <Title {...defaultProps}>
              <BasicList {...props}/>
            </Title>
          }
        }/>
        <Route path="/listPage/card" render={props=>
          {
            const defaultProps = {
              ...props,
              basicList
            }
            return <Title {...defaultProps}>
              <CardList {...props}/>
            </Title>
          }
        }/>
        <Route path="/listPage/search" render={props=>
          {
            const defaultProps = {
              ...props,
              basicList
            }
            return <Title {...defaultProps}>
              <SearchList {...props}/>
            </Title>
          }
        }/>
        <Route path="/listPage/table" render={props=>
          {
            const defaultProps = {
              ...props,
              basicList
            }
            return <Title {...defaultProps}>
              <TableList {...props}/>
            </Title>
          }
        }/>
      </Switch>
    );
  }
}
export default App;
