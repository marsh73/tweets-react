import React, { Component, PropTypes } from 'react'
import {fetchTweets, fetchBanner, fetchProfile} from '../../domain/tweetList/tweetListActions'

const contextTypes = {
  router: PropTypes.object.isRequired
}

const propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default class ChangeHandle extends Component {

  changeHandle(e, dispatch) {
    e.preventDefault();
    const input = this.refs.handle;
    const value = input.value.trim();
    if (value) {
      this.context.router.push({pathname: '/user/' + value})
      input.value = '';
    }
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <form onSubmit={e => this.changeHandle(e, dispatch)}>
          <div className="form-inline tweetHandleInput">
            <label>Twitter Handle</label>
            <input type="text" placeholder="lakings" className="input-small" ref="handle"/>
          </div>
        </form>
      </div>
    );
  }
}

ChangeHandle.contextTypes = contextTypes

ChangeHandle.propTypes = propTypes
