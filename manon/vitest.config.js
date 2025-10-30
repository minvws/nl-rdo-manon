import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
    coverage: {
      provider: "v8",            // built-in coverage engine
      reporter: ["text", "lcov"], // 'lcov' is required for SonarQube
      reportsDirectory: "./coverage", // optional, default is fine too
    },
  },
});
