FROM node:22-alpine as build
WORKDIR /app
COPY . .

RUN npm install && \
  npm run css:build

# ---

FROM python:3.12

COPY --from=build /app /app

WORKDIR /app

RUN pip install --no-cache-dir -r /app/requirements.txt

CMD ["./run.sh"]
