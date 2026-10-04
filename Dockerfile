FROM node:22-alpine

WORKDIR /app

COPY app.js .

RUN ["node", "app.js"]