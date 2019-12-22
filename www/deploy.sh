#!/bin/bash

echo "Start deploy"
cd /var/www/default
git pull
yarn
yarn start
echo "Deploy end"
