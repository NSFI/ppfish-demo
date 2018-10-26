import React, { PureComponent, cloneElement, Children, } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'ppfish';
import { browserHistory } from 'react-router';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Setting extends PureComponent {
  constructor(props) {
    super(props);

  }
  handleChangeRouter = (res) => {
    this.props.history.push(`/settingPage/settings/${res}`)
  }
  setDefault = () => {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 2]) {
      case 'basic':
        return '1';
      case 'binding':
        return '2';
      case 'safe':
        return '3';
      case 'newMessage':
        return '4';
      default:
        return '1';
    }
  }
  render() {
    const { children } = this.props;
    const filteredChildren = React.Children.toArray(children).filter(c => !!c);
    return (
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[this.setDefault()]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="1" onClick={this.handleChangeRouter.bind(this, 'basic')}>
              基本设置
            </Menu.Item>
            <Menu.Item key="3" onClick={this.handleChangeRouter.bind(this, 'safe')}>
              安全设置
            </Menu.Item>
            <Menu.Item key="2" onClick={this.handleChangeRouter.bind(this, 'binding')}>
              账号绑定
            </Menu.Item>
            <Menu.Item key="4" onClick={this.handleChangeRouter.bind(this, 'newMessage')}>
              新消息通知
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {
            Children.map(filteredChildren, (child, index) => {
              return cloneElement(child, { ...this.props })
            })
          }
        </Content>
      </Layout>
    )
  }
}

export default Setting;