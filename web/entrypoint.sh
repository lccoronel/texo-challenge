#!/bin/bash
set -e
if [[ $NODE_ENV = "development" ]] ; then
  npm run dev
else
  npm run preview
fi