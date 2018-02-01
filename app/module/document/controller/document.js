"use strict";

module.exports = function($) {
    return $.require([
        'module!entity/document.js'
    ], function(
        document
    ) {

        /*var make = function(title, content) {
            return {
                tag: 'div',
                set: {},
                child: [
                    {
                        tag: 'a',
                        set: {href: '#/post/id'},
                        child: [
                            {
                                tag: 'h1',
                                child: title
                            }
                        ]
                    },
                    {
                        tag: 'p',
                        child: content
                    }
                ]
            }
        };

        var data = {
          source: 'url',
          module: [
            {
              name: 'cat',
              introdiced: '1.0.0',
              stability: 2,
              content: [
                  {type: 'text', source: 'cat'},
                  {type: 'bold', source: 'cat'},
                  {type: 'code', source: 'cat'},
                  {type: 'image', source: 'cat'},
              ]
            }
          ]
        };


        var a = {child: []};
        for (var i = 0; i < 10; i++) {
            a.child.push(make($.key.random(), lorem.get(128)));
        }*/

        var obj = function() {};
        obj.prototype = $.extends('!controller', {
            get: function(data) {
                console.log(data.body, document);
                return this.res().status(200).data((document[data.body.page]) ? document[data.body.page] : {});
            }
        });

        return ({'static private': obj});
    });
};
