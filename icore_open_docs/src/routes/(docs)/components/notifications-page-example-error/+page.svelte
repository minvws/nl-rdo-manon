<script context="module">
  export const breadcrumb = "Pagina-notificatie foutmelding voorbeeld";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Pagina-notificatie foutmelding voorbeeld</title>
</svelte:head>

<main id="main-content">
  <section class="error" role="group" aria-label="foutmelding">
    <div>
      <span>Foutmelding:</span>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </section>

  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Pagina-notificatie foutmelding voorbeeld</h1>
        <p>Voor het weergeven van notificaties op paginaniveau.</p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visueel voorbeeld:</h3>
        <p>Voor het voorbeeld zie bovenaan deze pagina.</p>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>section</code></h4>
        <Code
          language="html"
          code={`
<p class="error" role="group" aria-label="foutmelding"><span>Foutmelding:</span> Lorem ipsum dolor sit.</p>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-error-message";
@use "@minvws/manon/notification-error-page";
`}
        />
      </section>
    </div>
  </article>
</main>
