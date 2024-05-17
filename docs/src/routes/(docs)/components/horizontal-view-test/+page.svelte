<script context="module">
  export const breadcrumb = "Horizontaal uitgelijnd testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Horizontaal uitgelijnd testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Horizontaal uitgelijnd testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>
        <h3>Horizontaal uitgelijnd</h3>
        <h4>Visueel voorbeeld:</h4>

        <div class="horizontal-view">
          <button class="ghost">Terug</button>
          <button>Verder</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-view">
  <button class="ghost">Terug</button>
  <button>Verder</button>
</div>
`}
        />

        <h4>HTML-structuur-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-view">
  <!-- horizontaal uit te lijnen content -->
</div>
`}
        />

        <h3>Object met horizontaal uitgelijnde elementen</h3>
        <h4>Visueel voorbeeld:</h4>

        <div class="horizontal-view-group" id="horizontal-view-group">
          <div>
            <button class="ghost">Terug</button>
            <button>Verder</button>
          </div>

          <div>
            <button class="ghost">Terug</button>
            <button>Verder</button>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-view-group">
  <div>
    <button class="ghost">Terug</button>
    <button>Verder</button>
  </div>

  <div>
    <button class="ghost">Terug</button>
    <button>Verder</button>
  </div>
</div>
`}
        />

        <h4>HTML-structuur-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-view-group" id="horizontal-view-group">
  <div>
      <!-- horizontaal uit te lijnen content -->
  </div>

  <div>
     <!-- horizontaal uit te lijnen content -->
  </div>
</div>
`}
        />

        <h3>Horizontaal uitgelijnd formulier</h3>
        <h4>Visueel voorbeeld:</h4>

        <form action="" method="post" class="horizontal-view">
          <div>
            <label for="form-example-horizontal">Voorbeeld text input</label>
            <input id="form-example-horizontal" name="form-example-horizontal" type="text" />
          </div>
          <div>
            <label for="form-example-horizontal-2">Voorbeeld text input</label>
            <input id="form-example-horizontal-2" name="form-example-horizontal-2" type="text" />
          </div>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view">
  <div>
    <label for="form-example-horizontal">Voorbeeld text input</label>
    <input id="form-example-horizontal" name="form-example-horizontal"type="text">
  </div>
  <div>
    <label for="form-example-horizontal-2">Voorbeeld text input</label>
    <input id="form-example-horizontal-2" name="form-example-horizontal-2" type="text">
  </div>
  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Horizontaal uitgelijnd formulier <code>fieldset</code></h3>
        <h4>Visueel voorbeeld:</h4>

        <form action="" method="post" class="horizontal-view">
          <fieldset>
            <legend>Lorem ipsum</legend>
            <div>
              <label for="form-example-horizontal-fieldset">Voorbeeld text input</label>
              <input
                id="form-example-horizontal-fieldset"
                name="form-example-horizontal-fieldset"
                type="text"
              />
            </div>
            <div>
              <label for="form-example-horizontal-fieldset-2">Voorbeeld text input</label>
              <input
                id="form-example-horizontal-fieldset-2"
                name="form-example-horizontal-fieldset-2"
                type="text"
              />
            </div>
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post" class="horizontal-view">
  <fieldset>
    <legend>Lorem ipsum</legend>
    <div>
      <label for="form-example-horizontal-fieldset">Voorbeeld text input</label>
      <input id="form-example-horizontal-fieldset" name="form-example-horizontal-fieldset" type="text">
    </div>
    <div>
      <label for="form-example-horizontal-fieldset-2">Voorbeeld text input</label>
      <input id="form-example-horizontal-fieldset-2" name="form-example-horizontal-fieldset-2" type="text">
    </div>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
`}
        />
      </section>
    </div>
  </article>
</main>
