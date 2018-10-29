import React, { PureComponent } from 'react';
import { Icon, Skeleton } from 'ppfish';
import './index.less';
class Success extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount(){
    const that = this;
    setTimeout(()=>{
      that.setState({
        loading:false
      })
    },1000)
  }
  render() {
    return (
      <div className="demo-success">
        <div className="success-circle">
          <Icon type="check-line" />
        </div>
        <p className="success-title">提交成功</p>
        <p className="success-content">
          提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
        </p>
        <div className="success-describe" >
          <Skeleton loading={this.state.loading} active>
            <div style={{padding:10}}>
              <h4>Fish Design</h4>
              <p style={{textIndent:'2em'}}>Fish Design 是基于 React 实现的高质量的 UI 组件库，设计原则是简洁、直接、优雅和适应性。</p>
              <p style={{textIndent:'2em'}}>Fish Design 是基于 React 实现的高质量的 UI 组件库，设计原则是简洁、直接、优雅和适应性。</p>
              <p style={{textIndent:'2em'}}>Fish Design 是基于 React 实现的高质量的 UI 组件库，设计原则是简洁、直接、优雅和适应性。</p>
            </div>
          </Skeleton>
        </div>
      </div>


    )
  }
}
export default Success;