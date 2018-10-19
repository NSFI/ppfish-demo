import React, { Component } from 'react';
import { Tooltip } from 'ppfish';
import './index.less';
class Header extends Component {
  render() {
    return (
      <div className="g-rigidDemand" >
        <div className="u-content" >
          <div className="u-rigidDemand-title">
            <div className="u-rigidDemand-title-top">月访问量</div>
            <div className="u-rigidDemand-title-bottom">
              <Tooltip placement="bottom" title="年龄：20-25">
                <div className="tagItem">
                  年龄：20-25
              </div>
              </Tooltip>
              <Tooltip placement="bottom" title=" 收入:中档，高档">
                <div className="tagItem" >
                  职业:IT
              </div>
              </Tooltip>
              <Tooltip placement="bottom" title="是否有车：否">
                <div className="tagItem">
                  性别:男，女
              </div>
              </Tooltip>
            </div>
          </div>
          <div className="u-statistical" >
            <div>
              <div className="u-description">
                访问量
            </div>
              <div className="u-number">
                999,999
            </div>
            </div>
            <div>
              <div className="u-description">
                下载数
              </div>
              <div className="u-number">
                999,999
            </div>
            </div>
            <div>
              <div className="u-description">
                销售额
              </div>
              <div className="u-number">
                999,999
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;