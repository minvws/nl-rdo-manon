<script context="module">
  export const breadcrumb = "Meldingen op tabel-elementen testpagina";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Meldingen op tabel-elementen testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Meldingen op tabel-elementen testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld meldingen: </caption>
            <thead>
              <tr>
                <th scope="col">Table header heading 1</th>
                <th scope="col">Table header heading 2</th>
                <th scope="col">Table header heading 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="error">Foutmelding op tabelrij</td>
                <td class="error">Foutmelding op tabelrij</td>
                <td class="error">Foutmelding op tabelrij</td>
              </tr>
              <tr>
                <td class="warning">Waarschuwing op tabelrij</td>
                <td class="warning">Waarschuwing op tabelrij</td>
                <td class="warning">Waarschuwing op tabelrij</td>
              </tr>
              <tr>
                <td class="confirmation">Bevestiging op tabelrij</td>
                <td class="confirmation">Bevestiging op tabelrij</td>
                <td class="confirmation">Bevestiging op tabelrij</td>
              </tr>
              <tr>
                <td class="explanation">Toelichting op tabelrij</td>
                <td class="explanation">Toelichting op tabelrij</td>
                <td class="explanation">Toelichting op tabelrij</td>
              </tr>
              <tr>
                <td class="primary">Primair op tabelrij</td>
                <td class="primary">Primair op tabelrij</td>
                <td class="primary">Primair op tabelrij</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>class</code> op individuele knoppen</h4>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll">
  <table>
    <caption>Tabelvoorbeeld meldingen:</caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="error">Foutmelding op tabelrij</td>
        <td class="error">Foutmelding op tabelrij</td>
        <td class="error">Foutmelding op tabelrij</td>
      </tr>
      <tr>
        <td class="warning">Waarschuwing op tabelrij</td>
        <td class="warning">Waarschuwing op tabelrij</td>
        <td class="warning">Waarschuwing op tabelrij</td>
      </tr>
      <tr>
        <td class="confirmation">Bevestiging op tabelrij</td>
        <td class="confirmation">Bevestiging op tabelrij</td>
        <td class="confirmation">Bevestiging op tabelrij</td>
      </tr>
      <tr>
        <td class="explanation">Toelichting op tabelrij</td>
        <td class="explanation">Toelichting op tabelrij</td>
        <td class="explanation">Toelichting op tabelrij</td>
      </tr>
      <tr>
        <td class="primary">Primair op tabelrij</td>
        <td class="primary">Primair op tabelrij</td>
        <td class="primary">Primair op tabelrij</td>
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
