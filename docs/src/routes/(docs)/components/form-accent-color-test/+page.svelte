<script context="module">
  export const breadcrumb = "Accentkleur op formulierelementen testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Accentkleur op formulierelementen testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Accentkleur op formulierelementen testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" checked />
            <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" checked>
    <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
`}
        />

        <h4>Radioselectieknop - <code>radio</code></h4>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <input type="radio" id="radio-example-base" name="standaard-radio" checked />
            <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-base" name="standaard-radio" checked>
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
`}
        />

        <h4>Voortgangsbalk</h4>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="horizontal-view">
            <label
              for="progress-example"
              role="progressbar"
              aria-busy="true"
              aria-labelledby="progess-example">Progress:</label
            >
            <progress id="progress-example" value="42" max="100">42%</progress>
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="horizontal-view">
    <label for="progress-example" role="progressbar" aria-busy="true" aria-labelledby="progess-example">Progress:</label>
    <progress id="progress-example" value="42" max="100">42%</progress>
  </div>
</form>
`}
        />

        <h4>Bereik - <code>range</code></h4>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="horizontal-view">
            <label for="range-example">Range</label>
            <input type="range" id="range-example" name="range-example" min="0" max="100" />
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="horizontal-view">
    <label for="range-example">Range</label>
    <input type="range" id="range-example" name="range-example" min="0" max="100">
  </div>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
