import React, {Component} from 'react'

import {NewsContainer} from 'news'
import {BiasContainer} from 'biases'


class App extends Component {
  render() {
    return (
       <React.Fragment>
         <NewsContainer/>
         <BiasContainer/>
       </React.Fragment>
    )
  }
}

export default App
