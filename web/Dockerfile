FROM node:18.5.0-bullseye-slim as builder
WORKDIR /usr/app
COPY . .

FROM builder as dev
RUN npm install
ENTRYPOINT [ "/usr/app/entrypoint.sh" ]