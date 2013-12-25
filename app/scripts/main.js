//模块加载配置
require.config({
    //baseUrl : "";
    //配置模块加载路径
    paths: {
        jquery :"../bower_components/jquery/jquery.min",
        angular: "../bower_components/angular/angular.min",
        angularRoute: "../bower_components/angular-route/angular-route.min",
        angularResource: "../bower_components/angular-resource/angular-resource.min",
        angularAnimate: "../bower_components/angular-animate/angular-animate.min",
        bootstrap : "../bower_components/bootstrap/dist/js/bootstrap.min",
        loadingBar : "../bower_components/angular-loading-bar/src/loading-bar",
        text : "../bower_components/requirejs-text/text"
    },
    //配置依赖、外部输出等
    shim: {
        //"bootstrap" : {deps : ["jquery"]},
        "angular" : {"exports" : "angular"},
        "angularRoute": {deps : ["angular"]},
        "angularAnimate" : {deps : ["angular"]},
        "angularResource": {deps : ["angular"]},
        "loadingBar" : {deps : ["angularAnimate"]}
    },
    priority: [
        "angular"
    ]
});

require( [
    "angular",
    "app"
], function(angular,app) {
    //加载完成后初始化
    angular.element(document).ready(function(){
        angular.bootstrap(document, ["myApp"]);
    });
});