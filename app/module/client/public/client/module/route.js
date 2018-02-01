var _App;
(function($) {
    "use strict";

    $.route.add({
        path: '/home',
        action: {
            controller: 'home',
            method: 'index'
        }
    }).add({
        path: '/document/:page/:scroll',
        param: {
            page: '[0-9a-z_]+',
            scroll: '[0-9a-z_]+'
        },
        action: {
            controller: 'document',
            method: 'index'
        }
    });
    
})(_App || (_App = {}));