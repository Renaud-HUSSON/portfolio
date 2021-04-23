FROM strapi/base
WORKDIR /strapi
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 1337
