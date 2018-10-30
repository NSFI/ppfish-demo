import React, { PureComponent } from 'react';
import { Input, Form, Button, Checkbox, Tooltip, Icon } from 'ppfish';
const FormItem = Form.Item;
import './index.less';
class Login extends PureComponent {
  constructor(props){
    super(props)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(this.props)
        this.props.history.push('/homePage/home');
      }
    });
  }
  render() {
    const formItemLayout = {

    };
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className="ant-row login-container">
        <div className="login-wrap">
          <div className="title" style={{marginBottom:20}}>
           
          </div>
          <Form layout="horizontal">
            <FormItem>
              {getFieldDecorator('userName2', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user-line" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password2', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock-line" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" onClick={this.handleSubmit} className="login-form-button" style={{ width: '90%', marginLeft: 10 }}>
                Log in
          </Button>

            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
export default Form.create()(Login);
