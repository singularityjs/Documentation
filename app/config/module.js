"use strict";

module.exports = function(config) {
	var load = {
		worker: ['generic', 'react', 'libary', 'client', 'document']
	};

	return ({
		repository: {
			server: {
				url: '' // tmp
			},
			modules: [
				{
					name: 'generic',
					repo: 'https://github.com/anzerr/Module_Generic.git',
					commit: '24a5e76a8b211001c2edaad72cffed6195300d6f'
				},
				{
					name: 'react',
					repo: 'https://github.com/anzerr/Module_react.git',
					commit: '0f8c65232c7a79c8c49775c5f4b092b0c6007e33'
				},
				{
					name: 'libary',
					repo: 'https://github.com/anzerr/Module_Libary.git',
					commit: 'cebd1c14db29c7def61b7f33b2f739e14c489ba6'
				}
			]
		},
		skipPrivate: config.skipPrivate || false,
		path: {
			module: config.path.app + '/module',
			remote: config.path.cache + '/module'
		},
		load: load[config.moduleProfile || config.appProfile]
	});
};
