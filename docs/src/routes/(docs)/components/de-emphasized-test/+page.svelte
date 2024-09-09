<script context="module">
  export const breadcrumb = "Subtielere weergave testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Subtielere weergave testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Subtielere weergave testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="de-emphasized">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="de-emphasized">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
`}
        />
      </section>
    </div>
  </article>
</main>
