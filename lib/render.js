'use strict';

/**
 * Create an Express middleware function which renders a view.
 *
 * @public
 * @param {string} view
 *     The name of the view to render.
 * @param {object} [locals]
 *     The render context to pass on to the view.
 * @returns {import('express').Handler}
 *     Returns a middleware function.
 */
function render(view, locals = {}) {
	return (_request, response) => {
		response.render(view, locals);
	};
}

module.exports = render;
module.exports.default = module.exports;
