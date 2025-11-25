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
  // This script runs once when the module is first evaluated.
  // We import highlight.js and only the languages we need to keep the bundle size down.
  import hljs from "highlight.js/lib/core";
  import xml from "highlight.js/lib/languages/xml";
  import css from "highlight.js/lib/languages/css";
  import scss from "highlight.js/lib/languages/scss";
  import javascript from "highlight.js/lib/languages/javascript";
  import shell from "highlight.js/lib/languages/shell";
  import plaintext from "highlight.js/lib/languages/plaintext";

  // Register languages with highlight.js, making 'html' an alias for 'xml'.
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

  // Destructure props with default values.
  let {
    as = "code" as RenderAs,
    language = "plaintext" as Language,
    code = "",
    path = "",
  }: { as?: RenderAs; language?: Language; code?: string; path?: string } = $props();

  // `content` is a reactive state variable that holds the snippet text to be rendered.
  // It's initialized with the `code` prop.
  let content: string = $state(code);

  // Use Vite's `import.meta.glob` to find all potential snippet files.
  // The `{ query: "?raw", import: "default" }` options mean we get the raw text content
  // of the files, and the import function will resolve to the default export.
  const modules = import.meta.glob("/src/routes/snippets/**/*.{html,svelte}", {
    query: "?raw",
    import: "default",
  });

  // A Svelte 5 effect that runs whenever its dependencies (`path` or `code`) change.
  // It's used here to load file content asynchronously when the `path` prop is updated.
  $effect(() => {
    // If no path is provided, just use the static `code` prop.
    if (!path) {
      content = code;
      return;
    }

    // Construct the key to look up the module in the `modules` object.
    const key = `/src/routes/snippets/${path}`;
    if (!modules[key]) {
      content = `<p style="color: red;">Error: No file found for "${path}"</p>`;
      return;
    }

    // The dynamic import returns a promise. We can't use top-level await in an effect,
    // so we use a .then() chain to handle the asynchronous result.
    modules[key]()
      .then((loadedContent: unknown) => {
        // The loaded module content is of type `unknown`, so we must verify it's a string.
        if (typeof loadedContent !== "string") {
          content = `<p style="color: red;">Error: Snippet content is not a string for "${path}"</p>`;
          console.error("Snippet content is not a string:", loadedContent);
          return;
        }

        // If rendering as code, and the snippet is a Svelte file,
        // strip the <script> block to only show the markup.
        if (as === "code") {
          content = loadedContent.replace(/^<script[\s\S]*?<\/script>\s*/i, "").trim();
        } else {
          content = loadedContent;
        }
      })
      .catch((err) => {
        content = `<p style="color: red;">Error loading snippet ${path}</p>`;
        console.error(`Error loading snippet ${path}:`, err);
      });
  });

  /**
   * Highlights the given code using highlight.js.
   *
   * @param code The string of code to highlight.
   * @param lang The language to use for highlighting.
   *
   * @returns The HTML string with syntax highlighting.
   */
  function highlight(code: string, lang: Language) {
    // Trim leading/trailing newlines for cleaner presentation in <pre> tags.
    const trimmed = code.replace(/^(\s*\n)+/, "").replace(/\n\s*$/, "");
    try {
      return hljs.highlight(trimmed, { language: lang }).value;
    } catch {
      // If highlighting fails (e.g., language not registered), return the trimmed code as-is.
      return trimmed;
    }
  }
</script>

<!--
  Conditionally render the content based on the `as` prop.
-->
{#if as === "code"}
  <pre><code>{@html highlight(content, language)}</code></pre>
{:else if as === "raw"}
  {@html content}
{:else}
  {content}
{/if}
