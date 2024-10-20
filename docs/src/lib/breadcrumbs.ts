import type { Breadcrumb, BreadcrumbNames } from "./types";

export function getBreadcrumbs(
  routeId: string | null,
  breadcrumbNames: BreadcrumbNames,
): Array<Breadcrumb> {
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

export async function loadBreadcrumbNames(): Promise<BreadcrumbNames> {
  const modules = import.meta.glob("../routes/**/+page.svelte");
  const names: BreadcrumbNames = {};
  await Promise.all(
    Object.entries(modules).map(async ([key, value]) => {
      key = routeFromModulePath(key);
      if (!key) return;
      const name = (await nameFromModule(value)) || nameFromKey(key);
      names[key] = name;
    }),
  );
  return names;
}

const routeSegmentPattern = /\/[^+.(\/]+/g;

/**
 * Strip the "../routes/" prefix, "/+page.svelte" suffix, and any route
 * "(group)/"s from the module path.
 */
function routeFromModulePath(path: string): string {
  routeSegmentPattern.lastIndex = 0;
  let route = "";
  let match;
  while ((match = routeSegmentPattern.exec(path))) {
    if (match[0] === "/routes") continue;
    route += match[0];
  }
  return route;
}

async function nameFromModule(mod: () => Promise<any>): Promise<string> {
  const name = (await mod()).breadcrumb;
  return typeof name === "string" ? name : "";
}

function nameFromKey(key: string): string {
  const parts = key.split("/");
  if (parts.length < 3) return "";
  const name = parts[parts.length - 2];
  return name[0].toUpperCase() + name.slice(1);
}
