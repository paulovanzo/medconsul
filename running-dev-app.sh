#! /bin/bash
DOCKERBUILDKIT=1 docker build --target dev -t dev-backend ./backend/devops

DOCKERBUILDKIT=1 docker build --target dev -t dev-frontend ./frontend/devops

docker run -p 3000:3000 -t medconsul-front-dev dev-frontend
docker run -p 8080:8080 -t medconsul-back-dev dev-frontend
