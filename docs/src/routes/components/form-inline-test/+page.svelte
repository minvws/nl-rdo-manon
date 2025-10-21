<script module>
  export const breadcrumb = "Inlineformulier testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Inlineformulier testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Inlineformulier testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post" class="inline">
          <button type="submit">Haal gegevens op</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post" class="inline">
  <button type="submit">Haal gegevens op</button>
</form>
`}
        />

        <h3>Meerdere knoppen</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post" class="inline">
          <button type="submit">Haal gegevens op</button>
          <button type="submit">Haal gegevens op</button>
        </form>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<form action="" method="post" class="inline">
  <button type="submit">Haal gegevens op</button>
  <button type="submit">Haal gegevens op</button>
</form>
`}
        />

        <h3>Knop en formulierknop gecombineerd</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="button-container">
          <button type="submit">Haal gegevens op</button>
          <form action="" method="post" class="inline">
            <button type="submit">Haal gegevens op</button>
          </form>
        </div>

        <p>HTML-voorbeeld:</p>
        <Code
          language="html"
          code={`
<div class="button-container">
  <button type="submit">Haal gegevens op</button>
  <form action="" method="post" class="inline">
      <button type="submit">Haal gegevens op</button>
  </form>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
