import React, { Component, PropTypes } from 'react';
import {linkMentions} from './tweetUtils.js';

export default class Tweet extends Component {

  rawMarkup() {
     return { __html: linkMentions(this.props.text) };
   }

  render() {
    return (
      <li className="tweetItem">
        <span className="glyphicon glyphicon-pencil tweetPencil" />
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </li>
    );
  }
}

Tweet.propTypes = {
  text: PropTypes.string.isRequired
};
