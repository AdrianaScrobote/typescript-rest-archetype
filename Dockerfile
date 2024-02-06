FROM node:19

RUN mkdir -p /app

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]