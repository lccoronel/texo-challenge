FROM node:18.5.0-bullseye-slim as builder
WORKDIR /usr/app
COPY . .

FROM builder as dev
RUN npm install
ENTRYPOINT [ "/usr/app/entrypoint.sh" ]

FROM builder as builder-prod
RUN npm install && npm run build

FROM node:18.5.0-bullseye-slim as prod
WORKDIR /usr/app
RUN npm install -g serve
COPY --from=builder-prod /usr/app/dist /usr/app/dist
ENTRYPOINT [ "serve", "-l", "5173", "-s", "dist" ]