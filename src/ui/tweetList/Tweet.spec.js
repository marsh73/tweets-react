'use strict'
import React from 'react'
import Tweet from './Tweet.jsx'
import TestUtils from 'react-addons-test-utils'


describe('Tweet Component', function() {

	let renderer = TestUtils.createRenderer()

	it('should render an li', function() {

		renderer.render(<Tweet text="yo @bud" />)

		let tweetNode = renderer.getRenderOutput()

		expect(tweetNode.type).toBe('li')
		expect(tweetNode.props.className).toBe('tweetItem')
	})
})