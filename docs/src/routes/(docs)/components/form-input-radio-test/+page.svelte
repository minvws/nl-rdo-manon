<script module>
  export const breadcrumb = "Radio-selecteerknop testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Radio-selecteerknop testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Radio-selecteerknop - <code>textarea</code> testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div class="radio">
            <input type="radio" id="radio-example-base" name="standaard-radio" />
            <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
          </div>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-example-base" name="standaard-radio">
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
`}
        />

        <h3>Radioselecteerknop gegroepeerd binnen <code>section</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <section>
            <div class="radio">
              <input type="radio" id="radio-example-section" name="standaard-radio" />
              <label for="radio-example-section">Lorem ipsum dolor sit amet</label>
            </div>
          </section>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <section>
    <div class="radio">
      <input type="radio" id="radio-example-section" name="standaard-radio">
      <label for="radio-example-section">Lorem ipsum dolor sit amet</label>
    </div>
  </section>
</form>
`}
        />

        <h3>Radioselecteerknop gegroepeerd binnen <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Radioselecteerknop binnen een fieldset voorbeeld</legend>
            <div class="radio">
              <input type="radio" id="radio-example-fieldset" name="standaard-radio" />
              <label for="radio-example-fieldset">Lorem ipsum dolor sit amet</label>
            </div>
          </fieldset>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset>
    <legend>Radioselecteerknop binnen een fieldset voorbeeld</legend>
    <div class="radio">
      <input type="radio" id="radio-example-fieldset" name="standaard-radio">
      <label for="radio-example-fieldset">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
