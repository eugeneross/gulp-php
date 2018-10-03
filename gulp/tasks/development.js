'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  return runSequence(['sass', 'imagemin', 'favicon', 'browserify', 'views', 'fonts'], 'watch', cb);

});
