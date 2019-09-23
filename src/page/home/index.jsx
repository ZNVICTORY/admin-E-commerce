import React, { Fragment } from 'react'
import Layout from '../../component/layout'
import DashBoard from '../../component/dashboard'

class Home extends React.Component{
  render() {
    return (
       <Fragment>
         <Layout />
         <DashBoard />
       </Fragment>
    )
  }
}
export default Home