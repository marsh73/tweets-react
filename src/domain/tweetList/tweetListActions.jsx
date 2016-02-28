import * as types from './tweetListActionTypes';
import fetch from 'isomorphic-fetch';


function requestTweets (handle) {
  return {
    type: types.REQUESTED_TWEETS,
    handle
  }
}

function receiveTweets (handle, tweets) {
  return {
    type: types.RECEIVED_TWEETS,
    handle: handle,
    tweets: tweets
  }
}

function requestBanner (handle) {
  return {
    type: types.REQUESTED_TWT_BANNER,
    handle
  }
}

function receiveBanner (handle, bannerUrl) {
  return {
    type: types.RECEIVED_TWT_BANNER,
    handle: handle,
    banner: bannerUrl
  }
}

function requestTwtProfile (handle) {
  return {
    type: types.REQUESTED_TWT_PROFILE,
    handle
  }
}

function receiveTwtProfile (handle, profile) {
  return {
    type: types.RECEIVED_TWT_PROFILE,
    handle: handle,
    profile: profile
  }
}

export const fetchTweets = (handle) => {
  return dispatch => {
    dispatch(requestTweets(handle))
    return fetch('http://localhost:3000/tweets?screenName='+handle)
      .then(response => response.json())
      .then(tweets => dispatch(receiveTweets(handle, tweets)))
  }
}

export const fetchBanner = (handle) => {
  return dispatch => {
    dispatch(requestBanner(handle))
    return fetch('http://localhost:3000/banner?screenName='+handle)
      .then(response => response.json())
      .then( (banner) => {
        var bannerL = banner ? banner.sizes['1500x500'].url : '';
        dispatch(receiveBanner(handle, bannerL))
      })
  }
}

export const fetchProfile = (handle) => {
  return dispatch => {
    dispatch(requestTwtProfile(handle))
    return fetch('http://localhost:3000/profile?screenName='+handle)
      .then(response => response.json())
      .then(profile => dispatch(receiveTwtProfile(handle, profile)))
  }
}



