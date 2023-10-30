import { getBreadcrumbNames } from "$lib/breadcrumbs.js";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  return {
    breadcrumbNames: await getBreadcrumbNames(),
  };
}
