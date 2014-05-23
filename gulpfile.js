var gulp = require("gulp");
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

/**
 * usemin
 * @return {[type]} [description]
 */
gulp.task("usemin",function(){
	gulp.src('./app/index.html')
        .pipe(usemin({
            css: [minifyCss(), 'concat'],
            js: [uglify()]
            }))
        .pipe(gulp.dest('./app/'));
});

/**
 * copy bootstrap
 * @return {[type]} [description]
 */
gulp.task('copy',function(){
    console.log('copy bootstrap');
    gulp.src('./bower_components/bootstrap/dist/fonts/*').pipe(gulp.dest('./app/fonts'));
    gulp.src('./bower_components/bootstrap/dist/css/bootstrap.css').pipe(gulp.dest('./app/styles'));
});

/**
 * default
 * @return {[type]} [description]
 */
gulp.task("default",function(){
    console.log('this is test!!');
});