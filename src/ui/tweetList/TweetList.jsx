import React, { Component, PropTypes } from 'react';
import Tweet from './Tweet.jsx';

export default class TweetList extends Component {


  render() {
    let tweets = this.props.tweets.map( (tweet) => {
      return <Tweet text={tweet.text} key={tweet.id_str}></Tweet>
    });
    return (
      <div className="row-fluid">
        <div className="span12">
          <ul className="list-unstyled">
            {tweets}
          </ul>
        </div>
      </div>
    );
  }
}

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired
};
