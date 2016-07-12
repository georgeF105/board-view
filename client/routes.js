import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Boards from './Boards'
import Home from './Home'

export default (
	<Router history={browserHistory}>
		<Route path="/" component={Home}/>
		<Route path="/boards" component={Boards}/>
		<Route path="/boards/:userName/:boardName" component={Boards}/>
	</Router>
)