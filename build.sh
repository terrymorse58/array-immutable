#!/usr/bin/env bash
# build array-immutable for distribution
echo -n "Building arrayi.js file with babel..."
babel arrayi.mjs -o arrayi.js --plugins=@babel/plugin-transform-modules-commonjs
echo "done."
echo "Building minified source files with gulp:"
gulp --gulpfile gulpfile.js
echo "Gulp minify done."
echo "Build complete."