FROM node:16

EXPOSE 4000

WORKDIR /src

COPY package*.json .

RUN npm install



COPY . .

CMD [ "node", "dist/app.js" ]