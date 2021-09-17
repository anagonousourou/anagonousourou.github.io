#!/bin/bash

npm run build 

cp -r dist/profile/. ../deployprofile/anagonousourou.github.io

git checkout master
cp -r ../deployprofile/anagonousourou.github.io/. .
git add -A
git commit -m "deployment"
git push