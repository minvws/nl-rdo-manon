import type { LayoutLoad } from "./$types";
import { loadBreadcrumbNames } from "$lib/breadcrumbs";

export const load: LayoutLoad = async () => {
  return {
    breadcrumbNames: await loadBreadcrumbNames(),
  };
};
