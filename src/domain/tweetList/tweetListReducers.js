import * as types from './tweetListActionTypes.js'
import { List, Map } from 'immutable'

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
        banner: action.profile.banner,
        profile: action.profile.profile,
        tweets: List(action.profile.tweets)
      })

    default:
      return state
  }
}
