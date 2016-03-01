import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from './tweetListActionTypes'
import * as actions from './tweetListActions'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('tweetListActions', () => {

  afterEach(() => {
    nock.cleanAll()
  })

  describe('fetchTweets', function() {

    it('creates RECEIVED_TWEETS when fetching tweets has been done', (done) => {
      nock('http://localhost:3000/')
        .get('/tweets')
        .reply(200, { body: { tweets: ['list'] }})

      const expectedActions = [
        { type: types.REQUESTED_TWEETS },
        { type: types.RECEIVED_TWEETS, body: { tweets: ['list']  } }
      ]
      const store = mockStore({ tweets: [] }, expectedActions, done)
      store.dispatch(actions.fetchTweets('test'))
    })

  });

  describe('fetchBanner', function() {

    it('creates RECEIVED_TWT_BANNER when fetching banner has been done', (done) => {
      nock('http://localhost:3000/')
        .get('/banner')
        .reply(200, { body: { banner: { sizes: { '1500x500': ['list']}} }})

      const expectedActions = [
        { type: types.REQUESTED_TWT_BANNER },
        { type: types.RECEIVED_TWT_BANNER, body: { tweets: ['list']  } }
      ]
      const store = mockStore({ banner: {} }, expectedActions, done)
      store.dispatch(actions.fetchBanner('test'))
    })

  });

  describe('fetchProfile', function() {

    it('creates RECEIVED_TWT_PROFILE when fetching profile has been done', (done) => {
      nock('http://localhost:3000/')
        .get('/profile')
        .reply(200, { body: { profile: {'name': 'john'} }})

      const expectedActions = [
        { type: types.REQUESTED_TWT_PROFILE },
        { type: types.RECEIVED_TWT_PROFILE, body: { profile: {'name': 'john'} } }
      ]
      const store = mockStore({ profile: {} }, expectedActions, done)
      store.dispatch(actions.fetchProfile('test'))
    })

  });

})
