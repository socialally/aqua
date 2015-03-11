var gulp = require('gulp')
  , config = require('../config').css
  , size = require('gulp-size')
  , changed = require('gulp-changed')
  , styl = require('gulp-stylus')
  , nib = require('nib')
  , sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function() {
  return gulp.src(config.stylus.src)
    .pipe(changed(config.dest))
    .pipe(styl(opts()))
    .pipe(size({title:'css'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
})

function opts() {
  var opts = config.stylus.opts;
  opts.use = [nib()];
  if(process.env.NODE_ENV !== 'production') {
    opts.sourcemap = config.stylus.sourcemap_opts;
  }
  return opts;
}
