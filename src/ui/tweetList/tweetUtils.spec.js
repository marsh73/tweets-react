'use strict'

import { linkMentions } from './tweetUtils.js'

describe('tweet Utils', function() {

	describe('linkMentions method', function() {
		it('should create twitter links for mentions', function() {
			let twt = 'hello @tom'
			expect(linkMentions(twt)).toBe('hello <a href="https://twitter.com/tom" target="_blank">@tom</a>')
		});
	});

});