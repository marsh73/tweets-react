'use strict'
import React from 'react'
import TweetList from './TweetList.jsx'
import TestUtils from 'react-addons-test-utils'
import tweets from './tweets.js'

describe('TweetList Component', function() {

	let twts = tweets.slice(0, 2)

	let renderer = TestUtils.createRenderer()

	it('should render an li', function() {

		renderer.render(<TweetList tweets={twts} />)

		let tweetList = renderer.getRenderOutput()

		expect(tweetList.type).toBe('div')
		expect(tweetList.props.className).toBe('row-fluid')

	})
})