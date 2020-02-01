#!/usr/bin/env bash

# build array-immutable for distribution
#echo -n "Building arrayi.js file with babel..."
#babel arrayi.mjs -o arrayi.js
# --plugins=@babel/plugin-transform-modules-commonjs
#echo "done."

echo "Building minified source files:"
gulp --gulpfile gulpfile.js
echo "Minify complete."

echo "Copying primary files to dist..."
cp -v arrayi.mjs dist/arrayi.mjs
cp -v deepcopy.mjs dist/deepcopy.mjs
echo "Build complete."