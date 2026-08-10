# Keep in sync with the exact @playwright/test version in package.json
FROM mcr.microsoft.com/playwright:v1.62.1-jammy

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .
