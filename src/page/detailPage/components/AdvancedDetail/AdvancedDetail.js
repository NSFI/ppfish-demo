import React, { Component, Fragment } from 'react';
import { Card, Badge, Table, Divider, Icon, Row, Col, Steps, Popover,Tabs } from 'ppfish';
import moment from 'moment';
import './AdvancedDetail.less';
const TabPane = Tabs.TabPane;
const { Step } = Steps;
//3个为一组
const groupNew = (arr) => {
  let groupArr = [];
  for (let i = 0, len = arr.length; i < len; i += 3) {
    groupArr.push(arr.slice(i, i + 3));
  }
  return groupArr;
};
const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['关闭', '运行中', '已上线', '异常'];

const desc1 = (
  <div>
    <Fragment>
      曲xx
      <Icon type="dingding-o" style={{ marginLeft: 8 }} />
    </Fragment>
    <div>2016-12-12 12:32</div>
  </div>
);

const desc2 = (
  <div>
    <Fragment>
      周xx
      <Icon type="dingding-o" style={{ color: '#00A0E9', marginLeft: 8 }} />
    </Fragment>
    <div>
      <a href="">催一下</a>
    </div>
  </div>
);

const popoverContent = (
  <div style={{ width: 160 }}>
    吴xx
    <span style={{ float: 'right' }}>
      <Badge status="default" text={<span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>未响应</span>} />
    </span>
    <div style={{ marginTop: 4 }}>
      耗时：2小时25分钟
    </div>
  </div>
);
const customDot = (dot, { status }) =>
  status === 'process' ? (
    <Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
      {dot}
    </Popover>
  ) : (
      dot
    );
class AdvancedDetail extends Component {
  constructor(props){
    super(props);
    this.columns = [
      {
        title: '规则名称',
        dataIndex: 'name',
      },
      {
        title: '描述',
        dataIndex: 'desc',
      },
      {
        title: '服务调用次数',
        dataIndex: 'callNo',
        sorter: true,
        align: 'right',
        render: val => `${val} 万`,
        // mark to display a total number
        needTotal: true,
      },
      {
        title: '状态',
        dataIndex: 'status',
        filters: [
          {
            text: status[0],
            value: 0,
          },
          {
            text: status[1],
            value: 1,
          },
          {
            text: status[2],
            value: 2,
          },
          {
            text: status[3],
            value: 3,
          },
        ],
        render(val) {
          return <Badge status={statusMap[val]} text={status[val]} />;
        },
      },
      {
        title: '上次调度时间',
        dataIndex: 'updatedAt',
        sorter: true,
        render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
      },
      {
        title: '操作',
        render: (text, record) => (
          <Fragment>
            <a onClick={() => this.handleUpdateModalVisible(true, record)}>配置</a>
            <Divider type="vertical" />
            <a href="">订阅警报</a>
          </Fragment>
        ),
      },
    ];
  }
  render() {
    const data1 = [{
      name: '取货单号',
      value: '1000000000'
    }, {
      name: '状态',
      value: '已取货'
    }, {
      name: '销售单号',
      value: '	1234123421'
    }, {
      name: '取货地址',
      value: '浙江省杭州市'
    }, {
      name: '备注',
      value: '无'
    }];
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '15%',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '30%',
    }, {
      title: 'Action',
      key: 'action',
      width: '40%',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={this.handleModal}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
          <Divider type="vertical" />
          <a href="javascript:;" className="fishd-dropdown-link">
            More actions <Icon type="down" />
          </a>
        </span>
      ),
    }];
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '5',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '7',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];
    const columns1 = [
      {
        title: '操作类型',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '操作人',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '执行结果',
        dataIndex: 'status',
        key: 'status',
        render: text =>
          text === 'agree' ? (
            <Badge status="success" text="成功" />
          ) : (
              <Badge status="error" text="驳回" />
            ),
      },
      {
        title: '操作时间',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
      },
      {
        title: '备注',
        dataIndex: 'memo',
        key: 'memo',
      },
    ];
    const data3 = [
      { name: "规则1", desc: '这是一段描述', callNo: 1, status: 0, updatedAt: 0, key: '1' },
      { name: "规则2", desc: '这是一段描述', callNo: 12, status: 1, updatedAt: 0, key: '2' },
      { name: "规则3", desc: '这是一段描述', callNo: 13, status: 2, updatedAt: 0, key: '3' },
      { name: "规则4", desc: '这是一段描述', callNo: 21, status: 3, updatedAt: 0, key: '4' },
      { name: "规则5", desc: '这是一段描述', callNo: 11, status: 3, updatedAt: 0, key: '5' },
    ]
    const data4 = [
      { name: "规则3", desc: '这是一段描述', callNo: 13, status: 2, updatedAt: 0, key: '3' },
      { name: "规则4", desc: '这是一段描述', callNo: 21, status: 1, updatedAt: 0, key: '4' },
      { name: "规则5", desc: '这是一段描述', callNo: 11, status: 2, updatedAt: 0, key: '5' },
    ]
    return (
      <Fragment>
        <Card title="流程进度" style={{ marginBottom: 24 }} bordered={false}>
          <Steps direction={'horizontal'} progressDot={customDot} current={1}>
            <Step title="创建项目" description={desc1} />
            <Step title="部门初审" description={desc2} />
            <Step title="财务复核" />
            <Step title="完成" />
          </Steps>
        </Card>
        <Card title="用户信息">
          <Row type="flex" justify="space-around">
            <Col span={6}>用户姓名 : 付小小</Col>
            <Col span={6}>会员卡号 : 32943898021309809423</Col>
            <Col span={6}>身份证 : 3321944288191034921</Col>
          </Row>
          <Row type="flex" justify="space-around" style={{marginTop:10}}>
            <Col span={6}>联系方式 : 18112345678</Col>
            <Col span={6}>联系地址 : 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口</Col>
            <Col span={6}></Col>
          </Row>
          <h4 style={{marginTop:10}}>信息组</h4>
          <Row type="flex" justify="space-around" style={{marginTop:10}}>
            <Col span={6}>某某数据 :	725</Col>
            <Col span={6}>该数据更新时间 :	2017-08-08</Col>
            <Col span={6}></Col>
          </Row>
          <Row type="flex" justify="space-around" style={{marginTop:10}}>
            <Col span={6}>某某数据 :	725</Col>
            <Col span={6}>该数据更新时间:	2017-08-08</Col>
            <Col span={6}></Col>
          </Row>
        </Card>
        <div className="u-detail-top">
          {
            groupNew(data1).map((r, k) =>
              <Row className="u-detail-row" gutter={20} key={k}>
                {
                  r.map((it, i) =>
                    <Col span={8} key={i}>
                      <span>{it.name}:</span>
                      <span>{it.value}</span>
                    </Col>
                  )
                }
              </Row>
            )
          }
        </div>
        <div className="u-detail-top">
          {
            groupNew(data1).map((r, k) =>
              <Row className="u-detail-row" gutter={20} key={k}>
                {
                  r.map((it, i) =>
                    <Col span={8} key={i}>
                      <span>{it.name}:</span>
                      <span>{it.value}</span>
                    </Col>
                  )
                }
              </Row>
            )
          }
        </div>
        <div className="u-detail-top" style={{ marginBottom: '15px' }}>
          {
            groupNew(data1).map((r, k) =>
              <Row className="u-detail-row" gutter={20} key={k}>
                {
                  r.map((it, i) =>
                    <Col span={8} key={i}>
                      <span>{it.name}:</span>
                      <span>{it.value}</span>
                    </Col>
                  )
                }
              </Row>
            )
          }
        </div>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ y: 'calc( 100vh - 313px )' }}
        />
        <div>
          <Tabs defaultActiveKey="2" className="u-detail-top" style={{ marginBottom: '15px' }}>
            <TabPane tab={<span><Icon type="apple" />操作日志一</span>} key="1">
              <Table
                dataSource={data3}
                columns={this.columns}
                onChange={this.handleStandardTableChange}
                pagination={{ current: 0, pageSize: 50, total: 100 }}
                rowKey="key" />
            </TabPane>
            <TabPane tab={<span><Icon type="android" />操作日志二</span>} key="2">
              <Table
                dataSource={data4}
                columns={this.columns}
                onChange={this.handleStandardTableChange}
                pagination={{ current: 0, pageSize: 50, total: 100 }}
                rowKey="key" />
            </TabPane>
          </Tabs>
        </div>
      </Fragment>
    )
  }
}

export default AdvancedDetail;
