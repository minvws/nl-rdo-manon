<script context="module">
  export const breadcrumb = "Tekstveld testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Tekstveld testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Tekstveld - <code>textarea</code> testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="voorbeeld-tekstveld-base">Bericht</label>
          <textarea
            id="voorbeeld-tekstveld-base"
            name="voorbeeld-tekstveld-base"
            placeholder="Jouw vraag of opmerking"
            rows="5"
          ></textarea>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="voorbeeld-tekstveld-base">Bericht</label>
  <textarea id="voorbeeld-tekstveld-base" name="voorbeeld-tekstveld-base" placeholder="Jouw vraag of opmerking"></textarea>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Tekstveld gegroepeerd binnen <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="voorbeeld-tekstveld-div">Bericht</label>
            <textarea
              id="voorbeeld-tekstveld-div"
              name="voorbeeld-tekstveld-div"
              placeholder="Jouw vraag of opmerking"
              rows="5"
            ></textarea>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="voorbeeld-tekstveld-div">Bericht</label>
    <textarea id="voorbeeld-tekstveld-div" name="voorbeeld-tekstveld-1" placeholder="Jouw vraag of opmerking"></textarea>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Tekstveld gegroepeerd binnen <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <label for="voorbeeld-tekstveld-section">Bericht</label>
            <textarea
              id="voorbeeld-tekstveld-section"
              name="voorbeeld-tekstveld-section"
              placeholder="Jouw vraag of opmerking"
              rows="5"
            ></textarea>
          </section>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <section>
    <label for="voorbeeld-tekstveld-section">Bericht</label>
    <textarea id="voorbeeld-tekstveld-section" name="voorbeeld-tekstveld-section" placeholder="Jouw vraag of opmerking"></textarea>
  </section>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Tekstveld gegroepeerd binnen <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Tekstveld binnen een fieldset voorbeeld</legend>
            <label for="voorbeeld-tekstveld-fieldset">Bericht</label>
            <textarea
              id="voorbeeld-tekstveld-fieldset"
              name="voorbeeld-tekstveld-fieldset"
              placeholder="Jouw vraag of opmerking"
              rows="5"
            ></textarea>
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset>
    <legend>Tekstveld binnen een fieldset voorbeeld</legend>
    <label for="voorbeeld-tekstveld-fieldset">Bericht</label>
    <textarea id="voorbeeld-tekstveld-fieldset" name="voorbeeld-tekstveld-fieldset" placeholder="Jouw vraag of opmerking"></textarea>
  </fieldset>

  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
