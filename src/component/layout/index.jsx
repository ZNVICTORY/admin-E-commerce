import React, { Fragment} from 'react'
import NavTop from '../nav-top/index'
import NavSide from '../nav-side/index'

class Layout extends React.Component {
  render() {
    return (
      <Fragment>
        <NavTop />
        <NavSide />
      </Fragment>
    )
  }
}

export default Layout