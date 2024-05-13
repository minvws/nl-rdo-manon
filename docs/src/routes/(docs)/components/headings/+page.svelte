<script context="module">
  export const breadcrumb = "Titel";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Titel</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Titels</h1>
        <p>Gebruik titels om structuur binnen de pagina aan te geven.</p>

        <h2 class="heading-normal">Aandachtspunten:</h2>
        <ul>
          <li>Gebruik altijd een <code>h1</code> per pagina.*</li>
          <li>
            Kies altijd het juiste titel-element uit <code>h1</code> &gt; <code>h6</code> op basis van
            de structuur in de HTML. Niet op basis van de visuele weergave.
          </li>
          <li>
            HTML-elementen h1 &gt; h6 kunnen via de css voorzien worden van stijl. Voor meer
            informatie zie: <a href="#examples">voorbeelden</a>.
          </li>
          <li>
            Als niet ieder gelijkwaardig titel-element, bijvoorbeeld een h1, dezelfde visuele
            stijling gebruikt kan de stijl gezet worden door middel van een voorgedefineerde set.
            Binnen deze set worden de beschikbare "heading-styles" vastgelegd. Denk bijvoorbeeld aan
            een "heading-large" of een "heading-small". Voor meer informatie hierover zie: <a
              href="heading-base-set">Titel basisset</a
            >.
          </li>
        </ul>

        <i
          >* Eerder was het gebruik van meerdere <code>h1</code>'s per pagina toegestaan. Dit is
          gewijzigd in de HTML-specs van whatwg. Voor meer informatie hierover zie:
          <a href="https://github.com/whatwg/html/commit/6682bdeee6fb08f5972bea92064fe250f1b4ec9c"
            >de commit op whatwg</a
          >.</i
        >
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>
        <h3>Visueel voorbeeld:</h3>

        <div class="visual-example">
          <h1>Dit is een h1</h1>
          <h2>Dit is een h2</h2>
          <h3>Dit is een h3</h3>
          <h4>Dit is een h4</h4>
          <h5>Dit is een h5</h5>
          <h6>Dit is een h6</h6>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<h1>Dit is een h1</h1>
<h2>Dit is een h2</h2>
<h3>Dit is een h3</h3>
<h4>Dit is een h4</h4>
<h5>Dit is een h5</h5>
<h6>Dit is een h6</h6>`}
        />

        <h3 id="headings-variables">Design-keuzes instellen voor alle of meerdere titels</h3>
        <p>
          Een set aan algemene varibelen zijn toegevoegd. Deze kunnen gebruikt worden om op een plek
          een waarde in te vullen en die te gebruiken binnen verschillende titel-types. Bijvoorbeeld
          om alle titels hetzelfde lettertype of dezelfde <code>font-weight</code> mee te geven. Het
          gebruik van gedeelde variabelen helpt herhaling te voorkomen en daarmee de kans op fouten bij
          toekomstige wijzigingen.
        </p>

        <h4>CSS-voorbeeld instellen:</h4>
        <Code
          language="css"
          code={`
--headings-font-family: "Naam van gewenste lettertype";`}
        />

        <h4>CSS-voorbeeld gebruik:</h4>
        <p>
          In dit voorbeeld wordt de eerder ingestelde "--headings-font-family" waarde doorgevoerd
          binnen de beschikbare heading-types.
        </p>
        <Code
          language="css"
          code={`
--h1-font-family: var(--headings-font-family);
--h2-font-family: var(--headings-font-family);
--h3-font-family: var(--headings-font-family);
--h4-font-family: var(--headings-font-family);
--h5-font-family: var(--headings-font-family);
--h6-font-family: var(--headings-font-family);`}
        />

        <h3>Gebruik maken van een heading-set</h3>
        <p>
          Heading-sets kunnen gebruikt worden om op een centrale plek de stijlkeuzes vast te leggen
          voor de beschikbare titel-weergaven.
        </p>

        <p>Beschikbare styling sets voor headings zijn:</p>
        <ul>
          <li><a href="heading-base-set">Heading-basisset</a></li>
        </ul>

        <h4>CSS-voorbeeld instellen:</h4>
        <p>Gebruik de variabelen die beschikbaar zijn binnen de gekozen heading-set.</p>
        <p>
          Het onderstaande voorbeeld maakt gebruik van <code>@minvws/manon/headings-base-set</code>.
        </p>

        <p>
          Voor meer informatie en alle beschikbare variabelen binnen deze set zie: <a
            href="heading-base-set">Heading-basisset</a
          >.
        </p>
        <Code
          language="css"
          code={`
--heading-xxl-font-size: 2.5rem;
--heading-xl-font-size: 2rem;
--heading-large-font-size: 1.5rem;
--heading-normal-font-size: 1rem;
--heading-small-font-size: 0.8rem;
--heading-xs-font-size: 0.7rem;`}
        />

        <h4>CSS-voorbeeld gebruik:</h4>
        <p>
          In dit voorbeeld worden de eerder ingestelde "font-size"-waardes doorgevoerd binnen de
          beschikbare heading-types.
        </p>
        <Code
          language="css"
          code={`
--h1-font-family: var(--heading-xxl-font-size);
--h2-font-family: var(--heading-xl-font-size);
--h3-font-family: var(--heading-large-font-size);
--h4-font-family: var(--heading-normal-font-size);
--h5-font-family: var(--heading-small-font-size);
--h6-font-family: var(--heading-xs-font-size);`}
        />

        <section id="requirements">
          <h2>Bijbehorende bestanden</h2>
          <p>
            Voor meer informatie over importeren en instellen van componenten. Zie:
            <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
          </p>

          <h3>Importeer component via NPM</h3>

          <h4>SCSS-voorbeeld:</h4>
          <Code
            language="scss"
            code={`
/* Headings set */
@use "@minvws/manon/headings-base-set";

/* Headings */
@use "@minvws/manon/headings";`}
          />
        </section>

        <section id="variables">
          <h2>Aandachtspunten:</h2>
          <ul>
            <li>
              De standaard ingestelde waarden binnen Manon maken gebruik van de <code
                >headings-base-set</code
              >.
            </li>
            <li>
              De "headings"-variabelen zijn te gebruiken om een waarde in te stellen voor een of
              meerdere heading-types. Voor meer informatie zie: <a href="#headings-variables"
                >Design-keuzes instellen voor alle of meerdere titels</a
              >.
            </li>
          </ul>

          <h2>Instelbare variabelen</h2>
          <div class="horizontal-scroll">
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
                  <th rowspan="6" scope="rowgroup">headings</th>
                  <td>--headings-font-family</td>
                  <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                  <td>var(--application-base-font-family)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--headings-font-size</td>
                  <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                  <td>1.5rem</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--headings-font-weight</td>
                  <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                  <td>bold</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--headings-line-height</td>
                  <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                  <td>var(--application-base-line-height)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--headings-text-color</td>
                  <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                  <td>var(--application-base-text-color)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--headings-margin</td>
                  <td><a href="{base}/documentation/variables#margin">margin</a></td>
                  <td>1rem</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <th rowspan="6" scope="rowgroup">h1</th>
                  <td>--h1-font-family</td>
                  <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                  <td>var(--headings-font-family)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h1-font-size</td>
                  <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                  <td>var(--heading-xxl-font-size)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h1-font-weight</td>
                  <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                  <td>var(--heading-xxl-font-weight)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h1-line-height</td>
                  <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                  <td>var(--heading-xxl-line-height)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h1-text-color</td>
                  <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                  <td>var(--heading-xxl-text-color)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h1-margin</td>
                  <td><a href="{base}/documentation/variables#margin">margin</a></td>
                  <td>var(--heading-xxl-margin)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <th rowspan="6" scope="rowgroup">h2</th>
                  <td>--h2-font-family</td>
                  <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                  <td>var(--headings-font-family)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h2-font-size</td>
                  <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                  <td>var(--heading-xl-font-size)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h2-font-weight</td>
                  <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                  <td>var(--heading-xl-font-weight)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h2-line-height</td>
                  <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                  <td>var(--heading-xl-line-height)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h2-text-color</td>
                  <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                  <td>var(--heading-xl-text-color)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h2-margin</td>
                  <td><a href="{base}/documentation/variables#margin">margin</a></td>
                  <td>var(--heading-xl-margin)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <th rowspan="6" scope="rowgroup">h3</th>
                  <td>--h3-font-family</td>
                  <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                  <td>var(--headings-font-family)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h3-font-size</td>
                  <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                  <td>var(--heading-large-font-size)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h3-font-weight</td>
                  <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                  <td>var(--heading-large-font-weight)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h3-line-height</td>
                  <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                  <td>var(--heading-large-line-height)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h3-text-color</td>
                  <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                  <td>var(--heading-large-text-color)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h3-margin</td>
                  <td><a href="{base}/documentation/variables#margin">margin</a></td>
                  <td>var(--heading-large-margin)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <th rowspan="6" scope="rowgroup">h4</th>
                  <td>--h4-font-family</td>
                  <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                  <td>var(--headings-font-family)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h4-font-size</td>
                  <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                  <td>var(--heading-normal-font-size)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h4-font-weight</td>
                  <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                  <td>var(--heading-normal-font-weight)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h4-line-height</td>
                  <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                  <td>var(--heading-normal-line-height)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h4-text-color</td>
                  <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                  <td>var(--heading-normal-text-color)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h4-margin</td>
                  <td><a href="{base}/documentation/variables#margin">margin</a></td>
                  <td>var(--heading-normal-margin)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <th rowspan="6" scope="rowgroup">h5</th>
                  <td>--h5-font-family</td>
                  <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                  <td>var(--headings-font-family)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h5-font-size</td>
                  <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                  <td>var(--heading-small-font-size)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h5-font-weight</td>
                  <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                  <td>var(--heading-small-font-weight)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h5-line-height</td>
                  <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                  <td>var(--heading-small-line-height)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h5-text-color</td>
                  <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                  <td>var(--heading-small-text-color)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h5-margin</td>
                  <td><a href="{base}/documentation/variables#margin">margin</a></td>
                  <td>var(--heading-small-margin)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <th rowspan="6" scope="rowgroup">h6</th>
                  <td>--h6-font-family</td>
                  <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                  <td>var(--headings-font-family)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h6-font-size</td>
                  <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                  <td>var(--heading-xs-font-size)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h6-font-weight</td>
                  <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                  <td>var(--heading-xs-font-weight)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h6-line-height</td>
                  <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                  <td>var(--heading-xs-line-height)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h6-text-color</td>
                  <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                  <td>var(--heading-xs-text-color)</td>
                  <td>-</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--h6-margin</td>
                  <td><a href="{base}/documentation/variables#margin">margin</a></td>
                  <td>var(--heading-xs-margin)</td>
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

          <p>
            Om stijlkeuzes door te voeren op alle titels gebruik de onderstaande variabelen. Hierbij
            kan ook verwezen worden naar stijlkeuzes in heading-sets als deze toegevoegd zijn aan
            het project. Voor een voorbeeld zie: <a href="heading-base-set">heading-base-set</a>.
          </p>
          <Code
            language="css"
            code={`
:root {
  /* Available variables to use within all heading types */
  --headings-font-family: ;
  --headings-font-size: ;
  --headings-font-weight: ;
  --headings-line-height: ;
  --headings-text-color: ;
  --headings-margin: ;
}`}
          />

          <p>
            Om uitzonderingen toe te voegen op specifieke headings gebruik (een selectie van) de
            onderstaande variabelen.
          </p>
          <Code
            language="css"
            code={`
:root {
  /* h1 */
  --h1-font-family: ;
  --h1-font-size: ;
  --h1-font-weight: ;
  --h1-line-height: ;
  --h1-text-color: ;
  --h1-margin: ;

  /* h2 */
  --h2-font-family: ;
  --h2-font-size: ;
  --h2-text-color: ;
  --h2-font-weight: ;
  --h2-line-height: ;
  --h2-margin: ;

  /* h3 */
  --h3-font-family: ;
  --h3-font-size: ;
  --h3-text-color: ;
  --h3-font-weight: ;
  --h3-line-height: ;
  --h3-margin: ;

  /* h4 */
  --h4-font-family: ;
  --h4-font-size: ;
  --h4-text-color: ;
  --h4-font-weight: ;
  --h4-line-height: ;
  --h4-margin: ;

  /* h5 */
  --h5-font-family: ;
  --h5-font-size: ;
  --h5-text-color: ;
  --h5-font-weight: ;
  --h5-line-height: ;
  --h5-margin: ;

  /* h6 */
  --h6-font-family: ;
  --h6-font-size: ;
  --h6-text-color: ;
  --h6-font-weight: ;
  --h6-line-height: ;
  --h6-margin: ;
}`}
          />
        </section>

        <section id="related">
          <h2>Gerelateerde pagina's</h2>
          <a href="{base}/components/headings-test">Test- en voorbeelden-pagina</a>
        </section>
      </section>
    </div>
  </article>
</main>
