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
  <article>
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
          <label for="voorbeeld-date-base">Datum</label>
          <input id="voorbeeld-date-base" name="voorbeeld-date-base" type="date" />
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
<label for="voorbeeld-date-base">Datum</label>
<input id="voorbeeld-date-base" name="voorbeeld-date-base" type="date">
<button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="voorbeeld-date-div">Datum</label>
            <input id="voorbeeld-date-div" name="voorbeeld-date-div" type="date" />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
<div>
<label for="voorbeeld-date-div">Datum</label>
<input id="voorbeeld-date-div" name="voorbeeld-date-div" type="date">
</div>
<button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <label for="voorbeeld-date-section">Datum</label>
            <input id="voorbeeld-date-section" name="voorbeeld-date-section" type="date" />
          </section>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
<section>
<label for="voorbeeld-date-section">Datum</label>
<input id="voorbeeld-date-section" name="voorbeeld-date-section" type="date">
</section>
<button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Datumveld voorbeeld</legend>
            <label for="voorbeeld-date-fieldset">Datum</label>
            <input id="voorbeeld-date-fieldset" name="voorbeeld-date-fieldset" type="date" />
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
<fieldset>
<legend>Datumveld voorbeeld</legend>
<label for="voorbeeld-date-fieldset">Datum</label>
<input id="voorbeeld-date-fieldset" name="voorbeeld-date-fieldset" type="date">
</fieldset>
<button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
