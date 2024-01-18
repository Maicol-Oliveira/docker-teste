FROM node:alpine

WORKDIR /usr/nodetest

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]