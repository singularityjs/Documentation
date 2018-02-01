var _App;
(function($) {
    "use strict";

    var deus = new $._deus('shared'), r = deus.pub();

    r.create('engine', {
        getInitialState: function() {
            return ({});
        },

        build: function(key, data) {
            var out = [];
            if ($.is.array(data.child)) {
                for (var i in data.child) {
                    if ($.is.string(data.child[i])) {
                        out.push(data.child[i]);
                    } else {
                        out.push(this.build(key + '.' + i, data.child[i]));
                    }
                }
            } else {
                out = data.child;
            }
            return r(data.tag).set(data.set).set({key: key}).c(out);
        },

        render: function() {
            return r('div').style('full', this.props.style).c(this.build('0', {
                tag: 'div',
                child: this.props.data
            }));
        }
    });

})(_App || (_App = {}));
