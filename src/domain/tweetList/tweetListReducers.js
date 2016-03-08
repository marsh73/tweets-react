import * as types from './tweetListActionTypes.js';
import { List, Map } from 'immutable';

const initialState = {
  loadingTweets: false,
  loadingBanner: false,
  loadingProfile: false,
  tweets: List(),
  profileName: null,
  profileImg: null,
  banner: null,
  handle: null
};

export const twtProfile = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGED_HANDLE:
      return Object.assign({}, state, {
        handle : action.handle
      })

    case types.REQUESTED_TWEETS:
      return Object.assign({}, state, {
        loadingTweets : true
      })

    case types.RECEIVED_TWEETS:
      return Object.assign({}, state, {
        loadingTweets: false,
        tweets: List(action.tweets)
      })

    case types.REQUESTED_TWT_BANNER:
      return Object.assign({}, state, {
        loadingBanner : true
      })

    case types.RECEIVED_TWT_BANNER:
      return Object.assign({}, state, {
        loadingBanner: false,
        banner: action.banner
      })

    case types.REQUESTED_TWT_PROFILE:
      return Object.assign({}, state, {
        loadingProfile : true
      })

    case types.RECEIVED_TWT_PROFILE:
      return Object.assign({}, state, {
        loadingProfile: false,
        profileName: action.profile.name,
        profileImg: action.profile.profile_image_url
      })

    default:
      return state;
  }
}
