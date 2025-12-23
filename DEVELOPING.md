# Developing Guide

This guide provides instructions for setting up the project for development,
including building, testing, and linting.

## Pre-requisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version specified in `.nvmrc`)
- [pnpm](https://pnpm.io/) (version specified in `package.json`)

If you are using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager),
you can switch to the correct Node.js version by running the following command
in the root of the project:

```bash
nvm use
```

## Installation

To install the project dependencies, run the following command from the root of
the project:

```bash
pnpm install
```

## Development

### Running the Documentation Website with pnpm

To start the development server for the documentation website, run:

```bash
pnpm run dev
```

This will start a local server, and you can view the documentation in your
browser at the address provided.

### Running the Documentation Website with Docker

To run the documentation website using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t manon-docs .
   ```

   If you want to run a specific version of the documentation, you can use one
   of images that are published to the Github Container Registry. For example,
   to run version `v1.18.0`, you can use the following command:

   ```bash
    docker pull ghcr.io/minvws/manon-docs:v1.18.0
   ```

2. Run the Docker container:

   ```bash
   docker run -p 5173:5173 manon-docs
   ```

   Or when using a specific version:

   ```bash
   docker run -p 5173:5173 ghcr.io/minvws/manon-docs:v1.18.0
   ```

   If you want to view the site with any of the themes included, you can use the
   `-e THEME={theme-name}` environment variable to specify a theme. For example:

   ```bash
   docker run -p 5173:5173 -e THEME=icore-open manon-docs
   ```

   If you want to develop your own theme and mount it into the container, you
   can use the following command, replacing `$(pwd)/themes` with the path to
   your local themes directory:

   ```bash
   docker run -p 5173:5173 -e THEME={theme-name} -v $(pwd)/{theme-name}:/app/themes/{theme-name} manon-docs
   ```

## Building

The project is a monorepo containing several packages. Here's how to build the
different parts of the project:

### Themes

To build the themes, run the following command:

```bash
pnpm run --dir themes build:themes
```

### Documentation

To build the documentation website, run:

```bash
pnpm run build
```

## Linting and Formatting

The project uses Prettier for code formatting and Stylelint for CSS linting.

### Formatting

To format all files in the project, run:

```bash
pnpm run format
```

To check for formatting issues without modifying files, run:

```bash
pnpm run format:check
```

### Linting

To lint the CSS files, run:

```bash
pnpm run lint
```

To automatically fix linting issues, run:

```bash
pnpm run --dir manon lint:css:fix
```

## Testing

The project uses vitest for testing. To run the tests for the `manon` package,
run:

```bash
pnpm run --dir manon test
```

### Visual Regression

The project uses Playwright for visual regression testing. The following
commands are available:

- To run the visual regression tests:

  ```bash
  # Run tests for all themes
  pnpm run visreg:test

  # Run tests for a specific theme (e.g., 'kat')
  pnpm run visreg:test kat
  ```

- To view the visual regression test report:

  ```bash
  # View report for the default theme ('icore-open')
  pnpm run visreg:report

  # View report for a specific theme (e.g., 'kat')
  pnpm run visreg:report kat
  ```

- To approve changes to the visual regression snapshots:

  ```bash
  # Approve snapshots for all themes
  pnpm run visreg:approve

  # Approve snapshots for a specific theme (e.g., 'kat')
  pnpm run visreg:approve kat
  ```

- To reset the visual regression test environment, this will delete all
  snapshots, and the reports:

  ```bash
  pnpm run visreg:clean
  ```

## Type Checking

To run the TypeScript type checker for the `manon` package, run:

```bash
pnpm run --dir manon check
```

## Monorepo Structure

The project is a monorepo managed with pnpm workspaces. The main packages are:

- `docs`: The documentation website.
- `manon`: The core SCSS library.
- `themes`: The themes for the SCSS library.
- `examples`: Example projects using the library.
