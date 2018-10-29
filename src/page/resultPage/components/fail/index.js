import React, { PureComponent } from 'react';
import { Icon, Tree } from 'ppfish';
import './index.less';
const TreeNode = Tree.TreeNode
class fail extends PureComponent {
  render() {
    return (

      <div className="demo-fail">

        <div className="fail-circle">
          <Icon type="close-modal-line" />
        </div>
        <p className="fail-title">提交失败</p>
        <p className="fail-content">
          请核对并修改以下信息后，再重新提交。
        </p>
        <div className="fail-describe">
          <h4 style={{textIndent:'2em',paddingTop:10}}>问题目录</h4>
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={this.onSelect}
            onCheck={this.onCheck}
          >
            <TreeNode title="系统一" key="0-0">
              <TreeNode title="主题" key="0-0-0">
                <TreeNode title="系统一" key="0-0-0-0" disableCheckbox disabled />
                <TreeNode title="系统二" key="0-0-0-1" />
              </TreeNode>
              <TreeNode title="故障系统" key="0-0-1">
                <TreeNode title={<span style={{ color: '#1890ff' }}>故障系统2</span>} key="0-0-1-0" />
              </TreeNode>
            </TreeNode>
          </Tree>
        </div>
      </div>


    )
  }
}
export default fail;