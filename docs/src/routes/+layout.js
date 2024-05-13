import { redirect } from "@sveltejs/kit";
import { redirects } from "../redirects.js";

export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
  const { pathname } = url;
  if (pathname in redirects) {
    return redirect(301, redirects[pathname]);
  }
}
