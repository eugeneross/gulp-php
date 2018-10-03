'use strict';

import gulp   from 'gulp';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('views', function buildHTML() {
  return gulp.src(config.views.dir)

  .pipe(gulp.dest(config.dest.dir))
  .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});
