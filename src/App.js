import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CakeContainer from "./Components/CakeContainer"
import { Provider } from 'react-redux'
import store from './Components/redux/store'


export class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="container">

          <h6>Rect Redux Test</h6>
          <CakeContainer />
        </div>
      </div>
      </Provider>
    )
  }
}

export default App
