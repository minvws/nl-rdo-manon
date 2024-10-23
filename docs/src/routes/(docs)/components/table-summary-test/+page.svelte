<script module>
  export const breadcrumb = "Samenvattingstabel testpagina";
</script>

<script lang="ts">
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Samenvattingstabel testpagina</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Samenvattingstabel testpagina</h1>
        <p>Overzicht van het element in mogelijke structuren om te testen.</p>
      </section>

      <section id="tests">
        <h2>Tests</h2>

        <h3>Visueel voorbeeld:</h3>
        <table class="summary">
          <caption> Samenvatting overzicht lorem ipsum: </caption>
          <thead>
            <tr>
              <th scope="col">Risicolevel</th>
              <th scope="col">Hoeveelheid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="critical">Critical</span></td>
              <td class="number">1</td>
            </tr>

            <tr>
              <td><span class="high">Hoog</span></td>
              <td class="number">1</td>
            </tr>

            <tr>
              <td><span class="medium">Gemiddeld</span></td>
              <td class="number">3</td>
            </tr>

            <tr>
              <td><span class="low">Laag</span></td>
              <td class="number">6</td>
            </tr>

            <tr>
              <td><span class="recommendation">Aanbeveling</span></td>
              <td class="number">10</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totaal</td>
              <td class="number">21</td>
            </tr>
          </tfoot>
        </table>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<table class="summary">
  <caption>
    Samenvatting overzicht lorem ipsum:
  </caption>
  <thead>
    <tr>
      <th scope="col">Risicolevel</th>
      <th scope="col">Hoeveelheid</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="critical">Critical</span></td>
      <td class="number">1</td>
    </tr>

    <tr>
      <td><span class="high">Hoog</span></td>
      <td class="number">1</td>
    </tr>

    <tr>
      <td><span class="medium">Gemiddeld</span></td>
      <td class="number">3</td>
    </tr>

    <tr>
      <td><span class="low">Laag</span></td>
      <td class="number">6</td>
    </tr>

    <tr>
      <td><span class="recommendation">Aanbeveling</span></td>
      <td class="number">10</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Totaal</td>
      <td class="number">21</td>
    </tr>
  </tfoot>
</table>
`}
        />

        <div class="horizontal-scroll summary">
          <table>
            <caption> Samenvatting overzicht lorem ipsum: </caption>
            <thead>
              <tr>
                <th scope="col">Risicolevel</th>
                <th scope="col">Hoeveelheid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="critical">Critical</span></td>
                <td class="number">1</td>
              </tr>

              <tr>
                <td><span class="high">Hoog</span></td>
                <td class="number">1</td>
              </tr>

              <tr>
                <td><span class="medium">Gemiddeld</span></td>
                <td class="number">3</td>
              </tr>

              <tr>
                <td><span class="low">Laag</span></td>
                <td class="number">6</td>
              </tr>

              <tr>
                <td><span class="recommendation">Aanbeveling</span></td>
                <td class="number">10</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totaal</td>
                <td class="number">21</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll summary">
  <table>
    <caption>
      Samenvatting overzicht lorem ipsum:
    </caption>
    <thead>
      <tr>
        <th scope="col">Risicolevel</th>
        <th scope="col">Hoeveelheid</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="critical">Critical</span></td>
        <td class="number">1</td>
      </tr>

      <tr>
        <td><span class="high">Hoog</span></td>
        <td class="number">1</td>
      </tr>

      <tr>
        <td><span class="medium">Gemiddeld</span></td>
        <td class="number">3</td>
      </tr>

      <tr>
        <td><span class="low">Laag</span></td>
        <td class="number">6</td>
      </tr>

      <tr>
        <td><span class="recommendation">Aanbeveling</span></td>
        <td class="number">10</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Totaal</td>
        <td class="number">21</td>
      </tr>
    </tfoot>
  </table>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
