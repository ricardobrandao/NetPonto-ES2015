var bump = require('gulp-bump');
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('bump-version', function() {
	return gulp.src(['./package.json'])
		.pipe(bump({
			type: gutil.env.version
		})) //major|minor|patch|prerelease
		.pipe(gulp.dest('./'));
});
