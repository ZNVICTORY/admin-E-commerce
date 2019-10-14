import React from 'react'
import PageContent from '../page-content/index'
import './index.css'
import PageTitle from '../page-title'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import Product from '../../page/product/product'
import Detail from '../../component/product/detail'
import Edit from '../../component/product/edit'
import Adding from '../../component/product/Adding'
import CateGory from '../../page/product/category'
import CategoryChild from '../../component/product/CategoryChild'
import AddCate  from '../../component/product/AddCate'
import UserList from '../../page/user/userlist'
import OrderList from '../../page/order/orderlist'
import OrderItem from '../../component/order/orderitem'

@withRouter
class DashBoard extends  React.Component{
  render(){
    return (
      <div className="content">
        <PageTitle title={this.props.location.pathname} />
         <Switch>
           <Route exact path="/home" title="首页" component={PageContent} />
           <Route path="/product/index" component={Product} />
           <Route exact path="/product/detail/:id" component={Detail} />
           <Route exact path="/product/save" component={Adding} />
           <Route exact path="/product/save/:id" component={Edit} />
           <Route exact path="/product-category/index/:id" component= {CategoryChild} />
           <Route exact path="/product-category/index" component= {CateGory} />
           <Route exact path="/product-category/add" component= {AddCate} />
           <Route exact path="/user/index" component= {UserList} /> 
           <Route exact path="/order/index" component ={ OrderList} />    
           <Route exact path="/order/detail/:id" component = {OrderItem} />  
           <Redirect from="/" to="/home" /> 
         </Switch>
      </div>
    )
  }
}

export default DashBoard