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
  import "highlight.js/styles/github.css";

  let {
    language = "plaintext",
    code = "",
    path = "",
  }: {
    language?: "html" | "css" | "scss" | "javascript" | "shell" | "plaintext";
    code?: string;
    path?: string;
  } = $props();

  let htmlCode: string = $state(code);

  const modules = import.meta.glob("/src/routes/snippets/**/*.{html,svelte}", {
    query: "?raw",
    import: "default",
  });

  $effect(async () => {
    if (path && modules[`/src/routes/snippets/${path}`]) {
      const content: string = await modules[`/src/routes/snippets/${path}`]();

      // Strip script blocks for Svelte pages
      htmlCode = content.replace(/^<script[\s\S]*?<\/script>\s*/i, "").trim();
    } else {
      htmlCode = code;
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
