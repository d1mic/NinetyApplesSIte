var gulp = require('gulp');
var del = require('del');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', ['copy', 'minify-css']);

gulp.task('clean', function () {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('copy', function () {
  return gulp.src(['img/**/*', 'js/**/*', 'lightbox/**/*', 'owl-carousel/**/*',
      'portfolio-pages/**/*', 'rs-plugin/**/*', 'index.html'
    ], {
      base: '.'
    })
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-css', function () {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({
      debug: true
    }, function (details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('dist/css'));
});
