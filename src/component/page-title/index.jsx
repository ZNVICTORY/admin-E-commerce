import React from 'react'
import { withRouter } from 'react-router-dom'
@withRouter
class PageTitle extends React.Component{

  render(){
    const path = this.props.title
    let pathname = ''
    switch(path) {
      case '/home'                       : pathname = '首页'; break;
      case '/product/index'              : pathname = '商品管理'; break;
      case '/product/save'               : pathname = '商品管理--添加商品';break;
      case '/product/save/:id'           : pathname = '商品管理--修改商品';break;
      case '/product-category/index'     : pathname = '品类管理' ;break;
      case '/product-category/add'       : pathname = '品类管理--添加品类'; break;
      case '/product-category/index/:id' : pathname = '品类管理'; break;
      case '/user/index'                 : pathname = '用户管理';break;
      case '/order/index'                : pathname = '订单管理';break;
      case '/order/detail/:id'           : pathname = '订单详情';break;
      default                            : pathname = 'HAPPLYMALL' 
    }
    document.title = pathname
    return (
      <h1 >{pathname}</h1>
    )
  }
}

export default PageTitle