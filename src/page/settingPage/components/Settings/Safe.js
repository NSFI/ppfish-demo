import React, { PureComponent,Fragment } from 'react';
import { List } from 'ppfish';
// const passwordStrength = {
//   strong: (
//     <font className="strong">
//       <FormattedMessage id="app.settings.security.strong" defaultMessage="Strong" />
//     </font>
//   ),
//   medium: (
//     <font className="medium">
//       <FormattedMessage id="app.settings.security.medium" defaultMessage="Medium" />
//     </font>
//   ),
//   weak: (
//     <font className="weak">
//       <FormattedMessage id="app.settings.security.weak" defaultMessage="Weak" />
//       Weak
//     </font>
//   ),
// };
class Safe extends PureComponent {
  constructor(props) {
    super(props);

  }
  getData = () => [
    {
      title: '账户密码',
      description: (
        <Fragment>
          当前密码强度：
          强
        </Fragment>
      ),
      actions: [
        <a>
          修改
        </a>,
      ],
    },
    {
      title:'密保手机',
      description: `已绑定手机：138****8293`,
      actions: [
        <a>
          修改
        </a>,
      ],
    },
    {
      title: '密保问题',
      description: '未设置密保问题，密保问题可有效保护账户安全',
      actions: [
        <a>
          设置
        </a>,
      ],
    },
    {
      title: '备用邮箱',
      description: `已绑定邮箱：：ant***sign.com：ant***sign.com`,
      actions: [
        <a>
          修改
        </a>,
      ],
    },
    {
      title: 'MFA 设备',
      description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
      actions: [
        <a>
          绑定
        </a>,
      ],
    },
  ];
  render(){
    return (
      <Fragment>
         <h3>安全设置</h3>
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

export default Safe;