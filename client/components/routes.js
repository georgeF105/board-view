import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import UserBoardListContainer from './containers/UserBoardListContainer'
import ExampleBoardListContainer from './containers/ExampleBoardListContainer'
import Home from './Home'

export default (
	<Router history={browserHistory}>
		<Route path="/" component={Home}/>
		<Route path="/boards" component={UserBoardListContainer}/>
		<Route path="/boards/examples" component={ExampleBoardListContainer}/>
	</Router>
)