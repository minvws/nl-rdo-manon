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
  <article class="visually-grouped">
    <div>
      <h1>Article content wrapper</h1>
      <p>Componenten gegroepeerd in <code>article</code>'s.</p>

      <h2>HTML-voorbeeld:</h2>
      <Code
        language="html"
        code={`
<main>
  <article class="visually-grouped"> <!-- This can be full width -->
    <div> <!-- While the content width can be limited -->
      <!-- content -->
    </div>
  </article>
</main>
`}
      />
    </div>
  </article>

  <article class="branding-color-accent-5">
    <div>
      <h2>Gebruikte componenten</h2>
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
@use "@minvws/manon/article-content-wrapper";
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
  --article-gap: 0;
  --article-padding-top: 0;
  --article-padding-right: 0;
  --article-padding-bottom: 0;
  --article-padding-left: 0;

  /* -- end of the style reset -- */

  /* Section content wrapper */
  --article-content-wrapper-gap: var(--content-gap);
  --article-content-wrapper-padding-top: var(--content-padding-top);
  --article-content-wrapper-padding-right: var(--content-padding-right);
  --article-content-wrapper-padding-bottom: var(--content-padding-bottom);
  --article-content-wrapper-padding-left: var(--content-padding-left);
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
  </article>
</main>

<style>
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
    --article-gap: 0;
    --article-padding-top: 0;
    --article-padding-right: 0;
    --article-padding-bottom: 0;
    --article-padding-left: 0;

    /* -- end of the style reset -- */

    /* Section content wrapper */
    --article-content-wrapper-gap: var(--content-gap);
    --article-content-wrapper-padding-top: var(--content-padding-top);
    --article-content-wrapper-padding-right: var(--content-padding-right);
    --article-content-wrapper-padding-bottom: var(--content-padding-bottom);
    --article-content-wrapper-padding-left: var(--content-padding-left);
  }
</style>
