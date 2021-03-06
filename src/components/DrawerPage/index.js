import React, { Component ,Fragment} from 'react';
import { Drawer, Tree, Select, Divider, Row, Col, Switch,ColorPicker } from 'ppfish';
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
  onChangeColor = (color) => {
    console.log(color)
  }
  render() {
    return (
      <Fragment >
        {this.state.childShow && (
          <Drawer
            placement={this.state.placement}
            width={this.state.width}
            level="null"
          >
            <div style={{ width: 300, padding: 20 }}>
              <h3>主题色</h3>
              <Row type="flex" justify="space-around">
                <Col span={6}>
                  <ColorPicker onChange={this.onChangeColor} className="demo-color-picker" defaultColor="red"/>
                </Col>
                <Col span={6}>
                  <ColorPicker onChange={this.onChangeColor} className="demo-color-picker" defaultColor="green"/>
                </Col>
                <Col span={6}>
                  <ColorPicker onChange={this.onChangeColor} className="demo-color-picker" defaultColor="#ccc"/>
                </Col>
                <Col span={6}>
                  <ColorPicker onChange={this.onChangeColor} className="demo-color-picker"/>
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
      </Fragment>
    )
  }
}

export default DrawerPage;