#!/bin/bash
set -e

if [[ $NODE_ENV = "development" ]] ; then
    npx prisma migrate dev 
    npm run seed
    npm run start:dev
else
    npm run build
    npx prisma migrate deploy 
    npm run seed:prod
    npm run start:prod
fi