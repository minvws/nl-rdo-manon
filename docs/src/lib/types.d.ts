export type Route = string; // e.g. "/library/button"
export type Breadcrumb = { route: Route; name: string };
export type BreadcrumbNames = Record<Route, string>;
export type Theme = string;
export type ThemeConfig = {
  name: string;
  header: {
    component: any;
    data: Record<string, any>;
  };
};
export type ThemesConfig = Record<Theme, ThemeConfig>;

