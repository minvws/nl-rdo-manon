<script module>
  export const breadcrumb = "Maximale regellengte";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Maximale regellengte</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#variables">Instelbare variabelen</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Maximale regellengte</h1>
        <p>
          Een maximale regellengte voor leesbaarheid. Dit wordt vaak aangeraden voor
          gebruiksvriendelijkheid en toegankelijkheid.
        </p>
        <p>
          <a href="https://www.w3.org/TR/WCAG21/#visual-presentation" rel="external">w3.org</a>
          adviseert een maximale regellengte van 80 karakters. Dit vertaalt zich tot ongeveer 40rem.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Visueel voorbeeld:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis odio lorem, sit
          amet elementum lectus interdum id. Cras in lectus id diam dignissim dignissim vel eu
          turpis. Sed diam ante.
        </p>

        <h3>HTML-voorbeeld:</h3>
        <p>
          Er is geen aangepaste HTML nodig om gebruik te maken van dit component zodra de styling is
          toegevoegd aan het project. De styling heeft invloed op de volgende elementen:
          <code>p</code> <code>a</code> <code>span</code> <code>li</code>
        </p>
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
@use "@minvws/manon/max-line-length";
      `}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Instelbare css-variabelen tabel:</caption>
            <thead>
              <tr>
                <th scope="col">Naam</th>
                <th scope="col">Breekpunt</th>
                <th scope="col">Variabele</th>
                <th scope="col">CSS-attribuut</th>
                <th scope="col">Class</th>
                <th scope="col">Manon ingestelde waarde</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">max-width</th>
                <td>-</td>
                <td>--max-line-length-max-width</td>
                <td><a href="{base}/documentation/variables#max-width">max-width</a></td>
                <td>-</td>
                <td>40rem</td>
              </tr>

              <tr>
                <th rowspan="2" scope="rowgroup">hyphens</th>
                <td>Voor breekpunt</td>
                <td>--max-line-length-hyphens</td>
                <td rowspan="2"><a href="{base}/documentation/variables#hyphens">hyphens</a></td>
                <td rowspan="2">-</td>
                <td>auto</td>
              </tr>

              <tr>
                <td>Na breekpunt</td>
                <td>--max-line-length-breakpoint-hyphens</td>
                <td>none</td>
              </tr>

              <tr>
                <th rowspan="2" scope="rowgroup">word-break</th>
                <td>Voor breekpunt</td>
                <td>--max-line-length-word-break</td>
                <td rowspan="2"
                  ><a href="{base}/documentation/variables#word-break">word-break</a></td
                >
                <td rowspan="2">-</td>
                <td>normal</td>
              </tr>

              <tr>
                <td>Na breekpunt</td>
                <td>--max-line-length-breakpoint-word-break</td>
                <td>var(--max-line-length-word-break, normal)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Instelbare sass-variabelen tabel:</caption>
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Manon ingestelde waarde</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Breekpunt</td>
                <td>24rem !default</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </article>
</main>
