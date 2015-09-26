var eslint = require('gulp-eslint');
var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gutil = require('gulp-util');

var paths = require('../paths');

gulp.task('lint', function() {
	return gulp.src(paths.source)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(gulpIf(!gutil.env.skipErrors, eslint.failOnError()));
});
