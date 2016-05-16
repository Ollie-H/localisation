import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';

import assign from 'object-assign';
import browserify from 'browserify';
import watchify from 'watchify';
import minify from 'gulp-minify';
import babelify from 'babelify';

import del from 'del';

gulp.task('copy', () => {
  return gulp.src(['src/index.html', 'node_modules/bootstrap/dist/**'])
    .pipe(gulp.dest('public'));
});

gulp.task('build', ['copy'], () => {
  const b = browserify('src/index.js', { debug: true })
    .transform(babelify);
  return bundle(b)
    .pipe(minify());
});

gulp.task('watch', ['copy'], () => {

  gulp.src(['src/index.html'])
    .pipe(gulp.dest('public'));

  const b = browserify('src/index.js', assign({ debug: true }, watchify.args))
    .transform(babelify);
  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);
  return bundle(w)
});

gulp.task('clean', () => {
  return del('public');
});

gulp.task('default', ['copy', 'watch']);

function bundle(b) {
  return b.bundle()
    .on('error', (e) => {
      console.error(e.stack);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public'));
}
