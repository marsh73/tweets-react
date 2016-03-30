import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from './tweetListActionTypes'
import { updateHandle } from './tweetListActions'
import * as api from './tweetListApi'
import nock from 'nock'



const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('tweetListActions', () => {
  const user = 'lakings'

  beforeEach(() => {
    nock('http://localhost:3000/api/')
      .get('/tweets')
      .query(true)
      .reply(200, { body: { tweets: ['list'] }})
      .get('/banner')
      .query(true)
      .reply(200, { body: { banner: { sizes: { '1500x500': ['list']}} }})
      .get('/profile')
      .query(true)
      .reply(200, { body: { profile: {'name': 'john'} }})
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('should execute promise', (done) => {

    spyOn(api, 'updateHandle').and.callThrough()


    function success(user) {
      return {
        type: types.CHANGED_HANDLE,
        profile: user
      }
    }
    const store = mockStore({})

    store.dispatch(updateHandle(user))
      .then(() => {
        console.log('hello', store.getActions())
        done()
      })
      .then(done)
      .catch(done)
  })


})
