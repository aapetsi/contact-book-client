import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'

const AppRouter = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route path='/' exact={true}/>
        </Switch>
      </Fragment>
    </Router>
  )
}

export default AppRouter