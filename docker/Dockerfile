FROM node:18

WORKDIR /app

EXPOSE 4200

COPY package*.json ./

RUN npm i

COPY .. .

CMD ["npx", "nx", "run", "shop-magicbeauty:serve"]
