import { updateHandle } from './tweetListApi'
import nock from 'nock'

describe('updateHandle', () => {

  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVED_TWEETS when fetching tweets has been done', (done) => {
    nock('http://localhost:3000/api/')
      .get('/tweets')
      .reply(200, { body: { tweets: ['list'] }})
    nock('http://localhost:3000/api/')
      .get('/banner')
      .reply(200, { body: { banner: { sizes: { '1500x500': ['list']}} }})
    nock('http://localhost:3000/api/')
      .get('/profile')
      .reply(200, { body: { profile: {'name': 'john'} }})
    
    updateHandle('test')
    .then( (data) => {
      console.log('data', data)
    })
    .then(done)
    .catch(done)
  })

})
