import React, { Component,Fragment } from 'react';
import { Card, Badge, Table, Divider,Icon ,Row,Col} from 'ppfish';
import './BasicDetail.less';
//3个为一组
const groupNew = (arr) => {
	let groupArr = [];
	for (let i = 0, len = arr.length; i < len; i += 3) {
		groupArr.push(arr.slice(i, i + 3));
	}
	return groupArr;
};
class AdvancedDetail extends Component {
  
  render() {
    const data1 = [{
      name:'取货单号',
      value:'1000000000'
    },{
      name:'状态',
      value:'已取货'
    },{
      name:'销售单号',
      value:'	1234123421'
    },{
      name:'取货地址',
      value:'浙江省杭州市'
    },{
      name:'备注',
      value:'无'
    }];
   return(
     <Fragment>
       <div className="u-detail-top">
       {
         groupNew(data1).map((r,k)=>
          <Row className="u-detail-row" gutter={20} key={k}>
            {
              r.map((it,i)=>
                <Col span={8} key={i}>
                  <span>{it.name}:</span>
                  <span>{it.value}</span>
                </Col>
              )
            }
          </Row>
         )
       }
      </div>
      <div className="u-detail-top">
       {
         groupNew(data1).map((r,k)=>
          <Row className="u-detail-row" gutter={20} key={k}>
            {
              r.map((it,i)=>
                <Col span={8} key={i}>
                  <span>{it.name}:</span>
                  <span>{it.value}</span>
                </Col>
              )
            }
          </Row>
         )
       }
      </div>
      <div className="u-detail-top" style={{marginBottom:'15px'}}>
       {
         groupNew(data1).map((r,k)=>
          <Row className="u-detail-row" gutter={20} key={k}>
            {
              r.map((it,i)=>
                <Col span={8} key={i}>
                  <span>{it.name}:</span>
                  <span>{it.value}</span>
                </Col>
              )
            }
          </Row>
         )
       }
      </div>
     </Fragment>
   )
  }
}

export default AdvancedDetail;
