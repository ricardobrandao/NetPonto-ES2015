var gulp = require('gulp');

var paths = require('../paths');

function reportChange(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['build-dev'], function() {
	gulp.watch(paths.source, ['build-dev-system']).on('change', reportChange);
	gulp.watch(paths.html, ['build-html']).on('change', reportChange);
});
