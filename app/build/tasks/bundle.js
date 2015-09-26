var gulp = require('gulp');
var shell = require('gulp-shell');

var bundles = require('../bundles');
var paths = require('../paths');

gulp.task('build-bundles',
	shell.task(
		bundles.map(function(bundle) {
			return 'jspm bundle ' + bundle.module + ' ' + paths.output + bundle.name + '.js --inject --minify';
		}))
);
