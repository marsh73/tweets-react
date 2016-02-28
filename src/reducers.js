import { combineReducers } from 'redux';
import { twtProfile } from './domain/tweetList/tweetListReducers.js';

export default combineReducers({
  twtProfile,
});
