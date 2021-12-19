FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

RUN ls

COPY . /app

RUN cd /app

RUN chmod +x start.sh

EXPOSE 7000

CMD ["sh", "-c", "npm run db:migrate && npm run watch"]


