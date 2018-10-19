import React, { Component } from 'react';
import { Drawer ,Menu,Icon,Button} from 'ppfish';
class DrawerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  onChange = (bool) => {
    console.log(bool);
  }

  onTouchEnd = () => {
    this.setState({
      open: false,
    });
  }

  onSwitch = () => {
    this.setState({
      open: !this.state.open,
    });
  }
  onCloseClick = () => {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <div>
        <Drawer
          handler={false}
          level={null}
          width="30vw"
          visible={this.state.open}
          close={true}
          onChange={this.onChange}
          onMaskClick={this.onTouchEnd}
          onCloseClick={this.onCloseClick}
        >
          <div>
            <Menu
              style={{ height: '200%' }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <Menu.SubMenu
                key="sub1"
                title={<span><Icon type="mail" /><span>Navigation One</span></span>}
              >
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="sub2"
                title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </Menu.SubMenu>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="sub4"
                title={<span><Icon type="setting" /><span>Navigation Three</span></span>}
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </div>
        </Drawer>
        <div
          style={{
            width: '100%', height: 450,
            textAlign: 'center', lineHeight: '450px',
          }}
        >
          {this.props.children}
          <Button
            type="primary"
            onClick={this.onSwitch}
            style={{ position:'fixed',right:0,top:'50%' }}
          >
            {!this.state.open ? '打开抽屉' : '关闭抽屉'}
          </Button>
        </div>
      </div>
    )
  }
}

export default DrawerPage;