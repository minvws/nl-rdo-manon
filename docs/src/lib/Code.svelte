<script>
  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";
  import css from "svelte-highlight/languages/css";
  import scss from "svelte-highlight/languages/scss";
  import "svelte-highlight/styles/github.css";

  /** @type {'html' | 'css' | 'scss'} */
  export let language = "html";
  export let code = "";

  const trimPattern = /^\s+|\s+$/g;

  $: trimmed = code.replace(trimPattern, "");
</script>

<Highlight language={language === "html" ? xml : css} code={trimmed} />
