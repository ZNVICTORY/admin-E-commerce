import React from 'react'
import './index.css'
import PageTitle from '../page-title'
import { withRouter } from 'react-router-dom'

@withRouter
class DashBoard extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  render() {
    // console.log(this.props.children)
    return (
      <div className="content">
        <PageTitle title={this.props.location.pathname} />
        {this.props.children}
      </div>
    )
  }
}

export default DashBoard