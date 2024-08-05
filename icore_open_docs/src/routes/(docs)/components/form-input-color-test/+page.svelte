<script context="module">
  export const breadcrumb = "Datum";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Datum</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Datum</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="color-input-base">Selecteer de gewenste kleur</label>
          <input id="color-input-base" name="color-input-base" type="color" value="#ffffff" />

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="color-input-base">Selecteer de gewenste kleur</label>
  <input id="color-input-base" name="color-input-base" type="color" value="#ffffff">

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="color-input-div">Selecteer de gewenste kleur</label>
            <input id="color-input-div" name="color-input-div" type="color" value="#ffffff" />
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="color-input-div">Selecteer de gewenste kleur</label>
    <input id="color-input-div" name="color-input-div" type="color" value="#ffffff">
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <label for="color-input-section">Selecteer de gewenste kleur</label>
            <input
              id="color-input-section"
              name="color-input-section"
              type="color"
              value="#ffffff"
            />
          </section>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <section>
    <label for="color-input-section">Selecteer de gewenste kleur</label>
    <input id="color-input-section" name="color-input-section" type="color" value="#ffffff">
  </section>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Kleurselector invoerveld voorbeeld</legend>
            <label for="color-input-fieldset">Selecteer de gewenste kleur</label>
            <input
              id="color-input-fieldset"
              name="color-input-fieldset"
              type="color"
              value="#ffffff"
            />
          </fieldset>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset>
    <legend>Kleurselector invoerveld voorbeeld</legend>
    <label for="color-input-fieldset">Selecteer de gewenste kleur</label>
    <input id="color-input-fieldset" name="color-input-fieldset" type="color" value="#ffffff">
  </fieldset>

  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
