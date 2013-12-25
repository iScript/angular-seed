module.exports = function(grunt){
	'use strict';
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		banner: '/**\n' +
              	'* app by @ykq\n' +
              	'* Copyright <%= grunt.template.today("yyyy") %>\n' +
              	'*/\n',

		// 优化requirejs项目
		requirejs : {
			compile: {
				options: {
					name : "main",
					optimize: "uglify",
					mainConfigFile: "./app/scripts/main.js",
					out: "./app/scripts/all.js"
				}
			}
		},
		usemin : {
			html : 'app/index.dev.html'
		},
		uglify : {
			options : {banner:'/*create by ykq */\n'},
			main : {
				files : {"app/scripts/lib/require.min.js" : ["app/scripts/lib/require.js"]}
			}
		},
		jshint : {
			options : {
				"asi" : true,	//结束必须加分号
				"camelcase": true,	//驼峰命名
			    "curly": false,	//if等语句是否必须大括号包裹
			    "eqeqeq":false,	//对于简单类型，使用===和!==
			    "immed": false,	//匿名函数规范
			    "newcap": true,	//构造函数必须大写开头
			    "noarg": false,	//禁止arguments.caller和arguments.callee
			    "noempty": true,//禁止空的代码块
			    "undef": false,	//非全局变量必须声明
			    "unused" : false,	//声明而未使用的变量警告
			    "strict": false,	//是否必须声明严格模式
			    "globalstrict": true, 	//全局严格模式
			    "jquery": true,	//是否使用了jquery
			    "node": false	//是否使用了node
			},
			src: {
				src: 'app/scripts/*.js'
			}
		},
		copy : {
		    requirejs : { expand: true,flatten: true,src: ['app/bower_components/requirejs/require.js'], dest: 'app/scripts/lib/'},
		    bootstrap_fonts : { expand: true,flatten: true,src: ['app/bower_components/bootstrap/dist/fonts/*'], dest: 'app/fonts/'},
			bootstrap_css 	: { expand: true,flatten: true,src: ['app/bower_components/bootstrap/dist/css/bootstrap.min.css'], dest: 'app/styles/'},
			loadingbar_css 	: { expand: true,flatten: true,src: ['app/bower_components/angular-loading-bar/src/loading-bar.css'], dest: 'app/styles/'}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-usemin');
	
	grunt.registerTask('default',['jshint','uglify','requirejs']);
}

/**
 * 

 */