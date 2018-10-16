import React from 'react';
import { Form, Input, Button, Alert, Divider } from 'ppfish';
import { browserHistory } from 'react-router';
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
class Step2 extends React.PureComponent {
  render() {
    const { form, submitting, stepForm } = this.props;
    const { getFieldDecorator, validateFields } = form;
    const onPrev = () => {
      this.props.history.push('/formPage/step/step1/');
    };
    const onValidateForm = e => {
      e.preventDefault();
      console.log(this.props,'step2')
      validateFields((err, values) => {
        if (!err) {
          this.props.history.push('/formPage/step/step3/');
        }
      });
    };
    return (
      <Form layout="horizontal" >
        <Alert
          closable
          showIcon
          message="确认转账后，资金将直接打入对方账户，无法退回。"
          style={{ marginBottom: 24 }}
        />
        <Form.Item {...formItemLayout} label="付款账户">
          22
        </Form.Item>
        <Form.Item {...formItemLayout} label="收款账户">
          11
        </Form.Item>
        <Form.Item {...formItemLayout} label="收款人姓名">
          zz
        </Form.Item>
        <Form.Item {...formItemLayout} label="转账金额">
          33
        </Form.Item>
        <Divider style={{ margin: '24px 0' }} />
        <Form.Item {...formItemLayout} label="支付密码" required={false}>
          {getFieldDecorator('password', {
            initialValue: '123456',
            rules: [
              {
                required: true,
                message: '需要支付密码才能进行支付',
              },
            ],
          })(<Input type="password" autoComplete="off" style={{ width: '80%' }} />)}
        </Form.Item>
        <Form.Item
          style={{ marginBottom: 8 }}
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: {
              span: formItemLayout.wrapperCol.span,
              offset: formItemLayout.labelCol.span,
            },
          }}
          label=""
        >
          <Button type="primary" onClick={onValidateForm} loading={submitting}>
            提交
          </Button>
          <Button onClick={onPrev} style={{ marginLeft: 8 }}>
            上一步
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(Step2);
