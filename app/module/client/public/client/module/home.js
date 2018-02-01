var _App;
(function($) {
    "use strict";

    var info = {
        page: 'home'
    };
    var deus = new $._deus(info.page), r = deus.pub();
    $.util.style('base', r);

    var base = r.create({
        getInitialState: function() {
            return ({data: [], load: false});
        },

        componentDidMount: function() {
            var self = this;
            setTimeout(function() {
                self.get();
            });
        },

        get: function() {
            var self = this;
            this.setState({load: true});
            $.ajax({
                url: '/blog',
                method: 'GET'
            }).then(function(msg) {
                self.setState({data: msg, load: false});
            }, function() {
                $.route.redirect('/error/N3');
            });
        },

        render: function() {
            return r('shared.container').c(
                r('part.loader').set({show: this.state.load}).c(),
                r('engine').set({data: this.state.data}).c()
            )
        }
    });

    $.page.add(info.page, {
        index: function() {
            ReactDOM.render(r('div').style('full').c(r('shared.menu').c(), r(base).c()), document.getElementById('container'));
            return (true);
        }
    });
})(_App || (_App = {}));