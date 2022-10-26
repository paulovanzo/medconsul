FROM node:18.10-buster-slim as base
RUN mkdir /srv/app
COPY . /srv/app/
WORKDIR /srv/app
RUN yarn install

FROM base as builder
RUN yarn build

FROM nginx:alpine as app
COPY devops/nginx.conf /etc/nginx/
COPY --from=builder /srv/app/build/ /usr/share/nginx/html/

FROM base as dev
ENTRYPOINT ["/bin/bash", "-c", "yarn dev"]