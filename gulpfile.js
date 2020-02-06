const gulp = require("gulp");
const minify = require("gulp-minify");
const rename = require("gulp-rename");

const DIST = './';
const ARRAYI_FILE = 'index.js';
const BROWSER_FILE = 'arrayi.js';


gulp.task('minifymodule', () => {
  console.log(`Minifying ${ARRAYI_FILE}...`);
  return gulp.src(ARRAYI_FILE, { allowEmpty: true })
    .pipe(minify({noSource: true}))
    .pipe(rename(path => {
      path.basename = path.basename.replace(/-min/,'.min');
      return path;
    }))
    .pipe(gulp.dest(DIST));
});

gulp.task('minifybrowser', () => {
  console.log(`Minifying ${BROWSER_FILE}...`);
  return gulp.src(BROWSER_FILE, { allowEmpty: true })
    .pipe(minify({noSource: true}))
    .pipe(rename(path => {
      path.basename = path.basename.replace(/-min/,'.min');
      return path;
    }))
    .pipe(gulp.dest(DIST));
});

gulp.task('default', gulp.series(['minifymodule', 'minifybrowser']));