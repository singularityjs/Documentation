"use strict";

module.exports = function() {
	return ({
		dependencies: {},
		route: [
			'config/document.js'
		],
		cdn: [
			{
				path: '/images/document/',
				priority: 3,
				source: 'images'
			}
		],
		import: []
	});
};
