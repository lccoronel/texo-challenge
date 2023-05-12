#!/bin/bash
set -e
if [[ $NODE_ENV = "development" ]] ; then
    npm run dev
else
  make migrate-run ENV=production
  make start
fi