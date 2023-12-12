<script context="module">
  export const breadcrumb = "Focus only testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Focus only testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Focus only testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <p>
          <strong>Let op</strong>: Alleen zichtbaar als het element "in focus" is. Navigeer naar het
          voorbeeld-element met <i>tab</i>.
        </p>
        <button class="focus-only">Gefocussed element</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="focus-only">Gefocussed element</button>
`}
        />
      </section>
    </div>
  </article>
</main>
