FROM node:alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY . .

# Build client and server bundles
RUN npm run build:client
RUN npm run build:server

COPY --from=build:client /app/dist/client /nyc-biomechanic_web1
COPY --from=build:server /app/dist/server /nyc-biomechanic_web1

CMD ["npm","run", "serve"]