import { base } from "$app/paths";

export type MarkdownNav = Array<MarkdownNavItem>;
export type MarkdownNavItem = Record<string, string | MarkdownNav>;
export type ParsedNav = Array<ParsedNavItem>;
export type ParsedNavItem = { link: Link; children?: ParsedNav };
export type Link = { name: string; href: string };

export function parseNav(list?: MarkdownNav): ParsedNav | undefined {
  if (!list || !list.length) return;
  const result: ParsedNav = [];
  for (const item of list) {
    let link, children;
    for (let [key, value] of Object.entries(item)) {
      if (typeof value === "string") {
        const href = value.charAt(0) === "#" ? value : `${base}${value}`;
        link = { name: key, href };
      } else if (Array.isArray(value)) {
        children = parseNav(value);
      }
    }
    if (link) {
      result.push({ link, children });
    } else {
      console.error(`Invalid nav list: ${JSON.stringify(item)}`);
    }
  }
  if (result.length) return result;
}
