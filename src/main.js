import React from 'react';
import {render} from 'react-dom';
import { Router, Route} from 'react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import DevTools from './lib/devtools';

import TweetListContainer from './ui/tweetList/TweetListContainer';


const finalCreateStore = compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(rootReducer);

render(
  <div>
    <Provider store={store}>
      <Router>
        <Route path="/" component={ TweetListContainer }/>
      </Router>
    </Provider>
  </div>,
  document.getElementById('app')
);
