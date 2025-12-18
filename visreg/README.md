# Visual Regression Testing

This directory contains the setup for visual regression testing of the Manon
design framework. Visual regression testing is used to detect and review visual
differences in the UI.

## Technology Stack

The visual regression testing setup uses the following technologies:

- [**Playwright**](https://playwright.dev/) for browser automation and
  screenshot testing.
- [**Docker**](https://www.docker.com/) and
  [**Docker Compose**](https://docs.docker.com/compose/) to create a consistent
  and reproducible testing environment.

## Usage

The following commands are available to run the visual regression tests. These
commands are defined in the root `package.json` file.

- **Run the tests:**

  ```bash
  pnpm run visreg:test
  ```

  This command starts the Docker containers and runs the Playwright tests.

- **Approve changes:**

  ```bash
  pnpm run visreg:approve
  ```

  If there are visual differences that are expected, you can run this command to
  update the snapshots.

- **Clean up:**

  ```bash
  pnpm run visreg:clean
  ```

  This command removes the `snapshots` and `report` directories.

- **View the report:**

  ```bash
  pnpm run visreg:report
  ```

  This command opens the Playwright test report in your browser.

## Configuration

- **`compose.yml`:** This file defines the Docker services for the testing
  environment. It sets up a service for the documentation site and services for
  running the Playwright tests.

- **`playwright/playwright.config.ts`:** This is the main configuration file for
  Playwright. It defines the test directory, browsers to test against, and other
  Playwright settings.

- **`playwright/tests/endpoints.js`:** This file contains a list of all the
  pages that are tested.

- **`playwright/tests/visual-regression.test.js`:** This is the main test file
  that iterates over the endpoints and takes screenshots.

## CI Workflow

The visual regression tests are also integrated into the CI workflow in
[`.github/workflows/ci.yml`](../.github/workflows/ci.yml). The `visreg-test` job
is triggered on pushes to the `main` and `release/**` branches, and on pull
requests that have the `visual-regression` label.
