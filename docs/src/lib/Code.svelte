<script context="module">
  import hljs from "highlight.js/lib/core";
  import xml from "highlight.js/lib/languages/xml";
  import css from "highlight.js/lib/languages/css";
  import scss from "highlight.js/lib/languages/scss";
  import plaintext from "highlight.js/lib/languages/plaintext";
  hljs.registerLanguage("html", xml);
  hljs.registerLanguage("css", css);
  hljs.registerLanguage("scss", scss);
  hljs.registerLanguage("plaintext", plaintext);
</script>

<script>
  import "highlight.js/styles/github.css";

  const trim = (markup) => markup.replace(/^(\s*\n)+/, "").replace(/\n\s*$/, "");

  /** @type {'html' | 'css' | 'scss' | 'plaintext'} */
  export let language = "plaintext";
  export let code = "";
  $: trimmed = trim(code);
  $: highlighted = hljs.highlight(trimmed, { language }).value;
</script>

{@html `<!--
${trimmed}
-->`}
<pre><code>{@html highlighted}</code></pre>

<style>
  code {
    padding: 1rem;
    overflow-x: auto;
    background-color: #ffffff;
  }
</style>
