import React ,{Fragment }from 'react'
import {Menu, Icon ,Dropdown} from 'antd'
import './index.css'
import { withRouter } from 'react-router'
import cookies from 'browser-cookies'

@withRouter
class NavTop extends React.Component{
  constructor(props) {
    super(props)
    this.ToLogOut = this.ToLogOut.bind(this)
  }
  // 退出登陆操作
  ToLogOut(){
    cookies.erase('userId'); 
    this.props.history.push('/login')
  }

  render(){
    const Item = Menu.Item
    const menu = (
      <Menu>
        <Item key="out">
          <a  onClick={this.ToLogOut}><Icon type="logout" />退出登陆</a>
        </Item>
      </Menu>
    )
    return(
      <Fragment>
         <Menu mode="horizontal" className="navbar-header">
             <Item key="mall" className="navbar-title"><b>HAPPY</b><b>MALL</b></Item>
             <Item key="login">
                <Dropdown className="navbar-login" overlay={menu} placement="bottomCenter">
                   <a className="ant-dropdown-link " >
                      <Icon type="user" /><span>欢迎,admin</span>
                   </a>
                </Dropdown>
             </Item>
         </Menu>
      </Fragment>
    )
  }
}
export default NavTop