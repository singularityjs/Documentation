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
                'core_bash': [
                    e.h1('core_bash')
                ],
                'core_closure': [
                    e.h1('core_closure')
                ],
                'core_cmd': [
                    e.h1('core_cmd')
                ],
                'core_exit': [
                    e.h1('core_exit')
                ],
                'core_mine': [
                    e.h1('core_mine')
                ],
                'core_module': [
                    e.h1('core_module')
                ],
                'core_npm': [
                    e.h1('core_npm')
                ],
                'core_observer': [
                    e.h1('core_observer')
                ],
                'core_service_manager': [
                    e.h1('core_service_manager')
                ],
                'core_skeleton': [
                    e.h1('core_skeleton')
                ],
                'core_stdout': [
                    e.h1('core_stdout')
                ],
                'core_think': [
                    e.h1('core_think')
                ],
                'core_upstart': [
                    e.h1('core_upstart')
                ],
                'core_version': [
                    e.h1('core_version')
                ],
                'core_watcher': [
                    e.h1('core_watcher')
                ],

                'libary_array': [
                    e.h1('libary_array')
                ],
                'libary_cast': [
                    e.h1('libary_cast')
                ],
                'libary_cog': [
                    e.h1('libary_cog')
                ],
                'libary_config': [
                    e.h1('libary_config')
                ],
                'libary_crypto': [
                    e.h1('libary_crypto')
                ],
                'libary_extends': [
                    e.h1('libary_extends')
                ],
                'libary_file': [
                    e.h1('libary_file')
                ],
                'libary_function': [
                    e.h1('libary_function')
                ],
                'libary_hook': [
                    e.h1('libary_hook')
                ],
                'libary_json': [
                    e.h1('libary_json')
                ],
                'libary_key': [
                    e.h1('libary_key')
                ],
                'libary_keychain': [
                    e.h1('libary_keychain')
                ],
                'libary_middleware': [
                    e.h1('libary_middleware')
                ],
                'libary_model': [
                    e.h1('libary_model')
                ],
                'libary_promise': [
                    e.h1('libary_promise')
                ],
                'libary_path': [
                    e.h1('libary_path')
                ],
                'libary_require': [
                    e.h1('libary_require')
                ],
                'libary_schema': [
                    e.h1('libary_schema')
                ],
                'libary_size': [
                    e.h1('libary_size')
                ],
                'libary_string': [
                    e.h1('libary_string')
                ],
                'libary_version': [
                    e.h1('libary_version')
                ]
            }
        };

        return ({'private': o});
    });
};
