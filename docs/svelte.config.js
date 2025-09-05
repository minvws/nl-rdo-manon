import { fileURLToPath } from "node:url";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { importAssets } from "svelte-preprocess-import-assets";
import { mdsvex } from "mdsvex";
import { redirects } from "./src/redirects.js";
import { remarkIframe } from "./src/markdown/remark/iframe.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ["*", ...Object.keys(redirects)],
      handleHttpError: ({ path, referrer, message }) => {
        // Log the error for debugging
        console.warn(`Prerender HTTP error: ${message}`);
        console.warn(`Path: ${path}`);
        console.warn(`Referrer: ${referrer}`);

        // Skip base path errors during prerendering
        if (message.includes("404") || message.includes("does not begin with `base`")) {
          return;
        }
        throw new Error(message);
      },
      handleMissingId: ({ path, id, referrers, message }) => {
        // Log the missing ID error for debugging
        console.warn(`Missing ID error: ${message}`);
        console.warn(`Path: ${path}`);
        console.warn(`Missing ID: ${id}`);
        console.warn(`Referrers: ${referrers.join(", ")}`);
      },
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
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      remarkPlugins: [remarkIframe],
      layout: {
        _: fileURLToPath(import.meta.resolve("./src/markdown/layouts/default.svelte")),
      },
      highlight: {
        highlighter: (code, lang) => `<Components.Code code={\`${code}\`} language="${lang}" />`,
      },
    }),
    importAssets(),
  ],
};

export default config;
