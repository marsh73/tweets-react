import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory,useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history'

import { configureStore } from './store'
import routes from './routes'

let state = window.__initialState__ || undefined
const store = configureStore(browserHistory, state)
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(appHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('app')
);
