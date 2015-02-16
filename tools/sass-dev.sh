sc#!/bin/bash

rm ../www/css/dev/*
echo "Watching SASS"
sudo sass --watch ../css/scss:../css/dev --style expanded --no-cache --line-numbers
