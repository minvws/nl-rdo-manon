<script context="module">
  export const breadcrumb = "Gecombineerde testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Gecombineerde testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Gecombineerde testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Gecombineerd invoerveld met <code>button</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="voorbeeld-input-button">Ipsum</label>
            <div class="combined-field">
              <input id="voorbeeld-input-button" name="voorbeeld-input-button" type="text" />
              <button class="icon icon-cat">Cat</button>
            </div>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="voorbeeld-input-button">Ipsum</label>
    <div class="combined-field">
      <input id="voorbeeld-input-button" name="voorbeeld-input-button" type="text">
      <button class="icon icon-cat">Cat</button>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Gecombineerde invoervelden</h3>
        <h4>Visueel voorbeeld:</h4>

        <form action="" method="post">
          <div class="combined-field">
            <div>
              <label for="voorbeeld-combined-inputs-1">Ipsum</label>
              <input
                id="voorbeeld-combined-inputs-1"
                name="voorbeeld-combined-inputs-1"
                type="text"
              />
            </div>
            <div>
              <label for="voorbeeld-combined-inputs-2">Ipsum</label>
              <input
                id="voorbeeld-combined-inputs-2"
                name="voorbeeld-combined-inputs-2"
                type="text"
              />
            </div>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="combined-field">
    <div>
      <label for="voorbeeld-combined-inputs-1">Ipsum</label>
      <input id="voorbeeld-combined-inputs-1" name="voorbeeld-combined-inputs-1" type="text">
    </div>
    <div>
      <label for="voorbeeld-combined-inputs-2">Ipsum</label>
      <input id="voorbeeld-combined-inputs-2" name="voorbeeld-combined-inputs-2" type="text">
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
