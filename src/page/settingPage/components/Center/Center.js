import React, { PureComponent, Fragment } from 'react';
// import { Input, Form, Select, Button, Upload, message, Skeleton, ImageLoader, Layout,List } from 'ppfish';
import { Layout, Icon, Tag, Tabs, Timeline, RichEditor, VideoViewer,Button } from 'ppfish';
import './Center.less'
const { Content, Sider } = Layout;
const TabPane = Tabs.TabPane;
class Center extends PureComponent {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    this.video = React.createRef();
    this.toolbar = [[
      'link', 'bold', 'italic', 'underline', 'color', 'background', { 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }, 'size', { 'list': 'ordered' }, { 'list': 'bullet' }, 'emoji', 'image', 'strike', 'blockquote', 'code-block', { 'script': 'sub' }, { 'script': 'super' }, { 'indent': '-1' }, { 'indent': '+1' }, { direction: "rtl" }, 'video', 'clean']
    ];
    const panes = [
      {
        title: '履历', content:
          <Timeline mode="alternate" style={{ marginTop: 50 }}>
            <Timeline.Item>创建于 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">解决问题 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="demo-bargraph" style={{ fontSize: '16px' }} />}>写下人生格言</Timeline.Item>
            <Timeline.Item color="red">再次解决问题2015-09-01</Timeline.Item>
            <Timeline.Item>分享2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="demo-bargraph" style={{ fontSize: '16px' }} />}>技术测试 2015-09-01</Timeline.Item>
          </Timeline>
        , key: '1'
      },
      {
        title: '修改留言', content: <div><RichEditor
          getPopupContainer={() => document.querySelector('.content')}
          toolbar={this.toolbar}
        /><Button style={{marginTop:5}} type="primary">修改</Button></div>, key: '2'
      },
      { title: '历史视频', content: 'Content of Tab 3', key: '3', closable: false },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
      visible: false
    };
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
  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  open = () => {
    this.setState({
      visible: true,
    });
    const video = this.video && this.video.current;
    if (video && video.paused) {
        video.play();
    }
  }
  
  onClose = () => {
    console.log('closed');
    const video = this.video && this.video.current;
    if (video && !video.paused) {
        video.pause();
    }
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { children } = this.props;

    return (
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={360} style={{ background: '#fff', borderRight: '1px solid #ccc' }}>
          <div className="demo-center-avatar">
            <img src={require('../../../../../assets/img/FD-Logo.png')} />
            <p style={{ marginTop: 20 }}>
              海纳百川，有容乃大
            </p>
          </div>
          <div style={{ paddingLeft: 30, marginTop: 20 }}>
            <h4>标签</h4>
            <div>
              <Tag color="#f50">#f50</Tag>
              <Tag color="#2db7f5">#2db7f5</Tag>
              <Tag color="#87d068">#87d068</Tag>
              <Tag color="#108ee9">#108ee9</Tag>
            </div>
          </div>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {this.state.panes.map(pane => {
              if (pane.key === '3') {
                return (
                  <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                    <Button type="primary" onClick={this.open}>Play</Button>
                    <VideoViewer
                      maskClosable={false}
                      visible={this.state.visible}
                      mask={true}
                      draggable={true}
                      afterClose={this.onClose}
                      onCancel={this.handleCancel}
                      width={600}
                    >
                      <VideoViewer.Video
                        ref={this.video}
                        src="http://pic.qiantucdn.com/58pic/shipin/13/38/13/13381368.mp4"
                      />
                    </VideoViewer>
                  </TabPane>
                )
              } else {
                return (
                  <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>
                )
              }
            })}
          </Tabs>
        </Content>
      </Layout>
    )
  }
}

export default Center;