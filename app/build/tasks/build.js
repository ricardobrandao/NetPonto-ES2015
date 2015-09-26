var assign = Object.assign || require('object.assign');
var babel = require('gulp-babel');
var changed = require('gulp-changed');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var sourceMaps = require('gulp-sourcemaps');

var compilerOptions = require('../compiler-options');
var paths = require('../paths');

gulp.task('build-system', function() {
	return gulp.src(paths.source)
		.pipe(plumber())
		.pipe(changed(paths.output, {
			extension: '.js'
		}))
		.pipe(babel(assign({}, compilerOptions)))
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-dev-system', function() {
	return gulp.src(paths.source)
		.pipe(plumber())
		.pipe(changed(paths.output, {
			extension: '.js'
		}))
		.pipe(sourceMaps.init())
		.pipe(babel(assign({}, compilerOptions)))
		.pipe(sourceMaps.write('.', {
			sourceRoot: '/src'
		}))
		.pipe(gulp.dest(paths.devOutput));
});

gulp.task('build-html', function() {
	return gulp.src(paths.html)
		.pipe(changed(paths.output, {
			extension: '.html'
		}))
		.pipe(gulp.dest(paths.output));
});


gulp.task('build', function(callback) {
	return runSequence(
		'clean',
		'lint',
		['build-system', 'build-html'],
		'build-bundles',
		callback
	);
});

gulp.task('build-dev', function(callback) {
	return runSequence(
		'clean',
		['build-dev-system', 'build-html'],
		callback
	);
});
