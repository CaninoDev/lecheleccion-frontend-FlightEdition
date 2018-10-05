import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import App from '../App'

/* REMOVE in production !!! */
const loggedIn = true;
const Routes = () => {
  return (
      <Router>
          <Switch>
              <Route exact path='/' render={() => (
                  loggedIn ? (
                      <Redirect to='/dashboard'/>
                  ) : (
                      null
                  )
              )}/>
              <Route path='/dashboard' component={App}/>
          </Switch>
      </Router>
  )
}

export default Routes
