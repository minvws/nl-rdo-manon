<script context="module">
  export const breadcrumb = "Tabel numerieke data testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Tabel numerieke data testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Tabel numerieke data testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met numerieke data: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading</th>
                <th scope="col" class="number">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem ipsum</td>
                <td class="number">52,12</td>
              </tr>
              <tr>
                <td>Lorem ipsum</td>
                <td class="number">110,00</td>
              </tr>
              <tr>
                <td>Lorem ipsum</td>
                <td class="number">2,00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totaal</td>
                <td class="number">164,12</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Tabelvoorbeeld met selectievak:</caption>
    <thead>
      <tr>
        <th scope="col"><input type="checkbox"></th>
        <th scope="col">Table header heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox"></td>
        <td>Ipsum</td>
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
