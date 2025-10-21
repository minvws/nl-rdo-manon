/**
 * @import type { Root } from 'mdast'
 */

import { visit } from "unist-util-visit";

const iframeTagPattern = /<\s*?iframe[\s\S]*?>|<\/\s*?iframe\s*?>/g;

/**
 * Remark plugin to rewrite <iframe> to <Component.iframe> (for mdsvex).
 * @returns {(ast: Root) => undefined}
 */
export function remarkIframe() {
  return function (ast) {
    visit(ast, "html", (node) => {
      node.value = node.value.replaceAll(iframeTagPattern, (match) =>
        match.replace("iframe", "Components.iframe"),
      );
    });
  };
}
