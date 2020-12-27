'use strict';

const assert = require('proclaim');
const index = require('../../index');
const render = require('../../lib/render');

describe('index', () => {

	it('aliases `lib/render`', () => {
		assert.strictEqual(index, render);
	});

});
