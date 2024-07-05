export type Route = string; // e.g. "/components/button"
export type Breadcrumb = { route: Route; name: string };
export type BreadcrumbNames = Record<Route, string>;
