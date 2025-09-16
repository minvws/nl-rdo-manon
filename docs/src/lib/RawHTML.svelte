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
  let { path = "" }: { path?: string } = $props();

  let htmlContent: string = $state("<p>Loading...</p>");

  const modules = import.meta.glob("/src/routes/snippets/**/*.{html,svelte}", {
    query: "?raw",
    import: "default",
  });

  $effect(async () => {
    const key = `/src/routes/snippets/${path}`;
    if (modules[key]) {
      const content: string = await modules[key]();
      htmlContent = content;
    } else {
      htmlContent = `<p style="color: red;">Error: No file found for "${path}"</p>`;
    }
  });
</script>

{@html htmlContent}
