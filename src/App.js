import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { Router, hashHistory } from 'react-router';
import { Layout, Menu, Icon } from 'ppfish';
import Dashboard from './page/dashboard/Dashborad.js';
import DetailPage from './page/detailPage/routes.js';
import FormPage from './page/formPage/routes.js';
import ListPage from './page/listPage/routes.js';
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
              <Menu.Item key="formPage-basic">
                <Icon type="demo-play" />
                <span>
                  <Link to="/formPage/basic">基础表单</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="formPage-advanced">
                <Icon type="demo-play" />
                <span>
                  <Link to="/formPage/advanced">高级表单</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="formPage-step-step1">
                <Icon type="demo-play" />
                <span>
                  <Link to="/formPage/step/step1">分布表单</Link>
                </span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="demo-play" />列表页</span>}>
              <Menu.Item key="listPage-basic">
                <Icon type="demo-play" />
                <span>
                  <Link to="/listPage/basic">基础列表</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="listPage-card">
                <Icon type="demo-play" />
                <span>
                  <Link to="/listPage/card">卡片列表</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="listPage-search">
                <Icon type="demo-play" />
                <span>
                  <Link to="/listPage/search">搜索列表</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="listPage-table">
                <Icon type="demo-play" />
                <span>
                  <Link to="/listPage/table">表格列表</Link>
                </span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="demo-play" />详情页</span>}>
              <Menu.Item key="detailPage-basic">
                <Icon type="demo-play" />
                <span>
                  <Link to="/detailPage/basic">基础详情</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="detailPage-advanced">
                <Icon type="demo-play" />
                <span>
                  <Link to="/detailPage/advanced">高级详情</Link>
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
                <FormPage/>
                <ListPage/>
                <DetailPage/>
              {/* <Route exact path="/" component={Dashboard}/>
              <Route exact path="/form" component={FormPage}/>
              <Route path="/listPage" component={ListPage}/>
              <Route path="/detail" component={DetailPage}/> */}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;