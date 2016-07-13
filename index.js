import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { fetchBoards } from './client/actions'
import createLogger from 'redux-logger'


import reducer from './client/reducer';
import App from './client/components/App'

const logger = createLogger()

const store = createStore(
	reducer,
	applyMiddleware(
		thunkMiddleware
	)
	// applyMiddleware(logger)
)

store.dispatch(fetchBoards())

render((
  <Provider store={store}>
  	<App />
  </Provider>
), document.getElementById('app'))