<script context="module">
  export const breadcrumb = "Div content wrapper test";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Div content wrapper test</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <div>
    <div>
      <h1>Content wrapper div</h1>
      <p>Componenten gegroepeerd in <code>div</code>'s binnen de <code>main</code>.</p>

      <h2>HTML-voorbeeld:</h2>
      <Code
        language="html"
        code={`
<main>
  <div> <!-- This can be full width -->
    <div> <!-- While the content width can be limited -->
      <!-- content -->
    </div>
  </div>
</main>
`}
      />
    </div>
  </div>

  <div class="branding-color-accent-5">
    <div>
      <h2>Gebruikte bestanden</h2>
      <p>
        Voor meer informatie over importeren en instellen van componenten. Zie: <a
          href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a
        >
      </p>

      <h3>NPM-componenten</h3>

      <h4>CSS-voorbeeld:</h4>
      <Code
        language="css"
        code={`
@use "@minvws/manon/div-content-wrapper";
`}
      />
    </div>

    <div>
      <h3>Ingestelde waarden</h3>
      <h4>CSS-voorbeeld</h4>
      <Code
        language="css"
        code={`
:root {
  /* Resetting previously set styles. */
  /* This is only needed if these styles have been added */

  /* Main */
  --main-gap: 0;
  --main-padding-top: 0;
  --main-padding-right: 0;
  --main-padding-bottom: 0;
  --main-padding-left: 0;

  /* Section */
  --div-gap: 0;
  --div-padding-top: 0;
  --div-padding-right: 0;
  --div-padding-bottom: 0;
  --div-padding-left: 0;

  /* -- end of the style reset -- */

  /* Section content wrapper */
  --div-content-wrapper-gap: var(--content-gap);
  --div-content-wrapper-padding-top: var(--content-padding-top);
  --div-content-wrapper-padding-right: var(--content-padding-right);
  --div-content-wrapper-padding-bottom: var(--content-padding-bottom);
  --div-content-wrapper-padding-left: var(--content-padding-left);
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
    </div>
  </div>
</main>

<style>
  :root {
    /* Div */
    --div-content-wrapper-gap: var(--content-gap);
    --div-content-wrapper-padding-top: var(--content-padding-top);
    --div-content-wrapper-padding-right: var(--content-padding-right);
    --div-content-wrapper-padding-bottom: var(--content-padding-bottom);
    --div-content-wrapper-padding-left: var(--content-padding-left);
  }
</style>
