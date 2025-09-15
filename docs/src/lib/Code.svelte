<!--
  Code.svelte

  A component to display syntax-highlighted code.

  Props:
    - language: "html" | "css" | "scss" | "javascript" | "shell" | "plaintext"
        The language for syntax highlighting. Default is "plaintext".
    - code: string
        Static code content to display. Used if `path` is not provided.
    - path: string
        Relative path to an HTML example file (e.g., "accordion/ul.html").
        If provided, the file is loaded asynchronously and overrides `code`.
-->
<script module lang="ts">
  import hljs from "highlight.js/lib/core";
  import xml from "highlight.js/lib/languages/xml";
  import css from "highlight.js/lib/languages/css";
  import scss from "highlight.js/lib/languages/scss";
  import javascript from "highlight.js/lib/languages/javascript";
  import shell from "highlight.js/lib/languages/shell";
  import plaintext from "highlight.js/lib/languages/plaintext";
  hljs.registerLanguage("html", xml);
  hljs.registerLanguage("css", css);
  hljs.registerLanguage("scss", scss);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("shell", shell);
  // @ts-ignore: the "plaintext" language is has no `contains`, presumably intentionally
  hljs.registerLanguage("plaintext", plaintext);
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import "highlight.js/styles/github.css";

  export let language: "html" | "css" | "scss" | "javascript" | "shell" | "plaintext" = "plaintext";
  export let code: string = "";
  export let path: string = "";

  let htmlCode: string = code;

  const modules = import.meta.glob("/src/routes/examples/**/*.{html,svelte}", { as: "raw" });

  onMount(async () => {
    if (path && modules[`/src/routes/snippets/${path}`]) {
      let content = await modules[`/src/routes/examples/${path}`]();

      // Strip script blocks for Svelte pages
      htmlCode = content.replace(/<script[\s\S]*?<\/script>/g, "").trim();
    }
  });

  function highlight(code: string) {
    const trimmed = code.replace(/^(\s*\n)+/, "").replace(/\n\s*$/, "");
    try {
      return hljs.highlight(trimmed, { language }).value;
    } catch {
      return trimmed; // fallback: plain text if language not registered
    }
  }
</script>

<pre><code>{@html highlight(htmlCode)}</code></pre>
