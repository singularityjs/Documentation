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
                'macro': [
                    e.h1('macro')
                ],
                'parts_setup': [
                    e.h1('parts_setup')
                ],
                'parts_engine': [
                    e.h1('parts_engine')
                ],
                'parts_bootstrap': [
                    e.h1('parts_bootstrap')
                ],
                'parts_module': [
                    e.h1('parts_module')
                ]
            }
        };

        return ({'private': o});
    });
};
