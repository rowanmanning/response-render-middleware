/**
 * @module @rowanmanning/response-render-middleware
 */
'use strict';

/**
 * Create an Express middleware function which renders a view.
 *
 * @access public
 * @param {string} view
 *     The name of the view to render.
 * @param {object} [locals={}]
 *     The render context to pass on to the view.
 * @returns {import('express').Handler}
 *     Returns a middleware function.
 */
module.exports = function render(view, locals = {}) {
	return (request, response) => {
		response.render(view, locals);
	};
};
