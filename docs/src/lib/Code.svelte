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

  let showCopiedMessage = $state(false);
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error("Failed to copy code to clipboard:", err);
      return;
    }

    showCopiedMessage = true;
    setTimeout(() => {
      showCopiedMessage = false;
    }, 2000);
  }

  let { language = "plaintext", code = "" }: Props = $props();
  let trimmed = $derived(code.replace(/^(\s*\n)+/, "").replace(/\n\s*$/, ""));
  let highlighted = $derived(hljs.highlight(trimmed, { language }).value);
</script>

<button onclick={copyCode} aria-label="Copy code to clipboard">
  {#if showCopiedMessage}
    Copied!
  {:else}
    Copy
  {/if}
</button>

<pre><code>{@html highlighted}</code></pre>
