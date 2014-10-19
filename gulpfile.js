var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    path = require('path');

gulp.task('less', function () {
  gulp.src('./app/styles/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./app/styles'));
});

gulp.task('default', function() {
    gulp.watch('./app/styles/**/*.less', ['less']);
});
