import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Login  from '../page/login/index'
import Home from '../page/home/index'

class Routes extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/login"  component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Routes