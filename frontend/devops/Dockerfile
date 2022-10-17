FROM node:18.10-buster-slim as builder
RUN mkdir /srv/app
COPY . /srv/app/
WORKDIR /srv/app
RUN cd /srv/app && yarn install && yarn build

FROM nginx:alpine as app
COPY devops/nginx.conf /etc/nginx/
COPY --from=builder /srv/app/build/ /usr/share/nginx/html/

FROM builder as dev
RUN yarn dev
EXPOSE 3000