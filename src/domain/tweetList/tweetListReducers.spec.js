import { twtProfile } from './tweetListReducers'
import * as types from './tweetListActionTypes.js'
import { List, Map } from 'immutable'

describe('tweetList reducer', () => {
  let profile = {
    banner: 'url',
    profile: {name: 'tom'},
    tweets: []
  }
  it('should return the initial state', () => {
    expect(
      twtProfile(undefined, {})
    ).toEqual(
      {
        loadingTweets: false,
        loadingBanner: false,
        loadingProfile: false,
        tweets: List(),
        profileName: null,
        profileImg: null,
        banner: null,
        handle: null
      }
    )
  })

  it('should handle CHANGED_HANDLE', () => {
    expect(
      twtProfile([], {
        type: types.CHANGED_HANDLE,
        profile: profile
      })
    ).toEqual({
        banner: 'url',
        profile: {name: 'tom'},
        tweets: List()
      }
    )
  })
})