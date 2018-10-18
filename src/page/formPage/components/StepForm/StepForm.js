import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Steps} from 'ppfish';
import './StepForm.less';

class App extends Component {
  constructor(props) {
    super(props);
    // 设置面包屑
    this.breadcrumb = [{
      text: '表单页'
    }];
    this.state = {
      current: 0
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  handleItemChange(index) {
    this.setState({ current: index });
  }
  getCurrentStep() {
    console.log(this.props)
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 2]) {
      case 'step1':
        return 0;
      case 'step2':
        return 1;
      case 'step3':
        return 2;
      default:
        return 0;
    }
  }
  render() {
    this.getCurrentStep()
    const Step = Steps.Step;
    const steps = [{
      title: 'First',
      content: 'First-content',
    }, {
      title: 'Second',
      content: 'Second-content',
    }, {
      title: 'Last',
      content: 'Last-content',
    }];
    return (
        <div className="g-form" style={{padding:24}}>
          <div className="u-form-hd">
            <div className="form-hd-left">
              <h3 className="form-hd-title">分布表单</h3>
            </div>
            <div className="form-hd-right"></div>
          </div>
          <div className="u-form-content">
            <div className="g-steps">
              <Steps current={this.getCurrentStep()} style={{marginBottom:"20px"}}>
                {steps.map((item, i) => <Step key={item.title} title={item.title} onClick={this.handleItemChange.bind(this, i)} />)}
              </Steps>
              {this.props.children}
            </div>
          </div>
        </div>
    );
  }
}
const Demo = Form.create()(App);
export default Demo;

