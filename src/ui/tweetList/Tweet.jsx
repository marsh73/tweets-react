import React, { Component, PropTypes } from 'react'
import { linkMentions } from './tweetUtils.js'

function rawMarkup (text) {
  return { __html: linkMentions(text) }
}

const Tweet = props => {

  return (
    <li className="tweetItem">
      <span className="glyphicon glyphicon-pencil tweetPencil" />
      <span dangerouslySetInnerHTML={rawMarkup(props.text)} />
    </li>
  )
}

Tweet.propTypes = {
  text: PropTypes.string.isRequired
}

export default Tweet