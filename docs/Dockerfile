FROM node:22.21-alpine

RUN npm install -g pnpm

WORKDIR /app

# Copy workspace configuration and root files
COPY ../pnpm-workspace.yaml ./
COPY ../package.json ./
COPY ../pnpm-lock.yaml ./

# Copy internal workspace packages
COPY ../manon ./manon
COPY ../themes ./themes

# Copy documentation site
COPY docs ./docs

# Install dependencies
RUN pnpm install

WORKDIR /app/docs
CMD ["./entrypoint.sh"]
