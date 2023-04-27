FROM node:18.5-bullseye-slim as builder
WORKDIR /usr/src/app
COPY . .

 

FROM builder as prod
RUN npm install --omit=dev
ENTRYPOINT ["/usr/src/app/entrypoint.sh"] 
