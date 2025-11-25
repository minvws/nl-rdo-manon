import { fileURLToPath } from "node:url";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { importAssets } from "svelte-preprocess-import-assets";
import { mdsvex } from "mdsvex";
import { redirects } from "./src/redirects.js";
import { remarkIframe } from "./src/markdown/remark/iframe.js";
import { remarkLinks } from "./src/markdown/remark/links.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ["*", ...Object.keys(redirects)],
      handleMissingId: ({ path, id, referrers, message }) => {
        // Log the missing ID error for debugging
        console.error(`Missing ID error: ${message}`);
        console.error(`Path: ${path}`);
        console.error(`Missing ID: ${id}`);
        console.error(`Referrers: ${referrers?.length ? referrers.join(", ") : "(none)"}`);
        console.error("");

        throw new Error(message);
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
  onwarn: (warning, handler) => {
    // Ignore empty fragment URLs
    if (
      warning.code === "a11y_invalid_attribute" &&
      warning.message.includes("'#' is not a valid href attribute")
    ) {
      return;
    }
    handler(warning);
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      remarkPlugins: [remarkIframe, remarkLinks],
      layout: {
        _: fileURLToPath(import.meta.resolve("./src/markdown/layouts/default.svelte")),
      },
      highlight: {
        highlighter: (code, lang) => `<Components.Snippet code={\`${code}\`} language="${lang}" />`,
      },
    }),
    importAssets(),
  ],
};

export default config;
