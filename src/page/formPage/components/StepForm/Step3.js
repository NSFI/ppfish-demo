import React, { Fragment } from 'react';
import { Button, Row, Col } from 'ppfish';

class Step3 extends React.PureComponent {
  render() {
    const onFinish = () => {
      this.props.history.push('/formPage/step/step1');
    };
    const information = (
      <div>
        <Row>
          <Col xs={24} sm={8}>
            付款账户：
          </Col>
          <Col xs={24} sm={16}>
            3123
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8}>
            收款账户：
          </Col>
          <Col xs={24} sm={16}>
            3121212
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8}>
            收款人姓名：
          </Col>
          <Col xs={24} sm={16}>
            31312
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8}>
            转账金额：
          </Col>
          <Col xs={24} sm={16}>
            312123
          </Col>
        </Row>
      </div>
    );
    const actions = (
      <Fragment>
        <Button type="primary" onClick={onFinish}>
          再转一笔
        </Button>
        <Button>查看账单</Button>
      </Fragment>
    );
    return (
      <Fragment>
        <div style={{textAlign:"center"}}>操作成功</div>
        {actions}
      </Fragment>
    );
  }
}


export default Step3;
