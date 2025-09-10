import { visit } from "unist-util-visit";

const linkTagPattern = /<\s*?a\s+([^>]*?)>/g;
const hrefPattern = /href=["']([^"']*?)["']/;

/**
 * Remark plugin to rewrite <a> to <Components.a> (for mdsvex).
 */
export function remarkLinks() {
  return function (ast) {
    visit(ast, "html", (node) => {
      node.value = node.value.replaceAll(linkTagPattern, (match, attributes) => {
        // Only replace it if it has an href attribute
        if (hrefPattern.test(attributes)) {
          return match.replace("<a", "<Components.a");
        }
        return match;
      });

      // Also replace closing tags
      node.value = node.value.replaceAll(/<\/\s*?a\s*?>/g, "</Components.a>");
    });
  };
}
