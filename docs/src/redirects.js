/**
 * Record mapping old URLs to new URLs. The root +layout.ts uses this to
 * generate redirect pages for the old URLs during a build. The keys (old URLs)
 * are added to the kit.prerender.entries array in svelte.config.js to ensure
 * they are included in the build.
 *
 * NB: this needs to be a .js file because it's imported from svelte.config.js.
 *
 * @type {Record<string, string>}
 */
export const redirects = {};
