"use strict";

module.exports = function($) {
    return $.require([
        //
    ], function(
        //
    ) {

        var obj = function() {};
        obj.prototype = {
            word: [
                'ad',
                'adipisicing',
                'aliqua',
                'aliquip',
                'amet',
                'anim',
                'aute',
                'cillum',
                'commodo',
                'consectetur',
                'consequat',
                'culpa',
                'cupidatat',
                'deserunt',
                'do',
                'dolor',
                'dolore',
                'duis',
                'ea',
                'eiusmod',
                'elit',
                'enim',
                'esse',
                'est',
                'et',
                'eu',
                'ex',
                'excepteur',
                'exercitation',
                'fugiat',
                'id',
                'in',
                'incididunt',
                'ipsum',
                'irure',
                'labore',
                'laboris',
                'laborum',
                'Lorem',
                'magna',
                'minim',
                'mollit',
                'nisi',
                'non',
                'nostrud',
                'nulla',
                'occaecat',
                'officia',
                'pariatur',
                'proident',
                'qui',
                'quis',
                'reprehenderit',
                'sint',
                'sit',
                'sunt',
                'tempor',
                'ullamco',
                'ut',
                'velit',
                'veniam',
                'voluptate'
            ],

            get: function(s) {
                var out = '';
                while (out.length < s) {
                    out += ' ' + this.word[Math.floor(Math.random() * this.word.length)];
                }
                return out.trim();
            }
        };

        return ({'static private': obj});
    });
};
