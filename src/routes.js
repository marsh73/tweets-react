import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import TweetListContainer from './ui/tweetList/TweetListContainer'
import Home from './ui/home/Home'
import App from './App';

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="/user/lakings" />
    <Route path="home" component={Home} />
    <Route path="user(/:handle)" component={TweetListContainer} />
  </Route>
)

export default routes
