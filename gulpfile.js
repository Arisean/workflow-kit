var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var jade        = require('gulp-pug');
var sequirence  = require('run-sequence');
var colors      = require('colors');


gulp.task('build', ['sass','jade'], function() {

    browserSync.init({
      server: 'app'
    });


    gulp.watch("app/sass/**/*.sass", ['sass']);
    gulp.watch("app/jade/**/*.pug", ['jade']);
    gulp.watch("app/jade/**/*.jade", ['jade']);
    gulp.watch("app/jade/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("app/sass/*.sass")
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('jade', function() {
  return gulp.src("app/jade/*.pug")
    .pipe(jade())
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream());
});
gulp.task('default', ['build']);
