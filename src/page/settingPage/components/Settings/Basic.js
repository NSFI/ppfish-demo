import React, { PureComponent, Fragment } from 'react';

import { Input, Form, Select, Button, Upload, message, Skeleton, ImageLoader } from 'ppfish';
const FormItem = Form.Item;
const { Option } = Select;
import './Basic.less';

class Basic extends PureComponent {
  constructor(props) {
    super(props);
  }

  info = () => {
    message.loading('正在更新中...');
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <h3>基本设置</h3>
        <div className='baseView'>
          <div className='left'>
            <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
              <FormItem label={'邮箱'}>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: true,
                      message: 'email',
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <FormItem label={'昵称'}>
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: 'name',
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <FormItem label={'个人简介'}>
                {getFieldDecorator('profile', {
                  rules: [
                    {
                      required: true,
                      message: 'profile',
                    },
                  ],
                })(
                  <Input.TextArea
                    placeholder={'个人简介'}
                    rows={4}
                  />
                )}
              </FormItem>
              <FormItem label={'国家/地区'}>
                {getFieldDecorator('country', {
                  rules: [
                    {
                      required: true,
                      message: 'country',
                    },
                  ],
                })(
                  <Select style={{ maxWidth: 220 }}>
                    <Option value="China">中国</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem label={'街道地址'}>
                {getFieldDecorator('address', {
                  rules: [
                    {
                      required: true,
                      message: 'address',
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <Button type="primary" onClick={this.info}>
                更新基本信息
            </Button>
            </Form>
          </div>
          <div className='right'>
            <div className='avatar_title'>头像：</div>
            <div className='avatar'>
              <img src={require('../../../../../assets/img/FD-Logo.png')} alt="avatar" />
            </div>
            <Upload fileList={[]}>
              <div className='button_view'>
                <Button icon="upload">
                  更换头像
                </Button>
              </div>
            </Upload>
            <div className='avatar_title'>描述图片：</div>
            <ImageLoader
              src="http://error.url"
              onError={() => { console.log('image load failed!') }}
            >
              Image load failed!
            </ImageLoader>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Form.create(
  //   {
  //   onFieldsChange(props, changedFields) {
  //     props.setForm(changedFields);
  //   },
  //   mapPropsToFields(props) {
  //     const { basic } = props.selfSetting;
  //     return {
  //       email: Form.createFormField({
  //         ...basic.email,
  //         value: basic.email.value,
  //       }),
  //       name: Form.createFormField({
  //         ...basic.name,
  //         value: basic.name.value,
  //       }),
  //       profile: Form.createFormField({
  //         ...basic.profile,
  //         value: basic.profile.value,
  //       }),
  //       country: Form.createFormField({
  //         ...basic.country,
  //         value: basic.country.value,
  //       }),
  //       address: Form.createFormField({
  //         ...basic.address,
  //         value: basic.address.value,
  //       })
  //     };
  //   }
  // }
)(Basic);