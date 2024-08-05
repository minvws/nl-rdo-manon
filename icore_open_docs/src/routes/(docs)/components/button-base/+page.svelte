<script context="module">
  export const breadcrumb = "Knoppen basisweergave";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Knoppen basisweergave</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <h1>Basisweergave</h1>
      <section id="button-base-button" class="visually-grouped">
        <h2><code>button</code></h2>
        <h3>Visuele weergave:</h3>

        <button>Lorem ipsum</button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button>Lorem ipsum</button>
`}
        />

        <h2><code>button</code> uitgeschakeld</h2>
        <h3>Visuele weergave:</h3>

        <button disabled>Lorem ipsum</button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button disabled>button primary</button>
`}
        />
      </section>

      <section id="button-base-input" class="visually-grouped">
        <h2><code>input type="button"</code></h2>
        <h3>Visuele weergave:</h3>

        <input type="button" value="Lorem ipsum" />

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<input type="button" value="Lorem ipsum">
`}
        />

        <h2><code>input type="button"</code> uitgeschakeld</h2>
        <h3>Visuele weergave:</h3>

        <input type="button" value="Lorem ipsum" disabled />

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<input type="button" value="Lorem ipsum" disabled>
`}
        />
      </section>

      <section id="requirements" class="visually-grouped">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>
        <h3>Import scss-file</h3>
        <Code
          language="html"
          code={`
@import button-base;
`}
        />

        <h3>Import via npm-package</h3>
        <Code
          language="html"
          code={`
@use "@minvws/manon/button-base";
`}
        />
      </section>

      <section id="related" class="visually-grouped">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/button-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
