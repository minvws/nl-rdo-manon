<script module>
  export const breadcrumb = "Titel";
</script>

<script lang="ts">
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
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Titels</h1>
        <p>Gebruik titels om structuur binnen de pagina aan te geven.</p>

        <div class="visually-grouped">
          <h2 class="heading-normal">Aandachtspunten:</h2>
          <ul>
            <li>Gebruik altijd een <code>h1</code> per pagina.*</li>
            <li>
              Kies altijd het juiste titel-element uit <code>h1</code> &gt; <code>h6</code> op basis
              van de structuur in de HTML. Niet op basis van de visuele weergave.
            </li>
            <li>
              HTML-elementen h1 &gt; h6 kunnen via de css voorzien worden van stijl. Voor meer
              informatie zie: <a href="#examples">voorbeelden</a>.
            </li>
            <li>
              Als niet ieder gelijkwaardig titel-element, bijvoorbeeld een h1, dezelfde visuele
              stijling gebruikt kan de stijl gezet worden door middel van een voorgedefineerde set.
              Binnen deze set worden de beschikbare "heading-styles" vastgelegd. Denk bijvoorbeeld
              aan een "heading-large" of een "heading-small". Voor meer informatie hierover zie: <a
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
        </div>
      </section>

      <section id="examples" class="visually-grouped">
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
            <a href="{base}/documentation/import-styling"
              >Componenten gebruiken en styling toevoegen</a
            >
          </p>

          <h3>Importeer component via npm</h3>

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
        <section id="related">
          <h2>Gerelateerde pagina's</h2>
          <a href="{base}/components/headings-test">Test- en voorbeelden-pagina</a>
        </section>
      </section>
    </div>
  </article>
</main>
