"use strict";

module.exports = function($) {
    return $.require([
        'module!entity/engine.js'
    ], function(
        e
    ) {

        var o = {
            source: 'url',
            name: 'cat',
            introdiced: '1.0.0',
            stability: 2,
            content: {
                '0a9a0': [
                    e.h1('0.9.0')
                ]
            }
        };

        return ({'private': o});
    });
};
