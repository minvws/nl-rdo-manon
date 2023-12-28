<script context="module">
  export const breadcrumb = "Kleurselector volledig gevuld";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Kleurselector volledig gevuld</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Kleurselector volledig gevuld</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="color-input-filled-base">Selecteer de gewenste kleur</label>
          <input
            id="color-input-filled-base"
            name="color-input-filled-base"
            type="color"
            value="#ffffff"
          />

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="color-input-filled-base">Selecteer de gewenste kleur</label>
  <input id="color-input-filled-base" name="color-input-filled-base" type="color" value="#ffffff">

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="color-input-filled-div">Selecteer de gewenste kleur</label>
            <input
              id="color-input-filled-div"
              name="color-input-filled-div"
              type="color"
              value="#ffffff"
            />
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="color-input-filled-div">Selecteer de gewenste kleur</label>
    <input id="color-input-filled-div" name="color-input-filled-div" type="color" value="#ffffff">
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <label for="color-input-filled-section">Selecteer de gewenste kleur</label>
            <input
              id="color-input-filled-section"
              name="color-input-filled-section"
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
    <label for="color-input-filled-section">Selecteer de gewenste kleur</label>
    <input id="color-input-filled-section" name="color-input-filled-section" type="color" value="#ffffff">
  </section>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Kleurselector volledig gevuld voorbeeld</legend>
            <label for="color-input-filled-fieldset">Selecteer de gewenste kleur</label>
            <input
              id="color-input-filled-fieldset"
              name="color-input-filled-fieldset"
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
    <legend>Kleurselector volledig gevuld voorbeeld</legend>
    <label for="color-input-filled-fieldset">Selecteer de gewenste kleur</label>
    <input id="color-input-filled-fieldset" name="color-input-filled-fieldset" type="color" value="#ffffff">
  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
