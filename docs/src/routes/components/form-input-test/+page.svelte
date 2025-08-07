<script module>
  export const breadcrumb = "Invoerveld testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Invoerveld testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Invoerveld testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Input direct binnen <code>form</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="voorbeeld-invoerveld-direct">Voorbeeld invoerveld</label>
          <input id="voorbeeld-invoerveld-direct" name="voorbeeld-invoerveld-direct" type="text" />
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="voorbeeld-invoerveld-direct">Voorbeeld invoerveld</label>
  <input
    id="voorbeeld-invoerveld-direct"
    name="voorbeeld-invoerveld-direct"
    type="text"
  />
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="voorbeeld-invoerveld-div">Voorbeeld invoerveld</label>
            <input id="voorbeeld-invoerveld-div" name="voorbeeld-invoerveld-div" type="text" />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="voorbeeld-invoerveld-div">Voorbeeld invoerveld</label>
    <input
      id="voorbeeld-invoerveld-div"
      name="voorbeeld-invoerveld-div"
      type="text"
    />
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <label for="voorbeeld-invoerveld-section">Voorbeeld invoerveld</label>
            <input
              id="voorbeeld-invoerveld-section"
              name="voorbeeld-invoerveld-section"
              type="text"
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
    <label for="voorbeeld-invoerveld-section">Voorbeeld invoerveld</label>
    <input
      id="voorbeeld-invoerveld-section"
      name="voorbeeld-invoerveld-section"
      type="text"
    />
  </section>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Input en label gegroepeerd binnen een <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Invoerveld test</legend>
            <label for="voorbeeld-invoerveld-fieldset">Voorbeeld invoerveld</label>
            <input
              id="voorbeeld-invoerveld-fieldset"
              name="voorbeeld-invoerveld-fieldset"
              type="text"
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
    <legend>Invoerveld test</legend>
    <label for="voorbeeld-invoerveld-fieldset">Voorbeeld invoerveld</label>
    <input
      id="voorbeeld-invoerveld-fieldset"
      name="voorbeeld-invoerveld-fieldset"
      type="text"
    />
  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
