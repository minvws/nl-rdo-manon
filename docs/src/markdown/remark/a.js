import { visit } from "unist-util-visit";

const aTagPattern = /<\s*?a[\s\S]*?>|<\/\s*?a\s*?>/g;

/**
 * Remark plugin to rewrite <a> to <Component.a> (for mdsvex).
 * @returns {(ast: import("mdast").Root) => undefined}
 */
export function remarkA() {
  return function (ast) {
    visit(ast, "html", (node) => {
      node.value = node.value.replaceAll(aTagPattern, (match) => {
        // replace first occurrence, which is always the tag name:
        return match.replace("a", "Components.a");
      });
    });
  };
}
