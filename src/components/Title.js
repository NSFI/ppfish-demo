import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Title.less';


class App extends Component {
  constructor(props) {
    super(props);
    // 设置面包屑
    this.breadcrumb = [{
      text: '详情页'
    }];
  }
  handleChangeTitle = () => {
    const { location,basicList } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    for (let i = 0; i < basicList.length; i++) {
      if (pathList[pathList.length - 1] === basicList[i].conditions) {
        return basicList[i].result;
      }
    }
    return basicList[0].result;
  }
  render() {
    return (
      <div className="g-detail" style={{padding:24}}>
        <div className="u-detail-hd">
          <div className="detail-hd-left">
            <h3 className="detail-hd-title">{this.handleChangeTitle()}</h3>
          </div>
        </div>
        <div className="u-detail-content" >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

