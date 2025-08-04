<script module>
  export const breadcrumb = "Bereik testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Bereik testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Bereik - <code>textarea</code> testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="range-example-base">Range</label>
          <input type="range" id="range-example-base" name="range-example-base" min="0" max="100" />
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="range-example-base">Range</label>
  <input type="range" id="range-example-base" name="range-example-base" min="0" max="100">
</form>
`}
        />

        <h3>Bereik gegroepeerd binnen <code>div</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="range-example-div">Range</label>
            <input type="range" id="range-example-div" name="range-example-div" min="0" max="100" />
          </div>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="range-example-div">Range</label>
    <input type="range" id="range-example-div" name="range-example-div" min="0" max="100">
  </div>
</form>
`}
        />

        <h3>Bereik gegroepeerd binnen <code>div</code> horizontaal uitgelijnd</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="horizontal-view">
            <label for="range-example-div-horizontal">Range</label>
            <input
              type="range"
              id="range-example-div-horizontal"
              name="range-example-div-horizontal"
              min="0"
              max="100"
            />
          </div>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="horizontal-view">
    <label for="range-example-div-horizontal">Range</label>
    <input type="range" id="range-example-div-horizontal" name="range-example-div-horizontal" min="0" max="100">
  </div>
</form>
`}
        />

        <h3>Bereik gegroepeerd binnen <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <label for="range-example-section">Range</label>
            <input
              type="range"
              id="range-example-section"
              name="range-example-section"
              min="0"
              max="100"
            />
          </section>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <section>
    <label for="range-example-section">Range</label>
    <input type="range" id="range-example-section" name="range-example-section" min="0" max="100">
  </section>
</form>
`}
        />

        <h3>Bereik gegroepeerd binnen <code>section</code> horizontaal uitgelijnd</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section class="horizontal-view">
            <label for="range-example-section-horizontal">Range</label>
            <input
              type="range"
              id="range-example-section-horizontal"
              name="range-example-section-horizontal"
              min="0"
              max="100"
            />
          </section>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <section class="horizontal-view">
    <label for="range-example-section-horizontal">Range</label>
    <input type="range" id="range-example-section-horizontal" name="range-example-section-horizontal" min="0" max="100">
  </section>
</form>
`}
        />

        <h3>Bereik gegroepeerd binnen <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>bereik-invoerveld binnen een fieldset voorbeeld</legend>
            <label for="range-example-fieldset">Range</label>
            <input
              type="range"
              id="range-example-fieldset"
              name="range-example-fieldset"
              min="0"
              max="100"
            />
          </fieldset>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset>
    <legend>bereik-invoerveld binnen een fieldset voorbeeld</legend>
    <label for="range-example-fieldset">Range</label>
    <input type="range" id="range-example-fieldset" name="range-example-fieldset" min="0" max="100">
  </fieldset>
</form>
`}
        />

        <h3>Bereik gegroepeerd binnen <code>fieldset</code> horizontaal uitgelijnd</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset class="horizontal-view">
            <legend>bereik-invoerveld binnen een fieldset voorbeeld</legend>
            <label for="range-example-fieldset-horizontal">Range</label>
            <input
              type="range"
              id="range-example-fieldset-horizontal"
              name="range-example-fieldset-horizontal"
              min="0"
              max="100"
            />
          </fieldset>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset class="horizontal-view">
    <legend>bereik-invoerveld binnen een fieldset voorbeeld</legend>
    <label for="range-example-fieldset-horizontal">Range</label>
    <input type="range" id="range-example-fieldset-horizontal" name="range-example-fieldset-horizontal" min="0" max="100">
  </fieldset>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
