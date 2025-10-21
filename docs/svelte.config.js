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
