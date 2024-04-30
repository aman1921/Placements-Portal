# Pankaj Kumar
# install dependencies for client and server
FROM node:16 AS build

WORKDIR /usr/src/app

# Install dependencies for both client and server
COPY package*.json ./
RUN npm i

# Build the client
WORKDIR /usr/src/app/client
COPY client/package*.json ./
RUN npm i
COPY client/ ./
RUN npm run build

# Build the server
WORKDIR /usr/src/app/server
COPY server/package*.json ./
RUN npm i
COPY server/ ./

FROM node:16-alpine

WORKDIR /usr/src/app

# Copy the built client and server from the build stage
COPY --from=build /usr/src/app/client/build ./client/build
COPY --from=build /usr/src/app/server ./server

# Install only production dependencies for the server
COPY package*.json ./
RUN npm i
COPY . .

EXPOSE 3000

CMD ["npm", "start"]