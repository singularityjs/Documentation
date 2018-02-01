"use strict";

module.exports = function($) {
    return $.require([
        'module!entity/lorem.js'
    ], function(
        lorem
    ) {

        var obj = function() {};
        obj.prototype = {
            h1: function(data) {
                return {
                    tag: 'h1',
                    child: data
                }
            },

            h2: function(data) {
                return {
                    tag: 'h2',
                    child: data
                }
            },

            div: function(data) {
                return {tag: 'div', child: data};
            },

            span: function(data) {
                return {tag: 'span', child: data};
            },

            a: function(data, url) {
                return {tag: 'a', set: {style: {margin: '0px 3px'}, href: url}, child: data};
            },

            text: function(data) {
                return {
                    tag: 'p',
                    child: data
                }
            },

            code: function(data) {
                return {
                    tag: 'div',
                    set: {style: {background: 'rgb(45, 45, 45)', padding: '5px', marginBottom: '5px', margin: '0px 0px 1em'}},
                    child: [{
                        tag: 'part.code',
                        set: {data: data}
                    }]
                }
            },

            command: function(data) {
                var a = data.split('\n'), o = [];
                for (var i in a) {
                    o.push({
                        tag: 'div', child: a[i]
                    });
                }
                return {
                    tag: 'div',
                    set: {style: {background: '#f6f8fa', padding: '16px', borderRadius: '3px', lineHeight: '1.45', margin: '0px 0px 1em'}},
                    child: o
                }
            },

            image: function(data) {
                return {
                    tag: 'div',
                    set: {style: {textAlign: 'center'}},
                    child: [{
                        tag: 'img',
                        set: {src: data}
                    }]
                }
            },

            list: function(data) {
                var o = [];
                for (var i in data) {
                    o.push({tag: 'li', child: data[i]});
                }
                return {tag: 'ul', child: o};
            }
        };

        return ({'static private': obj});
    });
};
