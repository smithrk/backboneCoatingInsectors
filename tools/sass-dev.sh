sc#!/bin/bash

rm ../css/dev/*
echo "Watching SASS"
sudo sass --watch ../css/scss:../css/scss
