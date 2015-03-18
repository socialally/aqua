var gulp = require('gulp')
  , config = require('../config').css
  , stylint = require('gulp-stylint')
  , size = require('gulp-size')
  , styl = require('gulp-stylus')
  , swiss = require('kouto-swiss');

gulp.task('stylint', function() {
  return gulp.src(config.stylus.lint.src)
    .pipe(stylint(config.stylus.lint));
})

gulp.task('css', ['stylint'], function() {
  return gulp.src(config.stylus.src)
    .pipe(styl(opts()))
    .pipe(size({title:'css'}))
    .pipe(gulp.dest(config.dest));
})

function opts() {
  var opts = config.stylus.opts;
  opts.use = [swiss()];
  return opts;
}
