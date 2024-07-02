#!/bin/bash

# Check if a directory is provided
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi

# Build the project
npm run build

# Push the specified directory to the gh-pages branch
git subtree push --prefix $1 origin gh-pages
