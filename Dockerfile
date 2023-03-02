FROM node:latest

WORKDIR /backend

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node",   "start"]