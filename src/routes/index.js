import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import App from 'App'

/* REMOVE in production !!!*/
const loggedIn = true

const Routes = () {
  return (
<Router>
<Switch>
  <Route path='/' render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    null
  )
)}/>
  <Route path='/dashboard' component={AppContainer} />
</Switch>
</Router>
  )
}