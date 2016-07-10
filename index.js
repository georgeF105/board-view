import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Boards from './modules/Boards'
import Repo from './modules/Repo'
import Home from './modules/Home'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/boards" component={Boards}>
        <Route path="/boards/:userName/:boardName" component={Boards}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))