<script context="module">
  export const breadcrumb = "Spot large";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Spot large</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Spot large</h1>
        <p>Kleurenset met twee hoofdkleuren en een accentkleur.</p>

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
                Vul de variabelen met de gewenste kleuren. Voor meer informatie zie het overzicht
                met <a href="#variables">instelbare variabelen</a>.
              </li>
              <li>
                Pas de kleuren toe waar nodig. De kleuren kunnen op twee manieren toegepast worden.
                Door middel van variabelen binnen de CSS of door middel van classes binnen de HTML.
                Maak gebruik van de CSS-variabelen waar mogelijk en voeg alleen de classes toe in de
                HTML voor uitzonderingen om de code aanpasbaar en overzichtelijk te houden. Voor
                meer informatie hierover zie <a href="{base}/use-css-variable"
                  >CSS-variabelen gebruiken</a
                >.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Kleurenset voorbeeld</h3>
        <h4>Visueel voorbeeld:</h4>
        <ul class="branding">
          <li><span class="branding-color-1">branding-color-1</span></li>
          <li><span class="branding-color-2">branding-color-2</span></li>
          <li><span class="branding-color-accent-1">branding-color-accent-1</span></li>
          <li><span class="branding-color-accent-2">branding-color-accent-2</span></li>
          <li><span class="branding-color-accent-3">branding-color-accent-3</span></li>
          <li><span class="branding-color-accent-4">branding-color-accent-4</span></li>
          <li><span class="branding-color-accent-5">branding-color-accent-5</span></li>
        </ul>

        <h4>CSS-voorbeeld</h4>
        <Code
          language="css"
          code={`
:root {
  /* Branding color 1 */
  --branding-color-1-background-color: LightSalmon;
  --branding-color-1-text-color: black;

  /* Branding color 2 */
  --branding-color-2-background-color: SeaShell;
  --branding-color-2-text-color: black;

  /* Accent color 1 */
  --branding-color-accent-1-background-color: LightSeaGreen;
  --branding-color-accent-1-text-color: white;

  /* Accent color 2 */
  --branding-color-accent-2-background-color: MediumVioletRed;
  --branding-color-accent-2-text-color: white;

  /* Accent color 3 */
  --branding-color-accent-3-background-color: SlateBlue;
  --branding-color-accent-3-text-color: white;

  /* Accent color 4 */
  --branding-color-accent-4-background-color: Purple;
  --branding-color-accent-4-text-color: white;

  /* Accent color 5 */
  --branding-color-accent-5-background-color: OliveDrab;
  --branding-color-accent-5-text-color: white;
}
`}
        />

        <h3>Variabele gebruiken binnen een andere variabele</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
:root {
  --button-base-background-color: var(--branding-color-accent-background-color);
}
`}
        />
        <p>
          Voor meer informatie hierover zie <a href="{base}/use-css-variable"
            >CSS-variabelen gebruiken</a
          >.
        </p>

        <h3>Variabele gebruiken binnen de html op een specifiek element</h3>
        <p class="warning">
          <span>Waarschuwing:</span> Waar mogelijk is het altijd aan te raden zo min mogelijk classes
          te gebruiken maar om gebruik te maken van het overerven van CSS. Maar omdat een uitzondering
          soms nodig is, is het mogelijk om de huistijlkleuren ook direct in de html te kunnen definiëren
          door middel van een classes.
        </p>
        <p>
          De knoppen binnen het "button-base"-bestand maken gebruik van de accentkleur als deze
          binnen het "application-base"-bestand gedefinieerd staat. Voor meer informatie zie <a
            href="{base}/use-css-variable">CSS-variabelen gebruiken</a
          >.
        </p>

        <h4>Visueel voorbeeld:</h4>
        <div class="branding-color-1">
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="branding-color-1">
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet.</p>
</div>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>
        <h3>Import scss-file</h3>
        <Code
          language="html"
          code={`
@import spot-large;
`}
        />

        <h3>Import via npm-package</h3>
        <Code
          language="html"
          code={`
@use "@minvws/manon/spot-large";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Instelbare variabelen tabel:</caption>
            <thead>
              <tr>
                <th scope="col">Naam</th>
                <th scope="col">Variabele</th>
                <th scope="col">CSS-attribuut</th>
                <th scope="col">Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="8" scope="rowgroup">branding-color-1</th>
                <td>--branding-color-1</td>
                <td><a href="{base}/variables#color-code">color-code</a></td>
                <td rowspan="8" scope="rowgroup">branding-color-1</td>
              </tr>

              <tr>
                <td>--branding-color-1-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
              </tr>

              <tr>
                <td>--branding-color-1-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-1-link-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-1-link-active-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-1-link-visited-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-1-link-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-1-link-visited-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <th rowspan="8" scope="rowgroup">branding-color-2</th>
                <td>--branding-color-2</td>
                <td><a href="{base}/variables#color-code">color-code</a></td>
                <td rowspan="8" scope="rowgroup">branding-color-2</td>
              </tr>

              <tr>
                <td>--branding-color-2-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
              </tr>

              <tr>
                <td>--branding-color-2-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-2-link-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-2-link-active-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-2-link-visited-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-2-link-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-2-link-visited-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <th rowspan="8" scope="rowgroup">branding-color-accent-1</th>
                <td>--branding-color-accent-1</td>
                <td><a href="{base}/variables#color-code">color-code</a></td>
                <td rowspan="8" scope="rowgroup">branding-color-accent-1</td>
              </tr>

              <tr>
                <td>--branding-color-accent-1-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-1-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-1-link-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-1-link-active-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-1-link-visited-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-1-link-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-1-link-visited-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <th rowspan="8" scope="rowgroup">branding-color-accent-2</th>
                <td>--branding-color-accent-2</td>
                <td><a href="{base}/variables#color-code">color-code</a></td>
                <td rowspan="8" scope="rowgroup">branding-color-accent-2</td>
              </tr>

              <tr>
                <td>--branding-color-accent-2-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-2-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-2-link-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-2-link-active-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-2-link-visited-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-2-link-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-2-link-visited-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <th rowspan="8" scope="rowgroup">branding-color-accent-3</th>
                <td>--branding-color-accent-3</td>
                <td><a href="{base}/variables#color-code">color-code</a></td>
                <td rowspan="8" scope="rowgroup">branding-color-accent-3</td>
              </tr>

              <tr>
                <td>--branding-color-accent-3-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-3-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-3-link-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-3-link-active-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-3-link-visited-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-3-link-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-3-link-visited-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <th rowspan="8" scope="rowgroup">branding-color-accent-4</th>
                <td>--branding-color-accent-4</td>
                <td><a href="{base}/variables#color-code">color-code</a></td>
                <td rowspan="8" scope="rowgroup">branding-color-accent-4</td>
              </tr>

              <tr>
                <td>--branding-color-accent-4-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-4-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-4-link-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-4-link-active-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-4-link-visited-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-4-link-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-4-link-visited-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <th rowspan="8" scope="rowgroup">branding-color-accent-5</th>
                <td>--branding-color-accent-5</td>
                <td><a href="{base}/variables#color-code">color-code</a></td>
                <td rowspan="8" scope="rowgroup">branding-color-accent-5</td>
              </tr>

              <tr>
                <td>--branding-color-accent-5-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-5-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-5-link-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-5-link-active-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-5-link-visited-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-5-link-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>

              <tr>
                <td>--branding-color-accent-5-link-visited-hover-text-color</td>
                <td><a href="{base}/variables#text-color">color</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </article>
</main>
