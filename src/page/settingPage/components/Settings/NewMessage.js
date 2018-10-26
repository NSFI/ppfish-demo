import React, { PureComponent,Fragment } from 'react';
import { Switch, List } from 'ppfish';
class NewMessage extends PureComponent {
  constructor(props) {
    super(props);
  }
  getData = () => {
    const Action = (
      <Switch
        checkedChildren='开'
        unCheckedChildren='关'
        defaultChecked
      />
    );
    return [
      {
        title: '账户密码',
        description: '其他用户的消息将以站内信的形式通知',
        actions: [Action],
      },
      {
        title: '系统消息',
        description: '系统消息将以站内信的形式通知',
        actions: [Action],
      },
      {
        title: '账户密码',
        description: '账户密码',
        actions: [Action],
      },
    ];
  };
  render(){
    return (
      <Fragment>
         <h3>新消息通知</h3>
        <List
          itemLayout="horizontal"
          dataSource={this.getData()}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}

export default NewMessage;