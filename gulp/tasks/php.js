import gulp from 'gulp';
import php from 'gulp-connect-php';
import config from '../config'

gulp.task('php', function() {
    php.server({ base: config.dest.dir, port: 8010, keepalive: true});
});