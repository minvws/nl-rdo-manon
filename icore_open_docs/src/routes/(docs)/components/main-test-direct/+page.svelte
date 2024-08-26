<script context="module">
  export const breadcrumb = "Main testpagina";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Main testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <h1>Direct</h1>
  <p>Componenten direct binnen de <code>main</code> geplaatst.</p>

  <h2>HTML-voorbeeld:</h2>
  <Code
    language="html"
    code={`
<main>
  <h1>Main testpagina</h1>
  <p>Deze voorbeeldpagina maakt gebruik van de volgende html-structuur</p>
</main>
`}
  />

  <h2>Gebruikte bestanden</h2>
  <p>
    Voor meer informatie over importeren en instellen van componenten. Zie: <a
      href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a
    >
  </p>

  <h3>Importeer component via npm</h3>

  <h4>CSS-voorbeeld:</h4>
  <Code
    language="css"
    code={`
@use "@minvws/manon/main";
`}
  />

  <h3>Ingestelde waarden</h3>
  <h4>CSS-voorbeeld:</h4>
  <Code
    language="css"
    code={`
:root {
  --main-gap: var(--content-gap);
  --main-padding-top: var(--page-whitespace-top);
  --main-padding-right: var(--page-whitespace-right);
  --main-padding-bottom: var(--page-whitespace-bottom);
  --main-padding-left: var(--page-whitespace-left);
}
`}
  />

  <h4>Layout-set</h4>
  <Code
    language="css"
    code={`
:root {
  /* Page */
  --page-whitespace-top: 4rem;
  --page-whitespace-right: 2%;
  --page-whitespace-bottom: 4rem;
  --page-whitespace-left: 2%;

  /* Content */
  --content-flex-direction: column;
  --content-justify-content: flex-start;
  --content-align-items: flex-start;
  --content-gap: 2rem;
  --content-padding-top: 2rem;
  --content-padding-right: 0;
  --content-padding-bottom: 2rem;
  --content-padding-left: 0;
  --content-max-width: 80rem;
}
`}
  />
</main>

<style>
  :root {
    --main-gap: var(--content-gap);
    --main-padding-top: var(--page-whitespace-top);
    --main-padding-right: var(--page-whitespace-right);
    --main-padding-bottom: var(--page-whitespace-bottom);
    --main-padding-left: var(--page-whitespace-left);
  }
</style>
