# Stage 1: Build the application
FROM node:alpine

WORKDIR /pool/nyc-biomechanics/functional-patterns-client/nyc-biomechanic_web1

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Command to start the server
CMD ["node", "server-prod.js"]
