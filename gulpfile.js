var dir = require('require-dir')
  , gulp = require('gulp');

dir('./gulp/tasks');
gulp.task('default', ['css']);
