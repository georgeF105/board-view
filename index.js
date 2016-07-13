import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { fetchBoards } from './client/actions'


import reducer from './client/reducer';
import App from './client/components/App'

const store = createStore(
	reducer,
	applyMiddleware(
		thunkMiddleware
	)
)

store.dispatch(fetchBoards())

render((
  <Provider store={store}>
  	<App />
  </Provider>
), document.getElementById('app'))