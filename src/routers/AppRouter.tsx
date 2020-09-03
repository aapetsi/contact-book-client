import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import AddContact from '../components/AddContact'
import MainApp from '../components/MainApp'

const AppRouter = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route path='/' exact={true} component={MainApp}/>
          <Route path='/add-contact' component={AddContact} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default AppRouter