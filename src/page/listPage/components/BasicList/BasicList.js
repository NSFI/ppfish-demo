import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import moment from 'moment';
import {
  List,
  Card,
  Row,
  Col,
  Radio,
  Input,
  Button,
  Avatar,
  Modal,
  Form,
  Select,
  DatePicker,
  Dropdown,
  Progress,
  Menu,
  Icon
} from 'ppfish';
import './BasicList.less';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const SelectOption = Select.Option;
const { Search, TextArea } = Input;
class BasicList extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, done: false };
  }

  showModal = () => {
    this.setState({
      visible: true,
      current: undefined,
    });
  };

  showEditModal = item => {
    this.setState({
      visible: true,
      current: item,
    });
  };

  handleDone = () => {
    setTimeout(() => this.addBtn.blur(), 0);
    this.setState({
      done: false,
      visible: false,
    });
  };

  handleCancel = () => {
    setTimeout(() => this.addBtn.blur(), 0);
    this.setState({
      visible: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { current } = this.state;
    const id = current ? current.id : '';

    setTimeout(() => this.addBtn.blur(), 0);
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      this.setState({
        done: true,
      });

    });
  };
  deleteItem = id => {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/submit',
      payload: { id },
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator, validateFields } = form;
    const { visible, done, current = {} } = this.state;
    const modalFooter = done
      ? { footer: null, onCancel: this.handleDone }
      : { okText: '保存', onOk: this.handleSubmit, onCancel: this.handleCancel };
    const list = [{
      logo: '../../../../../assets/img/FD-Logo.png',
      title: 'Angular',
      subDescription: '那是一种内在的东西， 他们到达不了，也无法触及的',
      owner: '甲',
      createdAt: 0,
      percent: 50,
      status: 'success'
    },{
      logo: '../../../../../assets/img/FD-Logo.png',
      title: 'React',
      subDescription: '那是一种内在的东西， 他们到达不了，也无法触及的',
      owner: '乙',
      createdAt: 0,
      percent: 50,
      status: 'success'
    },{
      logo: '../../../../../assets/img/FD-Logo.png',
      title: 'Vue',
      subDescription: '那是一种内在的东西， 他们到达不了，也无法触及的',
      owner: '丙',
      createdAt: 0,
      percent: 50,
      status: 'success'
    },{
      logo: '../../../../../assets/img/FD-Logo.png',
      title: 'Fish Design',
      subDescription: '那是一种内在的东西， 他们到达不了，也无法触及的',
      owner: '丁',
      createdAt: 0,
      percent: 50,
      status: 'success'
    },];
    const ListContent = ({ data: { owner, createdAt, percent, status } }) => {
      return (
        <div className="listContent">
          <div className="listContentItem">
            <span>Owner</span>
            <p>{owner}</p>
          </div>
          <div className="listContentItem">
            <span>开始时间</span>
            <p>{moment(createdAt).format('YYYY-MM-DD HH:mm')}</p>
          </div>
          <div className="listContentItem">
            <Progress percent={percent} status={status} strokeWidth={6} style={{ width: 180 }} />
          </div>
        </div>
      )
    };

    const extraContent = (
      <div className="extraContent">
        <RadioGroup defaultValue="all">
          <RadioButton value="all">全部</RadioButton>
          <RadioButton value="progress">进行中</RadioButton>
          <RadioButton value="waiting">等待中</RadioButton>
        </RadioGroup>
        <Search className="extraContentSearch" placeholder="请输入" onSearch={() => ({})} />
      </div>
    );
    const MoreBtn = props => (
      <Dropdown
        overlay={
          <Menu onClick={({ key }) => editAndDelete(key, props.current)}>
            <Menu.Item key="edit">编辑</Menu.Item>
            <Menu.Item key="delete">删除</Menu.Item>
          </Menu>
        }
      >
        <a>
          更多 <Icon type="down" />
        </a>
      </Dropdown>
    );

    const getModalContent = () => {
      if (done) {
        this.handleDone();
      }
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="任务名称" {...this.formLayout}>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入任务名称' }],
              initialValue: current.title,
            })(<Input placeholder="请输入" />)}
          </FormItem>
          <FormItem label="开始时间" {...this.formLayout}>
            {getFieldDecorator('createdAt', {
              rules: [{ required: true, message: '请选择开始时间' }],
              initialValue: current.createdAt ? moment(current.createdAt) : null,
            })(
              <DatePicker
                showTime
                placeholder="请选择"
                format="YYYY-MM-DD HH:mm:ss"
                style={{ width: '100%' }}
              />
            )}
          </FormItem>
          <FormItem label="任务负责人" {...this.formLayout}>
            {getFieldDecorator('owner', {
              rules: [{ required: true, message: '请选择任务负责人' }],
              initialValue: current.owner,
            })(
              <Select placeholder="请选择">
                <SelectOption value="付晓晓">付晓晓</SelectOption>
                <SelectOption value="周毛毛">周毛毛</SelectOption>
              </Select>
            )}
          </FormItem>
          <FormItem {...this.formLayout} label="产品描述">
            {getFieldDecorator('subDescription', {
              rules: [{ message: '请输入至少五个字符的产品描述！', min: 5 }],
              initialValue: current.subDescription,
            })(<TextArea rows={4} placeholder="请输入至少五个字符" />)}
          </FormItem>
        </Form>
      );
    };
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 5,
      total: 50,
    };

    const Info = ({ title, value, bordered }) => (
      <div className={'headerInfo'}>
        <span>{title}</span>
        <p>{value}</p>
        {bordered && <em />}
      </div>
    );

    return (
      <div className="standardList">
        <Card bordered={false}>
          <Row>
            <Col sm={8} xs={24}>
              <Info title="我的待办" value="8个任务" bordered />
            </Col>
            <Col sm={8} xs={24}>
              <Info title="本周任务平均处理时间" value="32分钟" bordered />
            </Col>
            <Col sm={8} xs={24}>
              <Info title="本周完成任务数" value="24个任务" />
            </Col>
          </Row>
        </Card>
        <Card
          className="listCard"
          bordered={false}
          title="标准列表"
          style={{ marginTop: 24 }}
          bodyStyle={{ padding: '0 32px 40px 32px' }}
          extra={extraContent}
        >
          <Button
            type="dashed"
            style={{ width: '100%', marginBottom: 8 }}
            icon="plus"
            onClick={this.showModal}
            ref={component => {
              /* eslint-disable */
              this.addBtn = findDOMNode(component);
              /* eslint-enable */
            }}
          >
            添加
            </Button>
          <List
            size="large"
            rowKey="id"
            pagination={paginationProps}
            dataSource={list}
            renderItem={item => (
              <List.Item
                actions={[
                  <a
                    onClick={e => {
                      e.preventDefault();
                      this.showEditModal(item);
                    }}
                  >
                    编辑
                    </a>,
                  <MoreBtn current={item} />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.logo} shape="square" size="large" />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.subDescription}
                />
                <ListContent data={item} />
              </List.Item>
            )}
          />
        </Card>
        <Modal
          title={done ? null : `任务${current ? '编辑' : '添加'}`}
          className="standardListForm"
          width={640}
          bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
          destroyOnClose
          visible={visible}
          {...modalFooter}
        >
          {getModalContent()}
        </Modal>
      </div>
    )
  }
}


export default Form.create(
)(BasicList);