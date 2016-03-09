import * as types from './tweetListActionTypes'
import axios from 'axios'
import * as api from './tweetListApi'



function changeProfile (profile) {
  return {
    type: types.CHANGED_HANDLE,
    profile: profile
  }
}

export const updateHandle = (handle) => {
  return dispatch => {
    return api.updateHandle(handle)
      .then(profile => {
        dispatch(changeProfile(profile))
      })
  }
}
