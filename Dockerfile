# Dockerfile
FROM node:18-slim

# create destination directory
RUN mkdir -p /usr/src/abk-frontend
WORKDIR /usr/src/abk-frontend

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/abk-frontend/
RUN npm install
RUN npm run build

EXPOSE 8080

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080

CMD [ "npm", "start" ]