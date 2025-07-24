<script module>
  export const breadcrumb = "Titel basisset";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Titel basisset</title>
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
        <h1>Titel basisset</h1>
        <p>Basisset voor het stylen van titels.</p>

        <div class="visually-grouped">
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
                  Vul de variabelen met de gewenste weergaven. Voor meer informatie zie het
                  overzicht met <a href="#variables">instelbare variabelen</a>.
                </li>
                <li>
                  Pas de titelweergaven toe waar nodig. De titelweergaven kunnen op twee manieren
                  toegepast worden. Door middel van variabelen binnen de CSS of door middel van
                  classes binnen de HTML. Maak gebruik van de CSS-variabelen waar mogelijk en voeg
                  alleen de classes toe in de HTML voor uitzonderingen om de code aanpasbaar en
                  overzichtelijk te houden. Voor meer informatie hierover zie <a
                    href="{base}/documentation/use-css-variable">CSS-variabelen gebruiken</a
                  >.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      <section id="examples" class="visually-grouped">
        <h2>Voorbeelden</h2>

        <h3>Beschikbare opties</h3>
        <ul>
          <li>heading-xxl</li>
          <li>heading-xl</li>
          <li>heading-large</li>
          <li>heading-normal</li>
          <li>heading-small</li>
          <li>heading-xs</li>
        </ul>

        <h3>HTML-element stijling ingesteld via CSS voorbeeld</h3>
        <h4>Visueel voorbeeld:</h4>

        <div class="visual-example">
          <h1>h1 met weergave heading XXL</h1>
          <h2>h2 met weergave heading XL</h2>
          <h3>h3 met weergave heading Large</h3>
          <h4>h4 met weergave heading Normal</h4>
          <h5>h5 met weergave heading Small</h5>
          <h6>h6 met weergave heading XS</h6>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<h1>h1 met weergave heading XXL</h1>
<h2>h2 met weergave heading XL</h2>
<h3>h3 met weergave heading Large</h3>
<h4>h4 met weergave heading Normal</h4>
<h5>h5 met weergave heading Small</h5>
<h6>h6 met weergave heading XS</h6>
`}
        />

        <h3>Variabele gebruiken binnen een andere variabele</h3>
        <p>
          In dit voorbeeld is de styling ingesteld door een van de variabelen uit deze set in te
          laden binnen de variabele om de h1 te stylen.
        </p>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
:root {
  --headings-h1-font-size: var(--heading-xxl-font-size);
}
`}
        />
        <p>
          Voor meer informatie hierover zie <a href="{base}/documentation/use-css-variable"
            >CSS-variabelen gebruiken</a
          >.
        </p>

        <h3>Class gebruiken binnen de HTML</h3>
        <p>
          Dit voorbeeld maakt gebruik van de classes uit deze set direct op de HTML-elementen. Dit
          is een geschikte manier voor uitzonderingen.
        </p>
        <p class="warning">
          <span>Waarschuwing:</span> Waar mogelijk is het altijd aan te raden zo min mogelijk classes
          te gebruiken maar om gebruik te maken van het overerven van CSS. Maar omdat een uitzondering
          soms nodig is, is het mogelijk om de titelweergaven ook direct in de html te kunnen definiëren
          door middel van een classes.
        </p>

        <h4>Visueel voorbeeld:</h4>
        <div class="visual-example">
          <h3 class="heading-xxl">Heading XXL</h3>
          <h3 class="heading-xl">Heading XL</h3>
          <h3 class="heading-large">Heading Large</h3>
          <h3 class="heading-normal">Heading Normal</h3>
          <h3 class="heading-small">Heading Small</h3>
          <h3 class="heading-xs">Heading XS</h3>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<h3 class="heading-xxl">Heading XXL</h3>
<h3 class="heading-xl">Heading XL</h3>
<h3 class="heading-large">Heading Large</h3>
<h3 class="heading-normal">Heading Normal</h3>
<h3 class="heading-small">Heading Small</h3>
<h3 class="heading-xs">Heading XS</h3>
`}
        />
      </section>

      <section id="requirements" class="visually-grouped">
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
@use "@minvws/manon/heading-base-set";
`}
        />
      </section>
    </div>
  </article>
</main>
