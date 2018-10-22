import React, { Component, Fragment } from 'react';
import { Card, Badge, Table, Divider, Icon, Row, Col, Tabs } from 'ppfish';
const TabPane = Tabs.TabPane;
import moment from 'moment';
import './BasicDetail.less';
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
class AdvancedDetail extends Component {
  constructor(props) {
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
    return (
      <Fragment>
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
