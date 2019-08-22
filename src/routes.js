import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import NewEmployees from './Components/NewEmployees/NewEmployees'

export default (
  <Switch>
    <Route path='/' exact component={Home}/>
    <Route path="/newemployees" component={NewEmployees}/>
  </Switch>
)