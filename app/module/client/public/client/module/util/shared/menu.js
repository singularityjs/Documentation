var _App;
(function($) {
    "use strict";

    var deus = new $._deus('shared'), r = deus.pub();

    var id = function(str) {
        return str.toLowerCase().replace(/\s/g, '_');
    };

    var menuTree = {
        'Introduction': {
            'What is Singularity': '/document/' + id('Introduction') + '/' + id('What is Singularity'),
            'How it works': '/document/' + id('Introduction') + '/' + id('How it works')
        },
        'Quick start': {
            'Dependencies': '/document/' + id('Quick start') + '/' + id('Dependencies'),
            'Install': '/document/' + id('Quick start') + '/' + id('Install'),
            'Create project': {
                'Skeleton': '/document/' + id('Quick start') + '/' + id('Create project Skeleton'),
                'Npm': '/document/' + id('Quick start') + '/' + id('Create project Npm'),
                'Git submodule': '/document/' + id('Quick start') + '/' + id('Create project Git')
            },
            'Configuration': '/document/' + id('Quick start') + '/' + id('Configuration')
        },
        'Architecture': {
            'Macro': '/document/' + id('Architecture') + '/' + id('Macro'),
            'Parts': {
                'Setup': '/document/' + id('Architecture') + '/' + id('Parts Setup'),
                'Engine': '/document/' + id('Architecture') + '/' + id('Parts Engine'),
                'Bootstrap': '/document/' + id('Architecture') + '/' + id('Parts Bootstrap'),
                'Module': '/document/' + id('Architecture') + '/' + id('Parts Module')
            }
        },
        'API': {
            'Core': {
                'Bash': '/document/' + id('API') + '/' + id('Core Bash'),
                'Closure': '/document/' + id('API') + '/' + id('Core Closure'),
                'Cmd': '/document/' + id('API') + '/' + id('Core Cmd'),
                'Exit': '/document/' + id('API') + '/' + id('Core Exit'),
                'Git': '/document/' + id('API') + '/' + id('Core Git'),
                'Mime': '/document/' + id('API') + '/' + id('Core Mine'),
                'Module': '/document/' + id('API') + '/' + id('Core Module'),
                'Npm': '/document/' + id('API') + '/' + id('Core Npm'),
                'Observer': '/document/' + id('API') + '/' + id('Core Observer'),
                'Service Manager': '/document/' + id('API') + '/' + id('Core Service Manager'),
                'Skeleton': '/document/' + id('API') + '/' + id('Core Skeleton'),
                'Stdout': '/document/' + id('API') + '/' + id('Core Stdout'),
                'Think': '/document/' + id('API') + '/' + id('Core Think'),
                'Upstart': '/document/' + id('API') + '/' + id('Core Upstart'),
                'Version': '/document/' + id('API') + '/' + id('Core Version'),
                'Watcher': '/document/' + id('API') + '/' + id('Core Watcher')
            },
            'Libary': {
                'Array': '/document/' + id('API') + '/' + id('Libary Array'),
                'Cast': '/document/' + id('API') + '/' + id('Libary Cast'),
                'Cog': '/document/' + id('API') + '/' + id('Libary Cog'),
                'Config': '/document/' + id('API') + '/' + id('Libary Config'),
                'Crypto': '/document/' + id('API') + '/' + id('Libary Crypto'),
                'Extends': '/document/' + id('API') + '/' + id('Libary Extends'),
                'File': '/document/' + id('API') + '/' + id('Libary File'),
                'Function': '/document/' + id('API') + '/' + id('Libary Function'),
                'Hook': '/document/' + id('API') + '/' + id('Libary Hook'),
                'Json': '/document/' + id('API') + '/' + id('Libary Json'),
                'Key': '/document/' + id('API') + '/' + id('Libary Key'),
                'Keychain': '/document/' + id('API') + '/' + id('Libary Keychain'),
                'Middleware': '/document/' + id('API') + '/' + id('Libary Middleware'),
                'Model': '/document/' + id('API') + '/' + id('Libary Model'),
                'Promise': '/document/' + id('API') + '/' + id('Libary Promise'),
                'Path': '/document/' + id('API') + '/' + id('Libary Path'),
                'Require': '/document/' + id('API') + '/' + id('Libary Require'),
                'Schema': '/document/' + id('API') + '/' + id('Libary Schema'),
                'Size': '/document/' + id('API') + '/' + id('Libary Size'),
                'String': '/document/' + id('API') + '/' + id('Libary String'),
                'Time': '/document/' + id('API') + '/' + id('Libary Time'),
                'Type': '/document/' + id('API') + '/' + id('Libary Type'),
                'Version': '/document/' + id('API') + '/' + id('Libary Version')
            }
        },
        'License': '/document/' + id('License') + '/' + id('License'),
        'Release': {
            '0.9.0': '/document/' + id('Release') + '/' + id('0a9a0')
        }
    };

    var s = {
        head: {background: '#fcfcfc', color: '#404040', marginBottom: '20px', marginTop: '20px'},
        sub: {
            color: 'gray',
            background: '#c9c9c9'
        },
        aSub: {
            marginBottom: '0px'
        },
        bSub: {
            marginLeft: '15px'
        }
    };

    r.create('shared.menu', {
        getInitialState: function() {
            return ({open: false, show: {}});
        },

        link: function(key, link) {
            var self = this, page = window.location.hash, url = '#' + link.url;
            return r('div').set({key: key}).style('click', {
                color: (url == page) ? 'white' : '#b9b9b9',
                margin: '10px 20px',
                textAlign: 'center'
            }).on('click', function() {
                self.setState({open: false});
                $.route.redirect(link.url);
            }).c(link.text);
        },

        create: function(k, sub, obj) {
            var out = [], c = 0, self = this;
            for (var x in obj) {
                (function (i, id) {
                    var open = self.state.show[id];
                    out.push(r('div').set({key: id}).style('anim', (sub != 0)? s.bSub : s.aSub, (open && sub == 0) ? s.head : {}).c(
                        r('div').style('anim', {padding: ($.is.object(obj[i]) && open)? '10px' : '3px'}, 'click').on('click', function() {
                            self.state.show[id] = !self.state.show[id];
                            self.setState({show: self.state.show});
                        }).c(
                            $.is.object(obj[i])? r('i').class((open? 'minus' : 'plus') + ' square outline icon').c() : null,
                            $.is.object(obj[i]) ? i : r('a').style({marginLeft: '1.43em', color: (sub == 0) ? 'white' : 'gray'}).set({href: obj[i]}).on('click', function() {
                                $.route.redirect(obj[i]);
                            }).c(i)
                        ),
                        ($.is.object(obj[i]) && open)? r('div').style('anim', (open)? s.sub : null).c(self.create(k + '.' + c, sub + 1, obj[i])) : null
                    ));
                })(x, k + '.' + c);
                c += 1;
            }
            return out;
        },

        render: function() {
            var self = this;

            return (r('part.menu').set({
                open: this.state.open,
                size: 300,
                button: r('div').style({textAlign: 'center', lineHeight: '30px', width: '100%', height: '30px', color: 'white'}).c(
                    r('i').style('none').class('chevron ' + ((this.state.open)? 'left' : 'right') + ' icon').c()
                )
            }).style({background: '#343131'}).on('click', function() {
                self.setState({open: !self.state.open});
            }).c(
                r('shared.scroll').set({
                    slide: r('div').style('full', {background: '#404040', borderRadius: '3px', margin: '2px'}).c()
                }).c(
                    r('div').style({margin: '10px', padding: '10px'}).c(
                        r('div').style({margin: '0 auto', borderRadius: '32px', width: '160px', padding: '10px', background: 'linear-gradient(to right, rgba(250,250,250,1) 40%, rgba(0,0,0,0) 90%)', color: 'black'}).c(
                            r('div').style({width: '92px', height: '32px'}).c(
                                r('img').style({float: 'left', width: '32px', height: '32px'}).set({src: '/semantic/logo.png'}).c(),
                                r('div').style({marginLeft: '-4px', float: 'left', lineHeight: '32px', height: '32px', display: 'inline-block'}).c('ingularity')
                            )
                        )
                    ),
                    r('div').style({color: 'white', margin: '10px', padding: '1px'}).c(this.create('a', 0, menuTree))
                )
            ));
        }
    });
})(_App || (_App = {}));
