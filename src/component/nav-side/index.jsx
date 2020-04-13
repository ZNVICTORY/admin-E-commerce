import React from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

import './index.css'
@withRouter
class NavSide extends React.Component {
  render() {
    const Item = Menu.Item
    const { SubMenu } = Menu
    return (
      <Menu
        className="navbar-side"
        mode="inline"
        theme="dark"
      >
        <Item key="index" onClick={() => this.props.history.push('/home')}>
          <Icon type="bar-chart" />
              首页
          </Item>
        <SubMenu
          mode="inline"
          theme="dark"
          title={
            <span>
              <Icon type="unordered-list" />
              <span>商品</span>
            </span>
          }>
          <Item key="1">
            <Link to="/product/index">商品管理</Link>
          </Item>
          <Item key="2">
            <Link to="/product-category/index">品类管理</Link>
          </Item>
        </SubMenu>
        <SubMenu
          mode="inline"
          theme="dark"
          title={
            <span>
              <Icon type="check-square" />
              <span>订单</span>
            </span>
          }>
          <Item key="3">
            <Link to="/order/index">订单管理</Link>
          </Item>
        </SubMenu>
        <SubMenu
          mode="inline"
          theme="dark"
          title={
            <span>
              <Icon type="user" />
              <span>用户</span>
            </span>
          }>
          <Item key="4">
            <Link to="/user/index">用户管理</Link>
          </Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default NavSide