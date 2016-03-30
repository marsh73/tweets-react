import axios from 'axios'

function getMyBanner (handle) {
  return axios.get('http://localhost:3000/api/banner?screenName='+handle);
}

function getMyProfile (handle) {
  return axios.get('http://localhost:3000/api/profile?screenName='+handle);
}

function getMyTweets (handle) {
  return axios.get('http://localhost:3000/api/tweets?screenName='+handle);
}

export const updateHandle = (handle) => {
  return axios.all([getMyBanner(handle), getMyProfile(handle), getMyTweets(handle)])
    .then( axios.spread( (banner, profile, tweets) => {
      console.log('returning data')
      var bannerL = banner ? banner.data.sizes['1500x500'].url : '';
      return {
        banner: bannerL,
        profile: profile.data,
        tweets: tweets.data
      };

    }))
}

