import React from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import TweetList from './TweetList.jsx'
import ChangeHandle from './ChangeHandle'
import tweets from './tweets.js'
import {fetchTweets, fetchBanner, updateHandle, fetchProfile} from '../../domain/tweetList/tweetListActions'
import {RaisedButton, Slider} from 'material-ui/lib'


export default class TweetListContainer extends React.Component {

  getBackgroundImage(banner) {
    return {
      backgroundImage: 'url(' + banner + ')',
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevProps.params !== this.props.params){
      this.updateUser()
    }
  }

  updateUser () {
    const handle = this.props.params.handle
    let user = handle ? handle : 'lakings'
    const { dispatch } = this.props
    dispatch(updateHandle(user))
  }

  componentDidMount() {
    this.updateUser()
  }

  render() {
    const { dispatch, loadingTweets, loadingProfile, loadingBanner, profileName, profileImg, banner } = this.props
    const tweets = this.props.tweets.toArray()
    return (
      <div>
        <div style={this.getBackgroundImage(banner)} className="banner tweetyBanner"></div>
        <div className="wrapper">
          <h1> {profileName} </h1>
          <div className="container-fluid">
            <img src={profileImg} className="twitterProfileImg hello"/>
            <div className="row-fluid">
              <ChangeHandle dispatch={dispatch}/>
              <TweetList tweets={tweets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({ ...state.default.twtProfile, ...state.routing })


export default connect(mapStateToProps)(TweetListContainer)
