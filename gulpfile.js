const gulp = require("gulp");
const minify = require("gulp-minify");
const rename = require("gulp-rename");

const DIST = './dist';
const ARRAYI_FILE = './arrayi.js';
const BROWSER_FILE = './' + DIST + '/' + 'ai-browser.js';


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