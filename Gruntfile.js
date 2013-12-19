module.exports = function(grunt){
	'use strict';
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		// 优化requirejs项目
		requirejs : {
			compile: {
				options: {
					name : "main",
					optimize: "uglify",
					mainConfigFile: "./js/main.js",
					out: "./compile/all.js"
				}
			}
		},
		usemin : {
			html : 'index.html'
		},
		uglify : {
			options : {banner:'/*create by ykq */\n'},
			main : {
				files : {"scripts/require.js" : ["bower_components/requirejs/require.js"]}
			}
		},
		copy : {
			main: {
			    files: [
			    	{ src: 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', dest: 'fonts/glyphicons-halflings-regular.eot'},
					{ src: 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', dest: 'fonts/glyphicons-halflings-regular.svg'},
					{ src: 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', dest: 'fonts/glyphicons-halflings-regular.ttf'},
					{ src: 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', dest: 'fonts/glyphicons-halflings-regular.woff'},
					{ src: 'bower_components/bootstrap/dist/css/bootstrap.min.css', dest: 'styles/bootstrap.min.css'},
					{ src: 'bower_components/angular-loading-bar/src/loading-bar.css', dest: 'styles/loading-bar.css'}
			    ]
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.registerTask('begin',['uglify','copy']);
	grunt.registerTask('default',['requirejs','uglify','copy','usemin']);
}

/**
 * 

 */