from node:22-alpine

workdir /app

copy ./package.json ./

run npm install

copy ./ ./

expose 1234

cmd ["npm", "start"]
