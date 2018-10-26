import React,{PureComponent} from 'react';
import {Icon} from 'ppfish';
import './index.less';
class fail extends PureComponent {
  render(){
    return (
     
      <div className="demo-fail">
        
        <div className="fail-circle">
        <Icon type="close-modal-line"/>
         </div>
        <p className="fail-title">提交失败</p>
        <p className="fail-content">
        请核对并修改以下信息后，再重新提交。
        </p>
        <div className="fail-describe">
        
         </div>
      </div>
      
  
    )
  }
}
export default fail;