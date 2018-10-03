'use strict';

import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import config      from '../config';

gulp.task('browserSync', ['php'], function() {

  // const DEFAULT_FILE = 'index.php';
  // const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

  browserSync.init({
    proxy: 'localhost:8010',

    // server: {
    //   // baseDir: config.dest.index,
      
    //   middleware: function(req, res, next) {
    //     const fileHref = url.parse(req.url).href;

    //     if ( !ASSET_EXTENSION_REGEX.test(fileHref)) {
    //       req.url = '/' + DEFAULT_FILE;
    //     }

    //     return next();
    //   }
    // },

    baseDir: config.dest.dir,
    port: config.browserPort,
    ui: {
      port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });

});
