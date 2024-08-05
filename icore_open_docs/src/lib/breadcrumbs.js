/**
 * @param {string | null} routeId
 * @param {import('./types').BreadcrumbNames} breadcrumbNames
 * @return {Array<import('./types').Breadcrumb>}
 */
export function getBreadcrumbs(routeId, breadcrumbNames) {
  if (!routeId || !breadcrumbNames) return [];
  const breadcrumbs = [];
  let route = "";
  for (const segment of routeId.split("/")) {
    if (!segment || segment[0] === "(") continue;
    route += "/" + segment;
    const name = breadcrumbNames[route];
    if (!name) continue;
    breadcrumbs.push({ route, name });
  }
  return breadcrumbs;
}

/**
 * @return {Promise<import('./types').BreadcrumbNames>}
 */
export async function loadBreadcrumbNames() {
  const modules = import.meta.glob("../routes/**/+page.svelte");
  /** @type import('./types').BreadcrumbNames */
  const names = {};
  await Promise.all(
    Object.entries(modules).map(async ([key, value]) => {
      key = routeFromModulePath(key);
      if (!key) return;
      const name = (await nameFromModule(value)) || nameFromKey(key);
      names[/** @type {import('./types').Route} */ (key)] = name;
    }),
  );
  return names;
}

const routeSegmentPattern = /\/[^+.(\/]+/g;

/**
 * Strip the "../routes/" prefix, "/+page.svelte" suffix, and any route
 * "(group)/"s from the module path.
 * @param {string} path
 * @return {string}
 */
function routeFromModulePath(path) {
  routeSegmentPattern.lastIndex = 0;
  let route = "";
  let match;
  while ((match = routeSegmentPattern.exec(path))) {
    if (match[0] === "/routes") continue;
    route += match[0];
  }
  return route;
}

/**
 * @param {() => Promise<any>} mod
 * @return {Promise<string>}
 */
async function nameFromModule(mod) {
  const name = /** @type {any} */ (await mod()).breadcrumb;
  return typeof name === "string" ? name : "";
}

/**
 * @param {string} key
 * @return {string}
 */
function nameFromKey(key) {
  const parts = key.split("/");
  if (parts.length < 3) return "";
  const name = parts[parts.length - 2];
  return name[0].toUpperCase() + name.slice(1);
}
