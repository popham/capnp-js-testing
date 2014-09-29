var gulp = require('gulp');

var jshint = require('gulp-jshint');
var nodefy = require('gulp-nodefy');
var uglify_ = require('gulp-uglify');

var pretty = {
    mangle : false,
    output : { beautify : true },
    compress : false,
    preserveComments : 'all'
};
var optimal = {};
var uglify = function () { return uglify_(pretty); };

gulp.task('build', function () {
    return gulp.src('capnp/**/*.d/*.js')
        .pipe(uglify())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(nodefy())
        .pipe(gulp.dest('lib'));
});
