import React from 'react'
import {Row, Col, Icon} from 'antd'
import './index.css'

class PageContent extends React.Component{
  render(){
    return (
      <Row className="dash_content">
        <Col span={8} className="dash_item">
              <a className="color-box brown" href="/user/index" >
                 <p className="count" >4636</p>
                 <p className="desc">
                   <Icon type="user" /> 
                   <span>用户总数</span>
                 </p>
              </a>
        </Col>
        <Col span={8} className="dash_item">
              <a className="color-box green" href="/product/index" >
                 <p className="count" >4999</p>
                 <p className="desc">
                 <Icon type="unordered-list" />
                   <span>商品总数</span>
                 </p>
              </a>
        </Col>
        <Col span={8} className="dash_item">
              <a className="color-box blue" href="/order/index" >
                 <p className="count" >9999</p>
                 <p className="desc">
                 <Icon type="check-square" />
                   <span>订单总数</span>
                 </p>
              </a>
        </Col>
        
      </Row>
    )
  }
}
export default PageContent