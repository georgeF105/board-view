import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './client/App'
import Boards from './client/Boards'
import Home from './client/Home'

render((
  <div>
  	<App />
  </div>
), document.getElementById('app'))