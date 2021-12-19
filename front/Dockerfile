FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

RUN ls

COPY . /app

RUN cd /app

EXPOSE 3000

CMD ["npm", "run", "start"]

