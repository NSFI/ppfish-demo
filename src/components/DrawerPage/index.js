import React, { Component } from 'react';
import { Drawer, Tree, Select, Divider, Row, Col, Switch } from 'ppfish';
class DrawerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placement: 'right',
      childShow: true,
      height: null,
    };
  }
  onChange = (value) => {
    this.setState({
      placement: value,
      width: value === 'right' || value === 'left' ? '20vw' : null,
      childShow: false, // 删除子级，删除切换时的过渡动画。。。
    }, () => {
      this.setState({
        childShow: true,
      });
    });
  }
  onCloseClick = () => {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <div >
        {this.state.childShow && (
          <Drawer
            placement={this.state.placement}
            width={this.state.width}
            level="null"
          >
            <div style={{ width: 300, padding: 20 }}>
              <h3>主题色</h3>
              <Row type="flex" justify="space-around">
                <Col span={4}>
                  <div style={{ width: 20, height: 20, backgroundColor: '#F24957', borderRadius: 2 }}></div>
                </Col>
                <Col span={4}>
                  <div style={{ width: 20, height: 20, backgroundColor: '#26BD71', borderRadius: 2 }}></div>
                </Col>
                <Col span={4}>
                  <div style={{ width: 20, height: 20, backgroundColor: '#FFAF0F', borderRadius: 2 }}></div>
                </Col>
                <Col span={4}>
                  <div style={{ width: 20, height: 20, backgroundColor: '#8875FF', borderRadius: 2 }}></div>
                </Col>
                <Col span={4}>
                  <div style={{ width: 20, height: 20, backgroundColor: '#337EFF', borderRadius: 2 }}></div>
                </Col>
              </Row>
              <Divider />
              <h3>导航模式</h3>
              <Row type="flex" justify="space-between">
                <Col span={12}>
                  内容区域宽度
            </Col>
                <Col span={12}>
                  <Select disabled style={{ width: 80, height: 32 }}></Select>
                </Col>
              </Row>
              <Row type="flex" justify="space-between" style={{ marginTop: 15 }}>
                <Col span={12}>
                  固定 Header
            </Col>
                <Col span={12}>
                  <Switch defaultChecked />
                </Col>
              </Row>
              <Row type="flex" justify="space-between" style={{ marginTop: 15 }}>
                <Col span={12}>
                  下滑时隐藏 Header
            </Col>
                <Col span={12}>
                  <Switch defaultChecked />
                </Col>
              </Row>
              <Row type="flex" justify="space-between" style={{ marginTop: 15 }}>
                <Col span={12}>
                  固定侧边菜单
            </Col>
                <Col span={12}>
                  <Switch defaultChecked />
                </Col>
              </Row>
              <Divider />
              <h3>其他设置</h3>
              <Row type="flex" justify="space-between" style={{ marginTop: 15 }}>
                <Col span={12}>
                  色弱模式
            </Col>
                <Col span={12}>
                  <Switch defaultChecked />
                </Col>
              </Row>
              <Divider />
            </div>
          </Drawer>

        )}
        <div
          style={{
            width: '100%', height: 450,
            textAlign: 'center', lineHeight: '450px',
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default DrawerPage;