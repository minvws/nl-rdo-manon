import { redirect } from "@sveltejs/kit";
import { redirects } from "../redirects.js";
import { base } from "$app/paths";

export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
  let { pathname } = url;
  if (base && pathname.startsWith(base)) {
    pathname = pathname.replace(base, "");
  }
  if (pathname in redirects) {
    return redirect(301, base + redirects[pathname]);
  }
}
