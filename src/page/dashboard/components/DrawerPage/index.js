import React, { Component } from 'react';
import { Drawer ,Menu,Icon,Button,Tree,Divider} from 'ppfish';
const TreeNode = Tree.TreeNode;
class DrawerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      styleHeight:{
        right:0,
        position:'fixed',
        top:'50%'
      }
    };
    
  }
  onChange = (bool) => {
    console.log(bool);
  }

  onTouchEnd = () => {
    this.setState({
      open: false,
    },()=>{
      this.setState({
        styleHeight: {right:this.state.open?384:0,
          position:'fixed',
          top:'50%'
        }
      })
    });
  }

  onSwitch = () => {
    
    this.setState({
      open: !this.state.open,
    },()=>{
      this.setState({
        styleHeight: {right:this.state.open?384:0,
          position:'fixed',
          top:'50%'
        }
      })
    });
  }
  onCloseClick = () => {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    console.log(this.state)
    return (
      <div>
        
        <Drawer
          handler={false}
          level={null}
          width="30vw"
          visible={this.state.open}
          close={true}
          onChange={this.onChange}
          onMaskClick={this.onTouchEnd}
          onCloseClick={this.onCloseClick}
        >
          <div>
          <div style={{textAlign:'right',padding:10}}>
        <Icon type="close-tag-line" style={{cursor:'pointer'}} onClick={()=>{this.setState({open: !this.state.open,},()=>{
      this.setState({
        styleHeight: {right:this.state.open?384:0,
          position:'fixed',
          top:'50%'
        }
      })
    })}}/>
        <Divider />

      </div>
          <Tree
        defaultExpandedKeys={['0-0-1']}
        defaultSelectedKeys={['0-0-1-0']}
        onSelect={this.onSelect}
      >
        <TreeNode title="pro" key="0-0-0-0-0">
          <TreeNode title="表单页" key="0-0-0">
            <TreeNode title="基础表单" key="0-0-0-0" disabled />
            <TreeNode title="高级表单" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="列表页" key="0-0-1">
            <TreeNode title="基础列表" key="0-0-0-3" disabled />
            <TreeNode title="高级列表" key="0-0-0-2" />
          </TreeNode>
        </TreeNode>
      </Tree>
          </div>
        </Drawer>
        <div
          style={{
            width: '100%', height: 450,
            textAlign: 'center', lineHeight: '450px',
          }}
        >
          {this.props.children}
          
        </div>
        <Button
            type="primary"
            onClick={this.onSwitch}
            style={this.state.styleHeight}
          >
            {!this.state.open ? '打开菜单' : '关闭菜单'}
          </Button>
      </div>
    )
  }
}

export default DrawerPage;