'use strict';

const assert = require('node:assert');
const td = require('testdouble');

describe('lib/render', () => {
	let render;

	beforeEach(() => {
		render = require('../../../lib/render');
	});

	it('is a function', () => {
		assert.strictEqual(typeof render, 'function');
	});

	describe('render(view, locals)', () => {
		let middleware;

		beforeEach(() => {
			middleware = render('mock-view', 'mock-locals');
		});

		it('returns a function', () => {
			assert.strictEqual(typeof middleware, 'function');
		});

		describe('middleware(request, response)', () => {
			let mockRequest;
			let mockResponse;

			beforeEach(() => {
				mockRequest = {};
				mockResponse = {
					render: td.func()
				};
				middleware(mockRequest, mockResponse);
			});

			it('calls `response.render` with the `view` and `locals`', () => {
				td.verify(mockResponse.render('mock-view', 'mock-locals'), {times: 1});
			});

		});

		describe('when `locals` is not defined', () => {

			beforeEach(() => {
				middleware = render('mock-view');
			});

			describe('middleware(request, response)', () => {
				let mockRequest;
				let mockResponse;

				beforeEach(() => {
					mockRequest = {};
					mockResponse = {
						render: td.func()
					};
					middleware(mockRequest, mockResponse);
				});

				it('calls `response.render` with the `view` and an empty object', () => {
					td.verify(mockResponse.render('mock-view', {}), {times: 1});
				});

			});

		});

	});

	describe('.default', () => {
		it('aliases the module exports', () => {
			assert.strictEqual(render, render.default);
		});
	});

});
