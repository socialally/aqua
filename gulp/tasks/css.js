var gulp = require('gulp')
  , config = require('../config').css
  , size = require('gulp-size')
  , styl = require('gulp-stylus')
  , swiss = require('kouto-swiss');

gulp.task('css', function() {
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
