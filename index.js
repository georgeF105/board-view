import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './client/reducer';
import App from './client/components/App'

const store = createStore(reducer)

render((
  <Provider store={store}>
  	<App />
  </Provider>
), document.getElementById('app'))