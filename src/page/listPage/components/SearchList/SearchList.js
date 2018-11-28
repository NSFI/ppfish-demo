import React, { Component, Fragment } from 'react';
import { Form, Select, List, Tag, Icon, Avatar, Row, Col,LoadMore,BackTop } from 'ppfish';
import StandardFormRow from './StandardFormRow';
const { Option } = Select;
const FormItem = Form.Item;
class SearchList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      form,
    } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 12 },
      },
    };
    const list = [{
      id: 'React',
      star: '设计语言',
      like: '云商服',
      message: '3',
      href: 'https://www.baidu.com',
      title: 'React',
      content: '段落示意：xxxx设计平台 xxxx，用最小的工作量，无缝接入xxxx生态，提供跨越设计与开发的体验解决方案。xxxx设计平台 xxxx，用最小的工作量，无缝接入xxxx生态，提供跨越设计与开发的体验解决方案。',
      updatedAt: 0,
      avatar: require('../../../../../assets/img/FD-Logo.png'),
      owner: '路人甲',
    },{
      id: 'Angular',
      star: '设计语言',
      like: '云商服',
      message: '12',
      href: 'https://www.baidu.com',
      title: 'Angular',
      content: '段落示意：xxxx设计平台 xxxx，用最小的工作量，无缝接入xxxx生态，提供跨越设计与开发的体验解决方案。xxxx设计平台 xxxx，用最小的工作量，无缝接入xxxx生态，提供跨越设计与开发的体验解决方案。',
      updatedAt: 0,
      avatar: require('../../../../../assets/img/FD-Logo.png'),
      owner: '路人乙',
    },{
      id: 'Vue',
      star: '设计语言',
      like: '云商服',
      message: '23',
      href: 'https://www.baidu.com',
      title: 'Vue',
      content: '段落示意：xxxx设计平台 xxxx，用最小的工作量，无缝接入xxxx生态，提供跨越设计与开发的体验解决方案。xxxx设计平台 xxxx，用最小的工作量，无缝接入xxxx生态，提供跨越设计与开发的体验解决方案。',
      updatedAt: 0,
      avatar: require('../../../../../assets/img/FD-Logo.png'),
      owner: '路人丙',
    },{
      id: 'Fish Design',
      star: '设计语言',
      like: '云商服',
      message: '66',
      href: 'https://www.baidu.com',
      title: 'Fish Design',
      content: '段落示意：xxxx设计平台 xxxx，用最小的工作量，无缝接入xxxx生态，提供跨越设计与开发的体验解决方案。xxxx设计平台 xxxx，用最小的工作量，无缝接入xxxx生态，提供跨越设计与开发的体验解决方案。',
      updatedAt: 0,
      avatar: require('../../../../../assets/img/FD-Logo.png'),
      owner: '路人丁',
    },];
    const owners = [];
    const loading = false;
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    const ListContent = ({ data: { content, updatedAt, avatar, owner, href } }) => (
      <div className="listContent">
        <div className="description">{content}</div>
        <div className="extra">
          <Avatar src={avatar} size="small" />
          <a href={href}>{owner}</a> 发布在
          <a href={href}>{href}</a>
          <em style={{marginLeft:5}}>2018-10-01</em>
        </div>
      </div>
    );
    const loadMore =
      list.length > 0 ? (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <LoadMore onLoadMore={this.loadmore}/>
        </div>
      ) : null;
    return (
      <Fragment>
        {/* <Card bordered={false}> */}
          <Form layout="inline">
            <StandardFormRow title="owner" grid>
              <Row>
                <Col lg={16} md={24} sm={24} xs={24}>
                  <FormItem>
                    {getFieldDecorator('owner', {
                      initialValue: ['wjh', 'zxx'],
                    })(
                      <Select
                        mode="multiple"
                        style={{ maxWidth: 300, width: '190px' }}
                        placeholder="选择 owner"
                        className="demo-search-list"
                      >
                        {owners.map(owner => (
                          <Option key={owner.id} value={owner.id}>
                            {owner.name}
                          </Option>
                        ))}
                      </Select>
                    )}
                    <a className="selfTrigger" onClick={this.setOwner} style={{marginLeft:10}}>
                      只看自己的
                    </a>
                  </FormItem>
                </Col>
              </Row>
            </StandardFormRow>
            <StandardFormRow title="其它选项" grid last>
              <Row gutter={16}>
                <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                  <FormItem {...formItemLayout} label="活跃用户">
                    {getFieldDecorator('user', {})(
                      <Select
                        placeholder="不限"
                        style={{ maxWidth: 200, width: '100%' }}
                      >
                        <Option value="lisa">李三</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                  <FormItem {...formItemLayout} label="好评度">
                    {getFieldDecorator('rate', {})(
                      <Select
                        placeholder="不限"
                        style={{ maxWidth: 200, width: '100%' }}
                      >
                        <Option value="good">优秀</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>
            </StandardFormRow>
          </Form>
        {/* </Card> */}
        {/* <Card
          style={{ marginTop: 24 }}
          bordered={false}
          bodyStyle={{ padding: '8px 32px 32px 32px' }}
        > */}
          <List
            size="large"
            rowKey="id"
            itemLayout="vertical"
            loadMore={loadMore}
            dataSource={list}
            renderItem={item => (
              <List.Item
                key={item.id}
                actions={[
                  <IconText type="star-o" text={item.star} />,
                  <IconText type="like-o" text={item.like} />,
                  <IconText type="message" text={item.message} />,
                ]}
                extra={<div className="listItemExtra" />}
              >
                <List.Item.Meta
                  title={
                    <a className="listItemMetaTitle" href={item.href}>
                      {item.title}
                    </a>
                  }
                  description={
                    <span>
                      <Tag>yun</Tag>
                      <Tag>netease</Tag>
                      <Tag>先知</Tag>
                    </span>
                  }
                />
                <ListContent data={item} />
              </List.Item>
            )}
          />
        {/* </Card> */}
        <BackTop target={() => document.querySelector('.demo-layout')} />
      </Fragment>
    )
  }
}

export default Form.create()(SearchList);