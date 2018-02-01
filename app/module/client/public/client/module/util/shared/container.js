var _App;
(function($) {
    "use strict";

    var deus = new $._deus('shared'), r = deus.pub();

    r.create('shared.container', {
        getInitialState: function() {
            return ({fade: false});
        },

        componentDidMount: function() {
            var self = this;
            this.setState({fadeT: setTimeout(function() {
                self.setState({fadeT: null, fade: true})
            }, 200)});
        },

        componentWillUnmount: function() {
            if (this.state.fadeT) {
                clearTimeout(this.state.fadeT);
            }
        },

        render: function() {
            return (r('div').style('none', 'full', 'anim', {opacity: (this.state.fade) ? 1 : 0, position: 'relative', overflow: 'hidden'}).c(
                r('div').style('full', {position: 'relative', overflow: 'auto', marginLeft: '20px', width: 'calc(100% - 20px)'}).c(
                    this.props.children
                )
            ))
        }
    });
})(_App || (_App = {}));