import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Select, AutoComplete, Input, Icon, Col, Cascader, Button, Row, Checkbox, DatePicker, TimePicker, Slider, Radio ,Upload,InputNumber} from 'ppfish';
import './BasicForm.less';
const RangePicker = DatePicker.DateRangePicker;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const AutoCompleteOption = AutoComplete.Option;
const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class App extends Component {
  constructor(props) {
    super(props);
    // 设置面包屑
    this.breadcrumb = [{
      text: '表单页'
    }];
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password3')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 80 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div className="g-basic-form" style={{ padding: 24 }}>
        <div className="u-form-hd">
          <div className="form-hd-left">
            <h3 className="form-hd-title">基础表单</h3>
          </div>
        </div>
        <span>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</span>
        <div className="u-form-content">
          <Row>
            <Col span={16} offset={4}>
              <Form onSubmit={this.handleSubmit}>
                <FormItem
                  {...formItemLayout}
                  label="DatePicker"
                >
                  {getFieldDecorator('date-picker', config)(
                    <DatePicker />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Slider"
                >
                  {getFieldDecorator('slider')(
                    <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="RangePicker"
                >
                  {getFieldDecorator('range-time-picker', rangeConfig)(
                    <RangePicker showTime format="yyyy-MM-DD HH:mm:ss" />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Radio.Button"
                >
                  {getFieldDecorator('radio-button')(
                    <RadioGroup>
                      <RadioButton value="a">item 1</RadioButton>
                      <RadioButton value="b">item 2</RadioButton>
                      <RadioButton value="c">item 3</RadioButton>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="TimePicker"
                >
                  {getFieldDecorator('time-picker', config)(
                    <TimePicker />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="InputNumber"
                >
                  {getFieldDecorator('input-number')(
                    <InputNumber min={1} max={10}/>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="E-mail"
                >
                  {getFieldDecorator('email', {
                    rules: [{
                      type: 'email', message: 'The input is not valid E-mail!',
                    }, {
                      required: true, message: 'Please input your E-mail!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Habitual Residence"
                >
                  {getFieldDecorator('residence', {
                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                    rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                  })(
                    <Cascader options={residences} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Phone Number"
                >
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                  })(
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Website"
                >
                  {getFieldDecorator('website', {
                    rules: [{ required: true, message: 'Please input website!' }],
                  })(
                    <AutoComplete
                      dataSource={websiteOptions}
                      onChange={this.handleWebsiteChange}
                      placeholder="website"
                    >
                      <Input />
                    </AutoComplete>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Captcha"
                  extra="We must make sure that your are a human."
                >
                  <Row gutter={8}>
                    <Col span={12}>
                      {getFieldDecorator('captcha', {
                        rules: [{ required: true, message: 'Please input the captcha you got!' }],
                      })(
                        <Input />
                      )}
                    </Col>
                    <Col span={12}>
                      <Button>Get captcha</Button>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Dragger"
                >
                  <div className="dropbox">
                    {getFieldDecorator('dragger', {
                      valuePropName: 'fileList',
                      getValueFromEvent: this.normFile,
                    })(
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="fishd-upload-drag-icon">
                          <Icon type="inbox" />
                        </p>
                        <p className="fishd-upload-text">Click or drag file to this area to upload</p>
                        <p className="fishd-upload-hint">Support for a single or bulk upload.</p>
                      </Upload.Dragger>
                    )}
                  </div>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                  })(
                    <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                  )}
                </FormItem>
                
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">Register</Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
const Demo = Form.create()(App);
export default Demo;

