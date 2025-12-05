FROM node:22.21-alpine

# Install corepack to manage package managers like pnpm
RUN corepack enable

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
