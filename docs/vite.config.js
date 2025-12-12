import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: "0.0.0.0",
    allowedHosts: ["docs"],
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },
});
