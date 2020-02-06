#!/usr/bin/env bash

echo "Build array-immutable..."
echo " "
echo "Making browser version with browserify:"
browserify index.js --standalone ArrayI -o ./arrayi.js
echo "Browserify complete."

echo " "
echo "Making minified source files with gulp:"
gulp --gulpfile gulpfile.js
echo "Gulp complete."
echo "Build array-immutable complete."

