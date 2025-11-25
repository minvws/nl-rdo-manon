<!--
  Snippet.svelte

  A component to display content from a file snippet, with options for rendering.

  Props:
    - as: "code" | "raw" | "text"
        Determines how the content is rendered.
        - "code": (Default) Renders with syntax highlighting in a <pre><code> block.
        - "raw": Renders as raw HTML using {@html}.
        - "text": Renders as plain text.
    - language: "html" | "css" | "scss" | "javascript" | "shell" | "plaintext"
        The language for syntax highlighting when `as` is "code".
    - code: string
        Static code content to display. Used if `path` is not provided.
    - path: string
        Relative path to a snippet file (e.g., "accordion/ul.html").
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

  type RenderAs = "code" | "raw" | "text";
  type Language = "html" | "css" | "scss" | "javascript" | "shell" | "plaintext";

  let {
    as = "code" as RenderAs,
    language = "plaintext" as Language,
    code = "",
    path = "",
  }: { as?: RenderAs; language?: Language; code?: string; path?: string } = $props();

  let content: string = $state(code);

  const modules = import.meta.glob("/src/routes/snippets/**/*.{html,svelte}", {
    query: "?raw",
    import: "default",
  });

  $effect(() => {
    if (!path) {
      content = code;
      return;
    }

    const key = `/src/routes/snippets/${path}`;
    if (!modules[key]) {
      content = `<p style="color: red;">Error: No file found for "${path}"</p>`;
      return;
    }

    modules[key]()
      .then((loadedContent: unknown) => {
        if (typeof loadedContent !== 'string') {
          content = `<p style="color: red;">Error: Snippet content is not a string for "${path}"</p>`;
          console.error('Snippet content is not a string:', loadedContent);
          return;
        }

        if (as === 'code') {
          // Strip script blocks for Svelte pages
          content = loadedContent.replace(/^<script[\s\S]*?<\/script>\s*/i, '').trim();
        } else {
          content = loadedContent;
        }
      })
      .catch((err) => {
        content = `<p style="color: red;">Error loading snippet ${path}</p>`;
        console.error(`Error loading snippet ${path}:`, err);
      });
  });

  function highlight(code: string, lang: Language) {
    const trimmed = code.replace(/^(\s*\n)+/, "").replace(/\n\s*$/, "");
    try {
      return hljs.highlight(trimmed, { language: lang }).value;
    } catch {
      return trimmed; // fallback: plain text if language not registered
    }
  }
</script>

{#if as === "code"}
  <pre><code>{@html highlight(content, language)}</code></pre>
{:else if as === "raw"}
  {@html content}
{:else}
  {content}
{/if}
