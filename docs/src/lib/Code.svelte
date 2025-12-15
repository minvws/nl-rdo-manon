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

  interface Props {
    language?: "html" | "css" | "scss" | "javascript" | "shell" | "plaintext";
    code?: string;
  }

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error("Failed to copy code to clipboard:", err);
      return;
    }
  }

  let { language = "plaintext", code = "" }: Props = $props();
  let trimmed = $derived(code.replace(/^(\s*\n)+/, "").replace(/\n\s*$/, ""));
  let highlighted = $derived(hljs.highlight(trimmed, { language }).value);
</script>

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

  <code>{@html highlighted}</code>
</pre>
