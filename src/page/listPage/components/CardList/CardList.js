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
      avatar:'../../../../../assets/img/FD-Logo.png',
      title:'React',
      description:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
    },{
      id:'2',
      avatar:'../../../../../assets/img/FD-Logo.png',
      title:'Vue',
      description:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
    },{
      id:'3',
      avatar:'../../../../../assets/img/FD-Logo.png',
      title:'Angular',
      description:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
    },{
      id:'4',
      avatar:'../../../../../assets/img/FD-Logo.png',
      title:'Fish Design',
      description:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
    },{
      id:'5',
      avatar:'../../../../../assets/img/FD-Logo.png',
      title:'Fish Design',
      description:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
    },{
      id:'6',
      avatar:'../../../../../assets/img/FD-Logo.png',
      title:'Fish Design',
      description:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
    },{
      id:'7',
      avatar:'../../../../../assets/img/FD-Logo.png',
      title:'Fish Design',
      description:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
    },{
      id:'8',
      avatar:'../../../../../assets/img/FD-Logo.png',
      title:'Fish Design',
      description:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
    },];
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
                        <div className="item">{item.description}</div>
                        
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