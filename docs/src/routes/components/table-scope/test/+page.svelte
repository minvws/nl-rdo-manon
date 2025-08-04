<script module>
  export const breadcrumb = "Tabelrichting testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Tabelrichting testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Tabelrichting testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3>Visueel voorbeeld:</h3>
        <div class="horizontal-scroll">
          <table>
            <caption> Tabelvoorbeeld met aangegeven scope: </caption>
            <thead>
              <tr>
                <th scope="col">Naam</th>
                <th scope="col">Diersoort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Manon</th>
                <td>Kat</td>
              </tr>
              <tr>
                <th scope="row">Max</th>
                <td>Hond</td>
              </tr>
              <tr>
                <th scope="row">Keiko</th>
                <td>Kat</td>
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
    <caption>Tabelvoorbeeld met aangegeven scope:</caption>
    <thead>
      <tr>
        <th scope="col">Naam</th>
        <th scope="col">Diersoort</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Manon</th>
        <td>Kat</td>
      </tr>
      <tr>
        <th scope="row">Max</th>
        <td>Hond</td>
      </tr>
      <tr>
        <th scope="row">Keiko</th>
        <td>Kat</td>
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
