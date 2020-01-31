const gulp = require("gulp");
const minify = require("gulp-minify");
const rename = require("gulp-rename");

const JSFILE = 'arrayi.js';
const MJSFILE = 'arrayi.mjs';

gulp.task('minifyjs', () => {
  console.log(`Minifying ${JSFILE}...`);
  return gulp.src(JSFILE, { allowEmpty: true })
    .pipe(minify({noSource: true}))
    .pipe(rename(path => {
      path.basename = path.basename.replace(/-min/,'.min');
      return path;
    }))
    .pipe(gulp.dest('./min'))
});

gulp.task('minifymjs', () => {
  console.log(`Minifying ${MJSFILE}...`);
  return gulp.src(MJSFILE, { allowEmpty: true })
    .pipe(minify({noSource: true}))
    .pipe(rename(path => {
      path.basename = path.basename.replace(/-min/,'.min');
      return path;
    }))
    .pipe(gulp.dest('./min'))
});

gulp.task('default', gulp.series(['minifyjs','minifymjs']));