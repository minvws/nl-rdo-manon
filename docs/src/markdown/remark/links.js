import { visit } from "unist-util-visit";

const linkTagPattern = /<\/?a(?:\s[^>]*)?\s*>/g;

/**
 * Remark plugin to rewrite <a> to <Components.a> (for mdsvex).
 * @returns {(ast: Root) => undefined}
 */
export function remarkLinks() {
  return function (ast) {
    visit(ast, "html", (node) => {
      node.value = node.value.replaceAll(linkTagPattern, (match) =>
        match.replace(/a(?=\s|>)/, "Components.a"),
      );
    });
  };
}
