#!/bin/bash
REPOSITORY=/home/ubuntu/domaindeploytest
sudo pm2 kill
cd $REPOSITORY

cd server
sudo rm -rf node_modules
sudo npm install
sudo pm2 kill
sudo pm2 start