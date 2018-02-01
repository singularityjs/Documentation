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
                'what_is_singularity': [
                    e.h1('Introduction'),
                    e.h2('What is singluarity'),
                    e.text([
                        'Singluarity is a javascript framework that is orintated around giving better structure to projects',
                        'allowing you to grow and split projects. aswell as help share code between services in the same ecosystem.'
                    ].join(' ')),
                    e.text([
                        'This framework has a low depencacy list. Allows easy creation of REST API services and wrapping already existing projects to controle them with an API.'
                    ].join(' ')),

                    e.h2('Some example projects'),
                    e.text('These are some project made on top of singluarity'),
                    e.list([
                        'Blockchain explorer',
                        'Docker orchestrator',
                        'Haproxy wrapper api',
                        'Mongo wrapper api',
                        'Process Manager',
                        'Multiplay game over websocket',
                        'To many api service'
                    ]),

                    e.text([
                        'The posibility are endless the structure and tool give you a large amount of flexiabily so you are not limited to web api.',
                        'Anything that needs a large amount of async is a lot easier to build.'
                    ].join(''))
                ],
                'how_it_works': [
                    e.h1('How it works'),
                    e.text([
                        'This project needs Nodejs 6.4.0 or greater to work. You can download the latest version',
                        e.a('here', 'https://nodejs.org/en/download/'),
                        '. This is the only dependency that is needed to run the framework.'
                    ]),
                    e.text('Here is a diagram of the loading scheme for the app'),
                    e.image('/images/document/350x150.png'),
                    e.text('The Directorys of the framework'),
                    e.list([
                        'core.js (blootstraps the framework loading and command line)',
                        ['Engine', e.list([
                            'setup.js (clean up create missing directories, auto update npm and load up the $ libary)',
                            ['Core', e.list([
                                'Lib (all the tools in $ libary)',
                                'The rest are tool you need to import'
                            ])]
                        ])]
                    ]),
                    e.text('Here is a diagram of the loading scheme for the framework and it\'s dependencys.'),
                    e.image('/images/document/350x150.png')

                ]
            }
        };

        return ({'private': o});
    });
};
