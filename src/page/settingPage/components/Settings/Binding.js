import React, { PureComponent,Fragment } from 'react';
import { List } from 'ppfish';
class Binding extends PureComponent {
  constructor(props) {
    super(props);
  }
  getData = () => [
    {
      title: '绑定网易泡泡',
      description: '当前未绑定网易泡泡',
      actions: [
        <a>
         绑定
        </a>,
      ],
      avatar: <div>图标</div>,
    },
    {
      title: '绑定网易宝',
      description: '当前未绑定网易宝',
      actions: [
        <a>
          绑定
        </a>,
      ],
      avatar: <div>图标</div>,
    },
    {
      title: '绑定易信',
      description: '当前未绑定易信',
      actions: [
        <a>
          绑定
        </a>,
      ],
      avatar: <div>图标</div>,
    },
  ];

  render(){
    return (
      <Fragment>
        <h3>账号绑定</h3>
        <List
          itemLayout="horizontal"
          dataSource={this.getData()}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta
                avatar={item.avatar}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}

export default Binding;