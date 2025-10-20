#!/bin/bash
rm -rf /home/u647537666/public_html/*
npm install
npm run build
cp -r dist/* /home/u647537666/public_html/