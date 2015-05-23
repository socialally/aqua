var dir = require('require-dir')
  , gulp = require('gulp');

dir('./run/tasks');
gulp.task('default', ['css']);
