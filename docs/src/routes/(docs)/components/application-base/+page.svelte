<script context="module">
  export const breadcrumb = "Stijlkeuzes op applicatie-niveau";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Stijlkeuzes op applicatie-niveau</title>
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
        <h1>Stijlkeuzes op applicatie-niveau</h1>
        <p>
          Een eigen visuele weergave voor de applicatie die aansluit bij de huisstijl. CSS maakt
          gebruik van een "cascading"-principe. Dit betekent dat je op een plek stijlkeuzes vast
          kunt leggen en dat alle onderliggende elementen deze stijlkeuzes kunnen overerven.
        </p>

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
                Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het
                overzicht met <a href="#variables">instelbare variabelen</a>.
              </li>
              <li>
                Waar mogelijk zullen elementen gebruik maken van deze variabelen. Gebruik de
                variabelen of de classes om de kleuren toe te passen waar nodig.
              </li>
            </ul>
          </li>
        </ol>

        <p class="explanation">
          <span>Tip:</span> Vaak is het mogelijk om keuzes op een hoog niveau te definiëren, of te wel
          op een element dat in de html-strucuur eerder aangemaakt is. Als je in de praktijk merkt dat
          je een bepaalde stijlkeuze vaker moet definiëren is het altijd goed om te kijken of dit op
          een hoger gelegen element kan. Dit bespaart werk en verkleint de kans op fouten.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Variabele gebruiken binnen een andere variabele</h3>
        <p>
          De knoppen binnen het "button-base"-bestand maken gebruik van de accentkleur als deze
          binnen het "application-base"-bestand gedefinieerd staat. Voor meer informatie zie <a
            href="{base}/documentation/use-css-variable">CSS-variabelen gebruiken</a
          >
        </p>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
:root {
--button-base-background-color: var(--application-base-accent-color);
}
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Aandachtspunten:</h3>
        <ul>
          <li>
            De standaard ingestelde waarden binnen Manon maken gebruik van de <a
              href="body-text-set">Body text set</a
            >. Om gebruik te maken van deze set. Laad de set eenmalig in voordat overige componenten
            er gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ul>

        <h3>Importeer component via npm</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
/* Body text set */
@use "@minvws/manon/body-text-set";

/* De-emphasized */
@use "@minvws/manon/application-base";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <div class="horizontal-scroll">
          <table class="nowrap">
            <caption>Overzicht met de instelbare variabelen:</caption>
            <thead>
              <tr>
                <th scope="col">Naam</th>
                <th scope="col">Variabele</th>
                <th scope="col">CSS-attribuut</th>
                <th scope="col">Class</th>
                <th scope="col">Manon basiswaarde</th>
                <th scope="col">Breekpunt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="2" scope="rowgroup">application-base</th>
                <td>--application-base-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>-</td>
                <td>#fff</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>-</td>
                <td>var(--text-set-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="2" scope="rowgroup">application-base-tint-1</th>
                <td>--application-base-tint-1-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>-</td>
                <td>#f5f5f5</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-tint-1-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>-</td>
                <td>#000</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="10" scope="rowgroup">application-base-accent-color</th>
                <td>--application-base-accent-color</td>
                <td>kleurcode</td>
                <td>-</td>
                <td>#931171</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-accent-color-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>-</td>
                <td>#fff</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-accent-color-hover</td>
                <td>kleurcode</td>
                <td>-</td>
                <td>hotpink</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-accent-color-hover-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>-</td>
                <td>#000</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-accent-color-active</td>
                <td>kleurcode</td>
                <td>-</td>
                <td>hotpink</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-accent-color-active-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>-</td>
                <td>#000</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-accent-color-focus</td>
                <td>kleurcode</td>
                <td>-</td>
                <td>hotpink</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-accent-color-focus-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>-</td>
                <td>#000</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-accent-color-selected</td>
                <td>kleurcode</td>
                <td>-</td>
                <td>hotpink</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--application-base-accent-color-selected-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>-</td>
                <td>#000</td>
                <td>-</td>
              </tr>

              <tr>
                <th rowspan="2" scope="rowgroup">cta (call to action)</th>
                <td>--cta-background-color</td>
                <td>kleurcode</td>
                <td>-</td>
                <td>green</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--cta-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>-</td>
                <td>#fff</td>
                <td>-</td>
              </tr>

              <tr>
                <th>application-base-font-family</th>
                <td>--application-base-font-family</td>
                <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                <td>-</td>
                <td>var(--text-set-font-family)</td>
                <td>-</td>
              </tr>

              <tr>
                <th>application-base-font-size</th>
                <td>--application-base-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>-</td>
                <td>var(--text-set-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <th>application-base-line-height</th>
                <td>--application-base-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>-</td>
                <td>var(--text-set-line-height)</td>
                <td>-</td>
              </tr>

              <tr>
                <th>application-base-font-weight</th>
                <td>--application-base-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>-</td>
                <td>var(--text-set-font-weight)</td>
                <td>-</td>
              </tr>

              <tr>
                <th>application-base-text-align</th>
                <td>--application-base-text-align</td>
                <td><a href="{base}/documentation/variables#text-align">text-align</a></td>
                <td>-</td>
                <td>var(--text-set-text-align)</td>
                <td>-</td>
              </tr>

              <tr>
                <th>application-base-padding</th>
                <td>--application-base-padding</td>
                <td><a href="{base}/documentation/variables#padding">padding</a></td>
                <td>-</td>
                <td>1.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <th>application-base-border-radius</th>
                <td>--application-base-border-radius</td>
                <td><a href="{base}/documentation/variables#border-radius">border-radius</a></td>
                <td>-</td>
                <td>0</td>
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
/* Application background color */
--application-base-background-color: ;
--application-base-text-color: ;

--application-base-tint-1-background-color: ;
--application-base-tint-1-text-color: ;

--application-base-font-family: ;
--application-base-font-size: ;
--application-base-font-weight: ;
--application-base-line-height: ;
--application-base-text-align: ;

--application-base-padding: ;
--application-base-border-radius: ;
--application-base-gap: ;

/* Accent color */
--application-base-accent-color: ;
--application-base-accent-color-text-color: ;

/* Accent color hover */
--application-base-accent-color-hover: ;
--application-base-accent-color-hover-text-color: ;

/* Accent color active */
--application-base-accent-color-active: ;
--application-base-accent-color-active-text-color: ;

/* Accent color focus */
--application-base-accent-color-focus: ;
--application-base-accent-color-focus-text-color: ;

/* Accent color selected */
--application-base-accent-color-selected: ;
--application-base-accent-color-selected-text-color: ;

/* Call to action color */
--cta-background-color: ;
--cta-text-color: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
