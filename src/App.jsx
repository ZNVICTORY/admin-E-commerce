import React from 'react'
import Routes from './router/router'
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}
export default App;
