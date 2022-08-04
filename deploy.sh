#!/bin/bash

npm run build 

cp -r dist/profile/. ../profile-deployment

cd ../profile-deployment
git checkout master
git add -A
git commit -m "déploiement"
git push