<script context="module">
  export const breadcrumb = "Notifactie op een paragraaf testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Notifactie op een paragraaf testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Notifactie op een paragraaf testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Foutmelding</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="error" role="group" aria-label="foutmelding">
          <span>Foutmelding:</span> Lorem <a href="">ipsum</a> dolor sit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="error" role="group" aria-label="foutmelding"><span>Foutmelding:</span> Lorem <a href="">ipsum</a> dolor sit.</p>
`}
        />

        <h3>Waarschuwing</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Lorem <a href="">ipsum</a> dolor sit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="warning" role="group" aria-label="waarschuwing"><span>Waarschuwing:</span> Lorem <a href="">ipsum</a> dolor sit.</p>
`}
        />

        <h3>Toelichting</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="explanation" role="group" aria-label="toelichting">
          <span>Toelichting:</span> Lorem <a href="">ipsum</a> dolor sit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="explanation" role="group" aria-label="toelichting"><span>Toelichting:</span> Lorem <a href="">ipsum</a> dolor sit.</p>
`}
        />

        <h3>Bevestiging</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="confirmation" role="group" aria-label="bevestiging">
          <span>Bevestiging:</span> Lorem <a href="">ipsum</a> dolor sit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="confirmation" role="group" aria-label="bevestiging"><span>Bevestiging:</span> Lorem <a href="">ipsum</a> dolor sit.</p>
`}
        />

        <h3>Systeembericht</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="system" role="group" aria-label="systeembericht">
          <span>Systeembericht:</span> Lorem <a href="">ipsum</a> dolor sit.
        </p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="system" role="group" aria-label="systeembericht"><span>Systeembericht:</span> Lorem <a href="">ipsum</a> dolor sit.</p>
`}
        />
      </section>
    </div>
  </article>
</main>
