var _App;
(function($) {
    "use strict";

    var info = {
        page: 'document'
    };
    var deus = new $._deus(info.page), r = deus.pub();
    $.util.style('base', r);

    var base = r.create({
        getInitialState: function() {
            return ({data: [], load: false, scroll: -0.1});
        },

        componentDidMount: function() {
            var self = this;
            setTimeout(function() {
                self.get();
            });
        },

        scroll: function(s) {
            var a = this.refs[s], self = this;
            if (a) {
                setTimeout(function () {
                    var size = 0;
                    for (var i in self.state.data) {
                        if (i == s) {
                            break;
                        }
                        size += self.refs[i].offsetHeight
                    }
                    var pos = -1 * (size / a.parentNode.offsetHeight);
                    self.setState({scroll: pos});
                }, 100);
            }
        },
        
        componentWillReceiveProps: function(next) {
            if (this.props.page != next.page) {
                this.get(next.page, next.scroll || this.props.scroll);
            } else {
                if (this.props.scroll != next.scroll) {
                    this.scroll(next.scroll);
                }
            }
        },

        get: function(page, scroll) {
            var self = this;
            this.setState({load: true});
            $.ajax({
                url: '/document/data',
                method: 'GET',
                data: {
                    page: page || this.props.page
                }
            }).then(function(msg) {
                self.setState({data: msg.content, load: false});
                self.scroll(scroll || self.props.scroll);
            }, function() {
                $.route.redirect('/error/N3');
            });
        },

        render: function() {
            var o = [], self = this;
            for (var i in this.state.data) {
                o.push(r('div').set({key: i, ref: i}).style({margin: '20px 0px'}).c(
                    r('engine').set({data: this.state.data[i]}).c()
                ));
            }
            return r('shared.container').c(
                r('part.loader').set({show: this.state.load}).c(),
                r('shared.scroll').set({
                    scroll: this.state.scroll,
                    slide: r('div').style('full', {background: '#404040', borderRadius: '3px', margin: '2px'}).c()
                }).on('scroll', function(s) {
                    self.setState({scroll: null});
                }).c(
                    r('div').style({padding: '1.618em 3.236em', height: '100%', maxWidth: '800px', margin: 'auto'}).c(o)
                )
            )
        }
    });

    $.page.add(info.page, {
        index: function() {
            ReactDOM.render(r('div').style('full').c(
                r('shared.menu').c(),
                r(base).set({
                    scroll: $.route.getData('scroll'),
                    page: $.route.getData('page')
                }).c()
            ), document.getElementById('container'));
            return (true);
        }
    });
})(_App || (_App = {}));