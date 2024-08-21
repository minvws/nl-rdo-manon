<script context="module">
  export const breadcrumb = "Paragraaf testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Paragraaf testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Paragraaf testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <h4>HTML-voorbeeld:</h4>

        <Code
          language="html"
          code={`
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
`}
        />
      </section>
    </div>
  </article>
</main>
