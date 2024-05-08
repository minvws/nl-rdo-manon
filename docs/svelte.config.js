import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { importAssets } from "svelte-preprocess-import-assets";
import { redirects } from "./src/redirects.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      // see also: src/routes/+layout.js
      entries: ["*", ...Object.keys(redirects)],
    },
    alias: {
      $scss: "src/scss",
      $img: "src/img",
    },
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH || "",
      relative: true,
    },
  },
  preprocess: [vitePreprocess(), importAssets()],
};

export default config;
