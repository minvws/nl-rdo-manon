FROM mcr.microsoft.com/playwright:v1.58.0-jammy

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .
