import React, { Component, PropTypes } from 'react';
import Tweet from './Tweet.jsx';

const TweetList = props => {
  const tweets = props.tweets.map(tweet => <Tweet text={tweet.text} key={tweet.id_str}></Tweet>)

  return (
    <div className="row-fluid">
      <div className="span12">
        <ul className="list-unstyled">
          {tweets}
        </ul>
      </div>
    </div>
  )
}

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired
}

export default TweetList