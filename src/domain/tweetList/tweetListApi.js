import * as types from './tweetListActionTypes';
import fetch from 'isomorphic-fetch';
import { receiveBanner } from './tweetListActions'

function fetchTweets (handle) {
  return dispatch => {
    dispatch(requestTweets(handle))
    return fetch('http://localhost:3000/api/tweets?screenName='+handle)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        return [{}]
      })
      .then(tweets => {
        dispatch(receiveTweets(handle, tweets));
      })
      .catch( error => {
        console.log('caught an error', error)
      })
  }
}

export const fetchBanner = (handle, dispatch) => {
  return fetch('http://localhost:3000/api/banner?screenName='+handle)
    .then(response => response.json())
    .then( (banner) => {
      var bannerL = banner ? banner.sizes['1500x500'].url : '';
      dispatch(receiveBanner(handle, bannerL))
    })
}

function fetchProfile (handle) {
  return dispatch => {
    dispatch(requestTwtProfile(handle))
    return fetch('http://localhost:3000/api/profile?screenName='+handle)
      .then(response => response.json())
      .then(profile => dispatch(receiveTwtProfile(handle, profile)))
  }
}
