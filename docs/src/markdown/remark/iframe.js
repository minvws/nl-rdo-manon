/**
 * @import type { Root } from 'mdast'
 */

import { visit } from "unist-util-visit";

const iframeTagPattern = /<iframe[\s\S]*?>|<\/iframe>/g;

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
