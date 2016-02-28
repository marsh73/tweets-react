import React from 'react';
import {render} from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import TweetListContainer from './ui/tweetList/TweetListContainer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import DevTools from './lib/devtools';


const finalCreateStore = compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(rootReducer);

render(
  <Provider store={store}>
    <div>
      <TweetListContainer />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers.js', () => {
    const nextRootReducer = require('./reducers.js');
    store.replaceReducer(nextRootReducer);
  });
}
