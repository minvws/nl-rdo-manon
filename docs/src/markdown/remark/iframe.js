import { visit } from "unist-util-visit";

const iframeTagPattern = /<\s*?iframe[\s\S]*?>|<\/\s*?iframe\s*?>/g;

/**
 * Remark plugin to rewrite <iframe> to <Component.iframe> (for mdsvex).
 * @returns {(ast: import("mdast").Root) => undefined}
 */
export function remarkIframe() {
  return function (ast) {
    visit(ast, "html", (node) => {
      node.value = node.value.replaceAll(iframeTagPattern, (match) =>
        // replace first occurrence, which is always the tag name:
        match.replace("iframe", "Components.iframe"),
      );
    });
  };
}
