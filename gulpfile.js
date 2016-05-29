var gulp = require('gulp')
  , sass = require('gulp-sass')
  , concat = require('gulp-concat')
  , rename = require('gulp-rename')
  , uglify = require('gulp-uglify')
;


// # TASK: Scripts
gulp.task('scripts', () => {
  return gulp.src(['./js/**/*.js', '!./js/vendor/**/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({sufix: '.min'}))
    .pipe(gulp.dest('./dist/js'))
  ;
});
