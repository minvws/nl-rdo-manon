import { visit } from "unist-util-visit";

const linkTagPattern = /<\s*a\b([^>]*)>/g;
const hrefPattern = /href=["']([^"']+)["']/;

/**
 * Remark the plugin to rewrite <a> to <Components.a> (for mdsvex).
 */
export function remarkLinks() {
  return function (ast) {
    visit(ast, "html", (node) => {
      node.value = node.value.replaceAll(linkTagPattern, (match, attributes) => {
        // Only replace, if href attribute exists
        if (hrefPattern.test(attributes)) {
          return match.replace("<a", "<Components.a");
        }
        return match;
      });

      // Also replace closing tags
      node.value = node.value.replaceAll(/<\/\s*a\s*>/g, "</Components.a>");
    });
  };
}
