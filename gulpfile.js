const gulp = require("gulp");
const minify = require("gulp-minify");
const rename = require("gulp-rename");

const ARRAYI_FILE = 'arrayi.mjs';
const DEEP_COPY_FILE = 'deepcopy.mjs';
const DEST_DIR = './dist/min';

gulp.task('minifyarrayi', () => {
  console.log(`Minifying ${ARRAYI_FILE}...`);
  return gulp.src(ARRAYI_FILE, { allowEmpty: true })
    .pipe(minify({noSource: true}))
    .pipe(rename(path => {
      path.basename = path.basename.replace(/-min/,'.min');
      return path;
    }))
    .pipe(gulp.dest(DEST_DIR))
});

gulp.task('minifydeepcopy', () => {
  console.log(`Minifying ${DEEP_COPY_FILE}...`);
  return gulp.src(DEEP_COPY_FILE, { allowEmpty: true })
    .pipe(minify({noSource: true}))
    .pipe(rename(path => {
      path.basename = path.basename.replace(/-min/,'.min');
      return path;
    }))
    .pipe(gulp.dest(DEST_DIR))
});

gulp.task('default', gulp.series(['minifyarrayi','minifydeepcopy']));