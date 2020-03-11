#!/usr/bin/env bash


# find ./app/shapes/ -name '*.shape' -exec ./regenrate.sh {} \;


shapeFile=$(cd "$(dirname "$1")"; pwd)/$(basename "$1")

echo "=========================================================================="
echo $shapeFile

/Users/d023280/Documents/workspace/brainbox/node_modules/phantomjs/bin/phantomjs  /Users/d023280/Documents/workspace/brainbox/app/converter/index.js $shapeFile /Users/d023280/Documents/workspace/brainbox/app/converter/ /Users/d023280/Documents/workspace/brainbox/app/shapes/
