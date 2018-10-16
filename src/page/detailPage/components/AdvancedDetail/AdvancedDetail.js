import React, { Component, Fragment } from 'react';
import { Card, Badge, Table, Divider, Icon, Row, Col, Steps, Popover } from 'ppfish';
import './AdvancedDetail.less';

const { Step } = Steps;
//3个为一组
const groupNew = (arr) => {
  let groupArr = [];
  for (let i = 0, len = arr.length; i < len; i += 3) {
    groupArr.push(arr.slice(i, i + 3));
  }
  return groupArr;
};

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
    // const contentList = {
    //   tab1: (
    //     <Table
    //       pagination={false}
    //       loading={loading}
    //       dataSource={advancedOperation1}
    //       columns={columns1}
    //     />
    //   ),
    //   tab2: (
    //     <Table
    //       pagination={false}
    //       loading={loading}
    //       dataSource={advancedOperation2}
    //       columns={columns1}
    //     />
    //   ),
    //   tab3: (
    //     <Table
    //       pagination={false}
    //       loading={loading}
    //       dataSource={advancedOperation3}
    //       columns={columns1}
    //     />
    //   ),
    // };
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
      </Fragment>
    )
  }
}

export default AdvancedDetail;
