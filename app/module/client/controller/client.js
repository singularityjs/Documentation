"use strict";

module.exports = function($) {
	return $.require([
		'import!webapp',
		'import!placeholder'
	], function(
		webapp,
		placeholder
	) {

		var obj = function() {
			this._priority = {
				'/route.js': 7
			};
		};
		obj.prototype = $.extends('!controller', {
			index: function() {
				return (webapp.main({
					header: ['<title>Singularity</title>'],
					main: '/client/main.js'
				}));
			},

			json: function(data) {
				const self = this;
				return (webapp.files($.path('module!/public/client/module'), '/client/module', this._priority).then(function(files) {
					return self.res().status(200).data(files);
				}));
			},

			main: function(data) {
				return (this.file({contentDisposition: 'inline', path: $.path('module!/public/' + data.url)}));
			},

			cdn: function(data) {
				var url = ('/' + data.url).replace(/\/{2,}/g, '/');
				if (url.match(/^(\/[a-z]+)+\.js$/)) {
					return (this.file({contentDisposition: 'inline', path: $.path('module!/public/' + data.url)}));
				}
				return (this.res().status(500).data('F101'));
			},

			fav: function() {
				return (this.file({contentDisposition: 'inline', path: $.path('module!/public/semantic/logo.png')}));
			}
		});

		return ({'static private': obj});
	});
};
