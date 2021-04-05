FROM node:14-alpine
WORKDIR /client
COPY package*.json ./
RUN npm i
COPY . .

EXPOSE 3000