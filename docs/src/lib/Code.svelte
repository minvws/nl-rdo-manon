<script module lang="ts">
  import hljs from "highlight.js/lib/core";
  import xml from "highlight.js/lib/languages/xml";
  import css from "highlight.js/lib/languages/css";
  import scss from "highlight.js/lib/languages/scss";
  import plaintext from "highlight.js/lib/languages/plaintext";
  hljs.registerLanguage("html", xml);
  hljs.registerLanguage("css", css);
  hljs.registerLanguage("scss", scss);
  // @ts-ignore: the "plaintext" language is has no `contains`, presumably intentionally
  hljs.registerLanguage("plaintext", plaintext);
</script>

<script lang="ts">
  import "highlight.js/styles/github.css";

  interface Props {
    language?: "html" | "css" | "scss" | "plaintext";
    code?: string;
  }

  let { language = "plaintext", code = "" }: Props = $props();
  let trimmed = $derived(code.replace(/^(\s*\n)+/, "").replace(/\n\s*$/, ""));
  let highlighted = $derived(hljs.highlight(trimmed, { language }).value);
</script>

<pre><code>{@html highlighted}</code></pre>
