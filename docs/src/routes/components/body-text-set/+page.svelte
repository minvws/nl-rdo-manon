<script module>
  export const breadcrumb = "Body text set";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Body text set</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Body text set</h1>
        <p>Set voor het instellen van de stijlkeuzes voor de hoofdtekst.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project.
            <ul>
              <li>
                Voor een overzicht van de benodigde en optionele bestanden zie: <a
                  href="#requirements">Bijbehorende bestanden</a
                >.
              </li>
              <li>
                Vul de variabelen met de gewenste weergaven. Voor meer informatie zie het overzicht
                met <a href="#variables">instelbare variabelen</a>.
              </li>
              <li>
                Pas de stijlkeuzes toe waar nodig. De stijlkeuzes kunnen door middel van variabelen
                binnen de CSS toegepast worden. Voor meer informatie hierover zie <a
                  href="{base}/documentation/use-css-variable">CSS-variabelen gebruiken</a
                >.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Paragraaf</h3>
        <h4>Visuele weergave</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit euismod
          consectetur. Praesent est diam, ultricies ut lacus nec, molestie commodo arcu. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit euismod consectetur. Praesent est diam, ultricies ut lacus nec, molestie commodo arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
`}
        />

        <h3>Paragraaf benadrukte weergave</h3>
        <h4>Visuele weergave</h4>
        <p class="emphasized">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit euismod
          consectetur. Praesent est diam, ultricies ut lacus nec, molestie commodo arcu. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<p class="emphasized>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit euismod consectetur. Praesent est diam, ultricies ut lacus nec, molestie commodo arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
`}
        />

        <h3>Paragraaf subtielere weergave</h3>
        <h4>Visuele weergave</h4>
        <p class="de-emphasized">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit euismod
          consectetur. Praesent est diam, ultricies ut lacus nec, molestie commodo arcu. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<p class="de-emphasized>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit euismod consectetur. Praesent est diam, ultricies ut lacus nec, molestie commodo arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
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
@use "@minvws/manon/body-text-set";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>

        <h3>Variabelen om te gebruiken binnen onderliggende types</h3>
        <div class="horizontal-scroll nowrap">
          <table>
            <caption>Instelbare variabelen tabel:</caption>
            <thead>
              <tr>
                <th scope="col">Variabele</th>
                <th scope="col">CSS-attribuut</th>
                <th scope="col">Manon ingestelde waarde</th>
                <th scope="col">Breekpunt</th>
                <th scope="col">Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>--text-set-font-family</td>
                <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                <td
                  >-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Roboto Sans", "Noto
                  Sans", sans-serif</td
                >
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--text-set-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>1.25rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--text-set-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>normal</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--text-set-strong-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>bold</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--text-set-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>1.5</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--text-set-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>#000</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--text-set-text-align</td>
                <td><a href="{base}/documentation/variables#text-align">text-align</a></td>
                <td>left</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <h3>Beschikbare variabelen per type</h3>
          <table>
            <caption>Instelbare variabelen tabel:</caption>
            <thead>
              <tr>
                <th scope="col">Naam</th>
                <th scope="col">Variabele</th>
                <th scope="col">CSS-attribuut</th>
                <th scope="col">Manon ingestelde waarde</th>
                <th scope="col">Breekpunt</th>
                <th scope="col">Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="5" scope="rowgroup">body text small</th>
                <td>--body-text-small-set-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>0.8rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--body-text-small-set-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--text-set-font-weight)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--body-text-small-set-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>var(--text-set-line-height)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--body-text-small-set-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>#696969</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--text-set-small-text-align</td>
                <td><a href="{base}/documentation/variables#text-align">text-align</a></td>
                <td>var(--text-set-text-align)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="5" scope="rowgroup">body text medium</th>
                <td>--body-text-medium-set-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>0.8rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--body-text-medium-set-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--text-set-font-weight)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--body-text-medium-set-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>var(--text-set-line-height)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--body-text-medium-set-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>#696969</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--text-set-medium-text-align</td>
                <td><a href="{base}/documentation/variables#text-align">text-align</a></td>
                <td>var(--text-set-text-align)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="5" scope="rowgroup">body text large</th>
                <td>--body-text-large-set-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>0.8rem</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--body-text-large-set-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--text-set-font-weight)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--body-text-large-set-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>var(--text-set-line-height)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--body-text-large-set-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>#696969</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--text-set-large-text-align</td>
                <td><a href="{base}/documentation/variables#text-align">text-align</a></td>
                <td>var(--text-set-text-align)</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>CSS</h3>
        <p>
          Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van jouw
          project. Kies en gebruik de benodigde variabelen.
        </p>
        <Code
          language="css"
          code={`
:root {
  /* Available variables to use within all text types */
  --text-set-font-family: ;
  --text-set-font-size: ;
  --text-set-font-weight: ;
  --text-set-strong-font-weight: ;
  --text-set-line-height: ;
  --text-set-text-color: ;
  --text-set-text-align: ;

  /* Body text small */
  --body-text-small-font-size: ;
  --body-text-small-font-weight: ;
  --body-text-small-line-height: ;
  --body-text-small-color: ;
  --body-text-small-text-align: ;

  /* Strong */
  --body-text-small-strong-font-weight: ;

  /* Body text medium */
  --body-text-medium-font-size: ;
  --body-text-medium-font-weight: ;
  --body-text-medium-line-height: ;
  --body-text-medium-color: ;
  --body-text-medium-text-align: ;

  /* Strong */
  --body-text-medium-strong-font-weight: ;

  /* Body text large */
  --body-text-large-font-size: ;
  --body-text-large-font-weight: ;
  --body-text-large-line-height: ;
  --body-text-large-color: ;
  --body-text-large-text-align: ;

  /* Strong */
  --body-text-large-strong-font-weight: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
