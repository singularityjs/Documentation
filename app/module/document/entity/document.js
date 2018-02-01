"use strict";

module.exports = function($) {
    return $.require([
        'module!entity/document/introduction.js',
        'module!entity/document/quick_start.js',
        'module!entity/document/architecture.js',
        'module!entity/document/api.js',
        'module!entity/document/license.js',
        'module!entity/document/release.js'
    ], function(
        introduction,
        quick_start,
        architecture,
        api,
        license,
        release
    ) {

        return ({'private': {
            introduction: introduction,
            quick_start: quick_start,
            architecture: architecture,
            api: api,
            license: license,
            release: release
        }});
    });
};
