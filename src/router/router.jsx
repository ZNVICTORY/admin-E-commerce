import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login  from '../page/login/index'
import Home from '../page/home/index'
import Layout from '../component/layout'
import DashBoard from '../component/dashboard'
import PageContent from '../component/page-content'
import Product from '../page/product/product'
import Detail from '../component/product/detail'
import Edit from '../component/product/edit'
import Adding from '../component/product/Adding'
import CateGory from '../page/product/category'
import CategoryChild from '../component/product/CategoryChild'
import AddCate  from '../component/product/AddCate'
import UserList from '../page/user/userlist'
import OrderList from '../page/order/orderlist'
import OrderItem from '../component/order/orderitem'

class Routes extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/login"  component={Login} />
          <Home>
            <Layout />
            <DashBoard >
              <Route render={() => (
                <Switch>
                  <Route path="/home" component={PageContent} />
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
                </Switch>
              )}/>
            </DashBoard> 
          </Home> 
        </Switch>
      </Router>
    )
  }
}
export default Routes