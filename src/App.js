import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'ppfish';
import Dashboard from './page/dashboard/Dashborad.js';
import DetailPage from './page/detailPage/DetailPage.js';
import FormPage from './page/formPage/FormPage.js';
import ListPage from './page/listPage/ListPage.js';
import './App.css'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu key="sub1" title={<span><Icon type="demo-play" />首页</span>}>
              <Menu.Item key="1">
                <Icon type="demo-play" />
                <span>
                  <Link to="/">首页</Link>
                </span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="demo-play" />表单页</span>}>
              <Menu.Item key="2">
                <Icon type="demo-play" />
                <span>
                  <Link to="/form">表单页</Link>
                </span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="demo-play" />列表页</span>}>
              <Menu.Item key="3">
                <Icon type="demo-play" />
                <span>
                  <Link to="/list">列表页</Link>
                </span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="demo-play" />详情页</span>}>
              <Menu.Item key="4">
                <Icon type="demo-play" />
                <span>
                  <Link to="/detail">详情页</Link>
                </span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <div>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/form" component={FormPage}/>
              <Route path="/list" component={ListPage}/>
              <Route path="/detail" component={DetailPage}/>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;