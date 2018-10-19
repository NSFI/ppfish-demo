import React, { Component } from 'react';
import { Tooltip,Tag,Icon,Input } from 'ppfish';
import './index.less';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      tags: ['年龄：20-25', '职业：web前端'],
      inputVisible: false,
      inputValue: '',
    };
  }
  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  saveInputRef = input => this.input = input

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div className="g-rigidDemand" >
        <div className="u-content" >
          <div className="u-rigidDemand-title">
            <div className="u-rigidDemand-title-top">月访问量</div>
            <div className="u-rigidDemand-title-bottom">
              <div>
                {tags.map((tag, index) => {
                  const isLongTag = tag.length > 20;
                  const tagElem = (
                    <Tag key={tag} color="#87d068" closable={index !== 0} afterClose={() => this.handleClose(tag)} >
                      {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                    </Tag>
                  );
                  return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                })}
                {inputVisible && (
                  <Input
                    ref={this.saveInputRef}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputConfirm}
                    onPressEnter={this.handleInputConfirm}
                  />
                )}
                {!inputVisible && (
                  <Tag
                    onClick={this.showInput}
                    style={{ background: '#fff', border: '1px dashed #e1e3e6' }}
                  >
                    <Icon type="upload-plus" /> New Tag
          </Tag>
                )}
              </div>
            </div>
          </div>
          <div className="u-statistical" >
            <div>
              <div className="u-description">
                访问量
            </div>
              <div className="u-number">
                25,992
            </div>
            </div>
            <div>
              <div className="u-description">
                下载数
              </div>
              <div className="u-number">
                13,679
            </div>
            </div>
            <div>
              <div className="u-description">
                销售额
              </div>
              <div className="u-number">
                399,399
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;