// Require Gulp Modules
var gulp = require('gulp')
  , sass = require('gulp-sass')
  , babel = require('gulp-babel')
  , concat = require('gulp-concat')
  , rename = require('gulp-rename')
  , uglify = require('gulp-uglify')
;


// # TASK: Scripts
gulp.task('scripts', () => {
  return gulp.src(['./js/**/*.js', '!./js/vendor/**/*.js'])
    .pipe(babel({presets: ['es2015']}))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'))
  ;
});


// # TASK: Sass
gulp.task('sass', () => {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))
  ;
});


// # WATCHER: Scripts
gulp.task('scripts:watch', () => {
  gulp.watch('./js/**/*.js', ['scripts']);
});


// # WATCHER: Sass
gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/*.sass', ['sass']);
});


// Gulp Default
gulp.task('default', ['scripts:watch', 'sass:watch']);
