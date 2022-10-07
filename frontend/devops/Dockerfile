FROM node:18.10-buster-slim as builder
RUN mkdir /srv/app
COPY . /srv/app/
WORKDIR /srv/app
RUN yarn install && yarn build

FROM nginx:alpine as app
COPY devops/nginx.conf /etc/nginx/
COPY --from=dev /srv/app/build/ /usr/share/nginx/html/