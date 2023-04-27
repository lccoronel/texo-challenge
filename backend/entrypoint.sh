#!/bin/bash
set -e

npm run build
npx prisma migrate deploy 
npm run seed:prod
npm run start:prod