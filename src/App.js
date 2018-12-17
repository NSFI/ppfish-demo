import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Badge, Row, Col, Dropdown, Popover, Avatar, Breadcrumb, Divider,notification } from 'ppfish';
import Dashboard from './page/dashboard/Dashborad.js';
import DetailPage from './page/detailPage/routes.js';
import FormPage from './page/formPage/routes.js';
import ListPage from './page/listPage/routes.js';
import SettingPage from './page/settingPage/route';
import ResultPage from './page/resultPage/route';
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
    this.rootSubmenuKeys = ['homePage', 'formPage', 'listPage', 'detailPage','resultPage','settingPage'];
  }
  componentWillMount(){
    notification.open({
      message: '想快速上手，去看文档吧',
      description: <p>点击<a href="https://nsfi.github.io/ppfish-components/#/components/spin">Fish Design 文档</a>快速查看</p>,
    })
   
  }
  componentDidMount(){
    // this.dashNode.chart1.chart.getInstance().resize();
    // this.dashNode.chart2.chart.getInstance().resize();
    // this.dashNode.chart3.chart.getInstance().resize();
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    
      // this.dashNode.chart1.chart.getInstance().resize();
      // this.dashNode.chart2.chart.getInstance().resize();
      // this.dashNode.chart3.chart.getInstance().resize();
      this.dashNode.chart4.chart.getInstance();
      this.dashNode.chart5.chart.getInstance();
      this.dashNode.chart6.chart.getInstance();
      // this.dashNode.chart7.getInstance();
      // this.dashNode.chart8.getInstance();
      // this.dashNode.chart9.getInstance();
      // this.dashNode.chart10.getInstance();
   
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
      List: pathList
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
  logout =()=>{
    this.props.history.push('/login/')
  }
  render() {
    const { subDefault, opnDefault, List } = this.setDefault();
    const { collapsed } = this.state;
    const defaultPros = !collapsed ? { openKeys: this.state.openKeys } : {};
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://qi.163.com/">个人中心</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.163.com/">个人设置</a>
          <div style={{ borderTop: '1px solid #e8eaed', marginTop: 5 }}></div>
        </Menu.Item>
        <Menu.Item>
          <span target="_blank" rel="noopener noreferrer" onClick={this.logout}>退出登陆</span>
        </Menu.Item>
      </Menu>
    );
    const content = (
      <div>
        <p>信息1</p>
        <p>信息2</p>
      </div>
    );
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}

          width={200}
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
            <Menu.Item key="homePage-home">
              <Link to="/homePage/home"><Icon type="home-line" /><span>首页</span></Link>
            </Menu.Item>
            <SubMenu key="formPage" title={<span><Icon type="file-line" />
              {
                !collapsed ? '表单页' : null
              }
            </span>}>
              <Menu.Item key="formPage-basic">
                  <Link to="/formPage/basic">基础表单</Link>
              </Menu.Item>
              <Menu.Item key="formPage-advanced">
                  <Link to="/formPage/advanced">高级表单</Link>
              </Menu.Item>
              <Menu.Item key="formPage-step">
                  <Link to="/formPage/step/step1">分布表单</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="listPage" title={<span><Icon type="richeditor-list" />
              {
                !collapsed ? '列表页' : null
              }
            </span>}>
              <Menu.Item key="listPage-basic">
                  <Link to="/listPage/basic">
                    基础列表
                  </Link>
              </Menu.Item>
              <Menu.Item key="listPage-search">
                  <Link to="/listPage/search">搜索列表</Link>
              </Menu.Item>
              <Menu.Item key="listPage-table">
                  <Link to="/listPage/table">表格列表</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="detailPage" title={<span><Icon type="file-line" />
              {
                !collapsed ? '详情页' : null
              }
            </span>}>
              <Menu.Item key="detailPage-basic">
                  <Link to="/detailPage/basic">基础详情</Link>
              </Menu.Item>
              <Menu.Item key="detailPage-advanced">
                  <Link to="/detailPage/advanced">高级详情</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="settingPage" title={<span><Icon type="file-line" />
              {
                !collapsed ? '个人页' : null
              }
            </span>}>
              <Menu.Item key="settingPage-center">
                  <Link to="/settingPage/center">个人中心</Link>
              </Menu.Item>
              <Menu.Item key="settingPage-settings">
                  <Link to="/settingPage/settings/basic">个人设置</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="resultPage" title={<span><Icon type="file-line" />
              {
                !collapsed ? '结果页' : null
              }
            </span>}>
              <Menu.Item key="resultPage-success">
                  <Link to="/resultPage/success">成功页</Link>
              </Menu.Item>
              <Menu.Item key="resultPage-fail">
                  <Link to="/resultPage/fail">失败页</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="demo-layout">
          <Header style={{ background: '#fff', padding: 0 }} className="demo-header">
            <Row gutter={24}>
              <Col span={20}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-line-right' : 'menu-line'}
                  onClick={this.toggle}
                />
                <Breadcrumb style={{ display: 'inline-block', marginLeft: 20 }}>
                  {List.map((it, i) => {
                    if (i > 0) {
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
                          <Badge count={5}>
                            <Icon type="tip" style={{ cursor: 'pointer', fontSize: 20 }} />
                          </Badge>
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
          <Content style={{ margin: '24px 16px', background: '#fff', minHeight: 280}}>
              <Route exact path="/homePage/home" render={props=><Dashboard ref={node => this.dashNode = node} />} />
              <FormPage />
              <ListPage />
              <DetailPage />
              <SettingPage />
              <ResultPage/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;