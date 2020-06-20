#!/bin/bash

npm run build 

cp -r dist/profile/. ../../deployprofile/anagonousourou.github.io

cd ../deployprofile/anagonousourou.github.io
git add -A
git commit -m "deployment"
git push