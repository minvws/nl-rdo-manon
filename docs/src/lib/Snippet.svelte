<!--
  @component

  Snippet is a Svelte component for displaying code snippets with syntax
  highlighting.

  @prop { "code" | "raw" | "text" } [as="code"] - How to render the snippet content.
  @prop { "html" | "css" | "scss" | "javascript" | "shell" | "plaintext" } [language="plaintext"] - Language for syntax highlighting.
  @prop {string} [code=""] - Static code content to display.
  @prop {string} [path=""] - Relative path to a snippet file to load content from.

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
  const modules: Record<string, () => Promise<unknown>> = import.meta.glob(
    "/src/routes/snippets/**/*.{html,svelte}",
    {
      query: "?raw",
      import: "default",
    },
  );

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

  /**
   * Copies the current code content to the clipboard.
   */
  function copyCode() {
    try {
      navigator.clipboard.writeText(code);
    } catch (err) {
      console.error("Failed to copy code to clipboard:", err);
      return;
    }
  }
</script>

<!--
  Conditionally render the content based on the `as` prop.
-->
{#if as === "code"}
  <pre>
    <button onclick={copyCode} aria-label="Copy code to clipboard" class="icon-only copy-code">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-copy">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
        />
        <path
          d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
        />
      </svg>
    </button>
    <code>{@html highlight(content, language)}</code>
  </pre>
{:else if as === "raw"}
  {@html content}
{:else}
  {content}
{/if}
