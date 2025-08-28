<!--
  RawHTML.svelte

  A component that dynamically loads and renders a raw HTML file from the
  `/src/routes/examples/` directory. The file path is specified via the
  `path` prop.

  Props:
    - path (string): Relative path to the HTML file, e.g., "accordion/ul.html".

  Usage:
    <RawHTML path="accordion/ul.html" />
-->
<script lang="ts">
  import { onMount } from "svelte";
  export let path: string;
  let htmlContent: string = "";

  const modules = import.meta.glob("/src/routes/examples/**/*.html", { as: "raw" });

  onMount(() => {
    const key = `/src/routes/examples/${path}`;
    if (modules[key]) {
      modules[key]().then((mod) => (htmlContent = mod));
    } else {
      htmlContent = `<p style="color: red;">Error: No file found for "${path}"</p>`;
    }
  });
</script>

{@html htmlContent}
