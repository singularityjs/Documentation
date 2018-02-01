"use strict";

module.exports = function(r, i) {
	return ([
		{
			method: ['get'],
			path: '/document/data/',
			action: {
				controller: 'document',
				method: 'get'
			}
		}
	]);
};
