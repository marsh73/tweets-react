import React from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import TweetList from './TweetList.jsx';
import ChangeHandle from './ChangeHandle';
import tweets from './tweets.js';
import {fetchTweets, fetchBanner, fetchProfile} from '../../domain/tweetList/tweetListActions';
import {RaisedButton, Slider} from 'material-ui/lib';


export default class TweetListContainer extends React.Component {

  _getBackgroundImage(banner) {
    return {
      backgroundImage: 'url(' + banner + ')',
    }
  }

  changeThis(e){
    console.log(e)
    console.log(this.refs)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchBanner('lakings'));
    dispatch(fetchProfile('lakings'));
    dispatch(fetchTweets('lakings'));
  }

  render() {
    const { dispatch, loadingTweets, loadingProfile, loadingBanner, profileName, profileImg, banner } = this.props;
    const tweets = this.props.tweets.toArray();
    return (
      <div>
        <div style={this._getBackgroundImage(banner)} className="banner tweetyBanner"></div>
        <div className="wrapper">
          <h1> {profileName} </h1>
          <div className="container-fluid">
            <img src={profileImg} className="twitterProfileImg hello"/>
            <div className="row-fluid">
              <ChangeHandle dispatch={dispatch} />
              <TweetList tweets={tweets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({ ...state.twtProfile });


export default connect(mapStateToProps)(TweetListContainer);
