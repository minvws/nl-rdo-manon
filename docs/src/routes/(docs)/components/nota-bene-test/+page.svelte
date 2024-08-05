<script context="module">
  export const breadcrumb = "Nota bene testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Nota bene testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Nota bene testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3>Nota bene op een paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <p class="nota-bene">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p class="nota-bene">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
`}
        />

        <h3>Nota bene binnen <code>form</code></h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="nota-bene-input">Ipsum</label>
            <div>
              <span class="nota-bene">Dit veld is verplicht</span>
              <input id="nota-bene-input" name="nota-bene-input" type="text" />
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
    <label for="nota-bene-input">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input
        id="nota-bene-input"
        name="nota-bene-input"
        type="text"
      />
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
