import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { importAssets } from "svelte-preprocess-import-assets";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: "warn",
      handleMissingId: "warn",
    },
    alias: {
      $scss: "src/scss",
      $img: "src/img",
    },
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
      relative: true
    }
  },
  preprocess: [vitePreprocess(), importAssets()],
  onwarn: (warning, handler) => {
    // @TODO
    if (warning.code.startsWith("a11y-")) {
      return;
    }
    handler(warning);
  },
};

export default config;
