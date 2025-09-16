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

  let { path = "" }: { path?: string } = $props();

  let htmlContent: string = $state("<p>Loading...</p>");

  const modules = import.meta.glob("/src/routes/snippets/**/*.{html,svelte}", {
    query: "?raw",
    import: "default",
  });

  onMount(() => {
    const key = `/src/routes/snippets/${path}`;
    if (modules[key]) {
      modules[key]().then((mod) => (htmlContent = mod));
    } else {
      htmlContent = `<p style="color: red;">Error: No file found for "${path}"</p>`;
    }
  });
</script>

{@html htmlContent}
