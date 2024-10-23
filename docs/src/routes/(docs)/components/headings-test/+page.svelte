<script module>
  export const breadcrumb = "Titel testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Titel testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Titel testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <div class="visual-example">
          <h1>Dit is een h1</h1>
          <h2>Dit is een h2</h2>
          <h3>Dit is een h3</h3>
          <h4>Dit is een h4</h4>
          <h5>Dit is een h5</h5>
          <h6>Dit is een h6</h6>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<h1>Dit is een h1</h1>
<h2>Dit is een h2</h2>
<h3>Dit is een h3</h3>
<h4>Dit is een h4</h4>
<h5>Dit is een h5</h5>
<h6>Dit is een h6</h6>
`}
        />
      </section>
    </div>
  </article>
</main>
