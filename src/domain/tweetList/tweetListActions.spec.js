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


  it('creates RECEIVED_TWEETS when fetching tweets has been done', (done) => {
    nock('http://localhost:3000/')
      .get('/tweets')
      .reply(200, { body: { tweets: ['list'] }})
    nock('http://localhost:3000/')
      .get('/banner')
      .reply(200, { body: { banner: { sizes: { '1500x500': ['list']}} }})
    nock('http://localhost:3000/')
      .get('/profile')
      .reply(200, { body: { profile: {'name': 'john'} }})
    
    const expectedActions = [
      { type: types.CHANGED_HANDLE, body: { tweets: ['list']  } }
    ]
    const store = mockStore({ banner: null, profile: {}, tweets: [] }, expectedActions, done)
    store.dispatch(actions.updateHandle('test'))
    .then( () => {
      console.log('successor')
    })
    .then(done)
    .catch(done)
  })

})
