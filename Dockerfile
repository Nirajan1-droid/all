FROM node:latest

WORKDIR /site

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .
RUN npm install axios react --save

EXPOSE 3000

CMD [ "npm", "start" ]