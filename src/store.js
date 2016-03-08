import React from 'react';
import { Router, Route, browserHistory} from 'react-router';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from './reducers';

import DevTools from './lib/devtools';

export function configureStore(history, initialState = {}) {
  console.log(...reducers);
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })
  const middleware = routerMiddleware(history)

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history)),
      DevTools.instrument()
    )
  )

  return store
}


