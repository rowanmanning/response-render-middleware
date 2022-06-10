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
 * @returns {ExpressMiddleware}
 *     Returns a middleware function.
 */
module.exports = function render(view, locals = {}) {
	return (request, response) => {
		response.render(view, locals);
	};
};

/**
 * A middleware function.
 *
 * @callback ExpressMiddleware
 * @param {object} request
 *     An Express Request object.
 * @param {object} response
 *     An Express Response object.
 * @returns {undefined}
 *     Returns nothing.
 */
