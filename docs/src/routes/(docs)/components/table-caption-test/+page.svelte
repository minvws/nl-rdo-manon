<script context="module">
  export const breadcrumb = "Tabel bijschrift caption testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Tabel bijschrift caption testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Tabel bijschrift <code>caption</code> testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-scroll">
          <table>
            <caption> Basisvoorbeeld tabel: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Basisvoorbeeld tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
      </tr>
    </tbody>
  </table>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
