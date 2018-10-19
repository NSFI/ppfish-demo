import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Badge, Row, Col, Dropdown, Popover, Avatar, Breadcrumb } from 'ppfish';
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
    this.onOff = true;
    this.state = {
      collapsed: false,
      openKeys: []
    }
    this.rootSubmenuKeys = ['homePage', 'formPage', 'listPage', 'detailPage'];
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  setDefault = () => {
    const { pathname } = this.props.location;
    const pathList = pathname.split('/');
    if (this.onOff) {
      this.state.openKeys = [pathList[1]];
      this.onOff = false;
    }
    return {
      subDefault: pathList[1],
      opnDefault: pathList[2],
      List:pathList
    }
  }
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    const { subDefault, opnDefault,List } = this.setDefault();
    const { collapsed } = this.state;
    const defaultPros = !collapsed ? { openKeys: this.state.openKeys } : {};
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://qi.163.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.163.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://email.163.com/">3rd menu item</a>
        </Menu.Item>
      </Menu>
    );
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <i className="logo" />
          {
            !collapsed
              ?
              <span className="logo-text">Fish Design</span>
              : null
          }
          <Menu
            className="demo-menu"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[subDefault + '-' + opnDefault]}
            defaultOpenKeys={[subDefault]}
            onOpenChange={this.onOpenChange}
            {...defaultPros}
          >
            <SubMenu key="homePage" title={<span><Icon type="home-line" />
              {
                !collapsed ? '首页' : null
              }
            </span>}>
              <Menu.Item key="homePage-home">
                <span>
                  <Link to="/homePage/home">首页</Link>
                </span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="formPage" title={<span><Icon type="demo-file" />
              {
                !collapsed ? '表单页' : null
              }
            </span>}>
              <Menu.Item key="formPage-basic">
                <span>
                  <Link to="/formPage/basic">基础表单</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="formPage-advanced">
                <span>
                  <Link to="/formPage/advanced">高级表单</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="formPage-step">
                <span>
                  <Link to="/formPage/step/step1">分布表单</Link>
                </span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="listPage" title={<span><Icon type="richeditor-list" />
              {
                !collapsed ? '列表页' : null
              }
            </span>}>
              <Menu.Item key="listPage-basic">
                <span>
                  <Link to="/listPage/basic">
                    基础列表
                  </Link>
                </span>
              </Menu.Item>
              <Menu.Item key="listPage-card">
                <span>
                  <Link to="/listPage/card">卡片列表</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="listPage-search">
                <span>
                  <Link to="/listPage/search">搜索列表</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="listPage-table">
                <span>
                  <Link to="/listPage/table">表格列表</Link>
                </span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="detailPage" title={<span><Icon type="file-line" />
              {
                !collapsed ? '详情页' : null
              }
            </span>}>
              <Menu.Item key="detailPage-basic">
                <span>
                  <Link to="/detailPage/basic">基础详情</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="detailPage-advanced">
                <span>
                  <Link to="/detailPage/advanced">高级详情</Link>
                </span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} className="demo-header">
            <Row gutter={24}>
              <Col span={20}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-line' : 'menu-line'}
                  onClick={this.toggle}
                />
                <Breadcrumb style={{display:'inline-block',marginLeft:20}}>
                  {List.map((it,i)=> {
                    if(i>0){
                      return (<Breadcrumb.Item key={i}>{it}</Breadcrumb.Item>)
                    }
                  })}
                </Breadcrumb>
              </Col>
              <Col span={4}>
                <div className="demo-setting">
                  <Row gutter={24} style={{ marginRight: 20 }}>
                    <Col span={8}>
                      <Badge dot>
                        <Icon type="search-line" style={{ cursor: 'pointer', fontSize: 20 }} />
                      </Badge>
                    </Col>
                    <Col span={8}>
                      <Popover content={content}>
                        <a className="fishd-dropdown-link">
                          <Badge count={5}>
                            <Icon type="demo-phone" style={{ cursor: 'pointer', fontSize: 20 }} />
                          </Badge>
                        </a>
                      </Popover>
                    </Col>
                    <Col span={8}>
                      <Dropdown overlay={menu}>
                        <a className="fishd-dropdown-link">
                          <Badge dot>
                            <Avatar size="small" src={require('../assets/img/FD-Logo.png')} />
                          </Badge>
                        </a>
                      </Dropdown>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: '24px 16px', background: '#fff', minHeight: 280 }}>
            <div>
              <Route exact path="/homePage/home" component={Dashboard} />
              <FormPage />
              <ListPage />
              <DetailPage />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;