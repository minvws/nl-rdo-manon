<script context="module">
  export const breadcrumb = "Verplichte testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Verplichte testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Invoerveld verplicht testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Invoerveld verplicht</h3>
        <h4>Visueel voorbeeld:</h4>

        <form action="" method="post">
          <label for="voorbeeld-input-required">Ipsum</label>
          <div>
            <span class="nota-bene">Dit veld is verplicht</span>
            <input
              id="voorbeeld-input-required"
              name="voorbeeld-input-required"
              placeholder="lorem ipsum"
              type="text"
              required
            />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <form action="" method="post">
          <div>
            <label for="voorbeeld-input-required">Ipsum</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                id="voorbeeld-input-required"
                name="voorbeeld-input-required"
                placeholder="lorem ipsum"
                type="text"
                required
              />
            </div>
          </div>
          <button type="submit">Verzend</button>
        </form>

        <form action="" method="post" class="horizontal-view">
          <div>
            <label for="voorbeeld-input-required">Ipsum</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                id="voorbeeld-input-required"
                name="voorbeeld-input-required"
                placeholder="lorem ipsum"
                type="text"
                required
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
  <div>
    <label for="voorbeeld-input-required">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input id="voorbeeld-input-required" name="voorbeeld-input-required" placeholder="lorem ipsum" type="text" required>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Invoerveld verplicht</h3>
        <h4>Visueel voorbeeld:</h4>

        <form action="" method="post">
          <div>
            <label for="voorbeeld-input-required">Ipsum</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input
                id="voorbeeld-input-required"
                name="voorbeeld-input-required"
                placeholder="lorem ipsum"
                type="text"
                required
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
  <div>
    <label for="voorbeeld-input-required">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input id="voorbeeld-input-required" name="voorbeeld-input-required" placeholder="lorem ipsum" type="text" required>
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
