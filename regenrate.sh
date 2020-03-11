#!/usr/bin/env bash


# find ./app/shapes/ -name '*.shape' -exec ./regenrate.sh {} \;


shapeFile=$(cd "$(dirname "$1")"; pwd)/$(basename "$1")

echo "=========================================================================="
echo $shapeFile
# echo /Users/d023280/Documents/workspace/brainbox/node_modules/phantomjs/lib/phantom/bin/phantomjs  /Users/d023280/Documents/workspace/brainbox/app/shape2code/converter.js $shapeFile /Users/d023280/Documents/workspace/brainbox/app/shape2code/ /Users/d023280/Documents/workspace/brainbox/app/shapes/

/Users/d023280/Documents/workspace/brainbox/node_modules/phantomjs/bin/phantomjs  /Users/d023280/Documents/workspace/brainbox/app/shape2code/converter.js $shapeFile /Users/d023280/Documents/workspace/brainbox/app/shape2code/ /Users/d023280/Documents/workspace/brainbox/app/shapes/
