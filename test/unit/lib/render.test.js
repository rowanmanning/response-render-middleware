'use strict';

const assert = require('proclaim');
const sinon = require('sinon');

describe('lib/render', () => {
	let render;

	beforeEach(() => {
		render = require('../../../lib/render');
	});

	it('is a function', () => {
		assert.isFunction(render);
	});

	describe('render(view, locals)', () => {
		let middleware;

		beforeEach(() => {
			middleware = render('mock-view', 'mock-locals');
		});

		it('returns a function', () => {
			assert.isFunction(middleware);
		});

		describe('middleware(request, response)', () => {
			let mockRequest;
			let mockResponse;

			beforeEach(() => {
				mockRequest = {};
				mockResponse = {
					render: sinon.spy()
				};
				middleware(mockRequest, mockResponse);
			});

			it('calls `response.render` with the `view` and `locals`', () => {
				assert.calledOnce(mockResponse.render);
				assert.calledWithExactly(mockResponse.render, 'mock-view', 'mock-locals');
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
						render: sinon.spy()
					};
					middleware(mockRequest, mockResponse);
				});

				it('calls `response.render` with the `view` and an empty object', () => {
					assert.calledOnce(mockResponse.render);
					assert.calledWith(mockResponse.render, 'mock-view', {});
				});

			});

		});

	});

});
