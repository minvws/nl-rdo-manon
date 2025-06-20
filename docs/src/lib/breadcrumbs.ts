import type { Breadcrumb, BreadcrumbNames } from "./types";

/**
 * Get the breadcrumbs for the given route.
 */
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

/**
 * Import breadcrumb names from page modules.
 *
 * Supports both `export const breadcrumb` from +page.svelte files and the
 * `title` and `breadcrumb` frontmatter properties from +page.md files.
 *
 * Resolves to an object mapping routes to breadcrumb names.
 */
export async function loadBreadcrumbNames(): Promise<BreadcrumbNames> {
  const modules = import.meta.glob("../routes/**/+page.*");
  const names: BreadcrumbNames = {};
  await Promise.all(
    Object.entries(modules).map(async ([key, value]) => {
      key = routeFromModulePath(key);
      if (!key) return;
      names[key] = nameFromModule(await value()) || nameFromKey(key);
    }),
  );
  return names;
}

const routeSegmentPattern = /\/[^+.(\/]+/g;

/**
 * Strip the "../routes/" prefix, "/+page.*" suffix, and any route
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

function nameFromModule(mod: unknown): string | undefined {
  if (typeof mod !== "object") {
    return undefined;
  }

  // Try getting `breadcrumb` export from svelte page component
  if (typeof (mod as any).breadcrumb === "string") {
    return (mod as any).breadcrumb;
  }

  // Try getting frontmatter `breadcrumb` or `title` from markdown page
  if (typeof (mod as any).metadata !== "object") {
    return undefined;
  }
  if (typeof ((mod as any).metadata as any).breadcrumb === "string") {
    return ((mod as any).metadata as any).breadcrumb;
  }
  if (typeof ((mod as any).metadata as any).title === "string") {
    return ((mod as any).metadata as any).title;
  }
}

function nameFromKey(key: string): string {
  const parts = key.split("/");
  if (parts.length < 3) return "";
  const name = parts[parts.length - 2];
  return name[0].toUpperCase() + name.slice(1);
}
