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
                'dependencies': [
                    e.h1('Dependencies'),
                    e.text('The framework is designed to use a low amount of dependencies. we need NodeJS at 6.4.0 or greater and npm. '),
                    e.code({
                        'bcryptjs': '^2.3.0',
                        'mongodb': '^2.2.24',
                        'sha512crypt-node': '^0.1.0',
                        'ws': '^3.2.0',
                        'request': '^2.74.0'
                    }),
                    e.text('In future version we will try and cut out more dependencies')
                ],
                'install': [
                    e.h1('Install'),
                    e.text('TODO')
                ],
                'create_project_skeleton': [
                    e.h1('Skeleton'),
                    e.text('Command line tool for creating a pre-bootstrapped app or create fresh models.'),
                    e.text('Structure is'),
                    e.command('node main.js --skeleton {app || module} --name {string}'),
                    e.text([
                        'If you use app the --name will be used to build what type of base you want. If you use module --name will create a module with that name.',
                        'Some errors are the app base doesn\'t exist or the module already exist and in this case it does nothing.'
                    ])
                ],
                'create_project_npm': [
                    e.h1('Npm'),
                    e.text('TODO not yet added to npm')
                ],
                'create_project_git': [
                    e.h1('Git'),
                    e.text('Here is the a example for the setup of a basic project/service'),
                    e.command([
                        'mkdir project && cd project',
                        'git init',
                        'git submodule add https://github.com/Product-Live/Singularity.git Singularity',
                        'cp Singularity/engine/core/skeleton/main.js main.js',
                        'cp Singularity/engine/core/skeleton/ignore .gitignore',
                        'node main.js --skeleton app',
                        'node main.js --skeleton module --name worker'
                    ].join('\n')),
                    e.text('One liner version'),
                    e.command('a="project" && mkdir $a && cd $a && git init && git submodule add https://github.com/Product-Live/Singularity.git Singularity && cp Singularity/engine/core/skeleton/main.js main.js && cp Singularity/engine/core/skeleton/ignore .gitignore && node main.js --skeleton app && node main.js --skeleton module --name worker'),
                    e.h2('Cloning a submodule project'),
                    e.text('Fresh clone of a project'),
                    e.command('git clone --recursive git://github.com/user/project.git'),
                    e.h2('Cloning a submodule project'),
                    e.text('Fresh clone of a project'),
                    e.command([
                        'git clone git://github.com/user/project.git',
                        'cd bar',
                        'git submodule update --init --recursive'
                    ].join('\n'))
                ],
                'configuration': [
                    e.h1('Configuration')
                ]
            }
        };

        return ({'private': o});
    });
};
