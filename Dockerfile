FROM node:19.7.0-alpine

WORKDIR /app

COPY package*.json ./

COPY next*.js next*.ts ./

COPY tsconfig*.json ./

EXPOSE 3000

CMD npm ci && npm start

