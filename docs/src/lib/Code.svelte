<script>
  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";
  import css from "svelte-highlight/languages/css";
  import scss from "svelte-highlight/languages/scss";
  import plaintext from "svelte-highlight/languages/plaintext";
  import "svelte-highlight/styles/github.css";

  const lang = { html: xml, css, scss, plaintext };

  /** @type {'html' | 'css' | 'scss' | 'plaintext'} */
  export let language = "html";
  export let code = "";

  const trimPattern = /^\s+|\s+$/g;

  $: trimmed = code.replace(trimPattern, "");
</script>

<Highlight language={lang[language] || plaintext} code={trimmed} />
