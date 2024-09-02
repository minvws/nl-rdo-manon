<script context="module">
  export const breadcrumb = "Samenvattingstabel";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Samenvattingstabel</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Benodigdheden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Samenvattingstabel</h1>
        <p>
          Geschikt voor het tonen van korte overzichten en samenvattingen bij complexe tabellen en
          documenten.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Benodigdheden</a>. Voor meer informatie over importeren en
            instellen van componenten. Zie:
            <a href="{base}/documentation/import-styling"
              >Componenten gebruiken en styling toevoegen</a
            >
          </li>
          <li>
            Voeg de class <code>summary</code> toe aan de <code>&lt;table&gt;</code> om gebruik te maken
            van deze tabelweergave.
          </li>
          <li>
            De tabel zal zo smal weergegeven worden met een rustigere grafische weergave.
            Stijlkeuzes kunnen overschreven worden binnen het variabelen bestand. Voor meer
            informatie zie:
            <a href="#requirements">Benodigdheden</a> en
            <a href="#variables">Instelbare variabelen</a>
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Tabel</h3>
        <h4>Visueel voorbeeld:</h4>
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

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<table class="summary">
  <caption>Samenvatting overzicht lorem ipsum:</caption>
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

        <h3>Horizontaal scrollbare tabel</h3>
        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Plaats de class <code>summary</code> op de omliggende <code>div</code>. Voorbeeld:
            <code>&lt;div class="horizontal-scroll summary"&gt;</code>.
          </li>
        </ul>
        <Code
          language="html"
          code={`
<div class="horizontal-scroll summary">
  <table>
    <caption>Samenvatting overzicht lorem ipsum:</caption>
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

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/table";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p class="system-notification" role="group" aria-label="systeembericht">
          Dit component heeft momenteel geen instelbare variabelen
        </p>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/table-summary-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
