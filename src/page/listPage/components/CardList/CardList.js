import React, { Component } from 'react';
import { Card, Button, Icon, List } from 'ppfish';
import './CardList.less';
class CardList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const list = [{
      id:'1',
      avatar:'https://ysf.nosdn.127.net/unanqvsjrxhnpwqrulcuumqxicpwsojh',
      title:'111'
    }];
    return(
      <div>
       <div className="cardList">
          <List
            rowKey="id"
            grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
            dataSource={['', ...list]}
            renderItem={item =>
              item ? (
                <List.Item key={item.id}>
                  <Card hoverable className="card" actions={[<a>操作一</a>, <a>操作二</a>]}>
                    <Card.Meta
                      avatar={<img alt="" className="cardAvatar" src={item.avatar} />}
                      title={<a>{item.title}</a>}
                      description={
                        <div className="item">"aa"</div>
                        
                        // <Ellipsis className="item" lines={3}>
                        //   {item.description}
                        // </Ellipsis>
                      }
                    />
                  </Card>
                </List.Item>
              ) : (
                <List.Item>
                  <Button type="dashed" className="newButton">
                    <Icon type="plus" /> 新增产品
                  </Button>
                </List.Item>
              )
            }
          />
        </div>
      </div>
    )
  }
}

export default CardList;