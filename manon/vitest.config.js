import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      include: ["js/**/*.js"],
      exclude: ["js/**/*.{config,setup,test}.js"],
    },
  },
});
