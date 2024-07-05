<script context="module">
  export const breadcrumb = "Font";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Font</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#add-fonts">Lettertype toevoegen aan het project</a></li>
      <li><a href="#use-fonts">Lettertype gebruiken</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Font</h1>
        <p>Lettertypes toevoegen.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>Voeg de lettertypes toe aan het project.</li>
          <li>
            Voeg de benodigde bestanden toe aan het project.
            <ul>
              <li>
                Voor een overzicht van de benodigde en optionele bestanden zie: <a
                  href="#requirements">Bijbehorende bestanden</a
                >.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="add-fonts">
        <h2>Lettertype(s) toevoegen aan het project</h2>
        <p>Overzicht van de stappen om een eigen lettertype toe te voegen.</p>

        <ol>
          <li>
            Voeg de gewenste lettertypes toe aan het project. Bijvoorbeeld binnen een <code
              >fonts</code
            >-map.
          </li>
          <li>
            Maak een css of scss-bestand aan waarbinnen het font aangeroepen kan worden. Zie voor <a
              href="#examples">CSS-voorbeelden</a
            >.
          </li>
          <li>
            Vul het voorbeeldbestand in met de gekozen lettertypes. Voeg bij
            <code>src:</code> het pad toe naar de toegevoegde lettertypes binnen het project. Voor
            meer informatie zie: <a href="#examples">Voorbeelden lettertypes toevoegen</a>.
          </li>
        </ol>

        <h3 id="examples">Voorbeelden</h3>

        <h4>Lettertype</h4>
        <h5>CSS-voorbeeld</h5>
        <Code
          language="css"
          code={`
@font-face {
  font-family: "Naam van het font";
  font-weight: normal;
  font-style: normal;
  src: url("../fonts/fontnaam.woff2") format("woff2"),
    url("../fonts/fontnaam.woff") format("woff");
}
`}
        />

        <h4>Lettertype met verschillende varianten</h4>
        <Code
          language="css"
          code={`
/* Naam van het font */
@font-face {
  font-family: "Naam van het font";
  font-weight: normal;
  font-style: normal;
  src: url("../fonts/fontnaam.woff2") format("woff2"),
    url("../fonts/fontnaam.woff") format("woff");
}

@font-face {
  font-family: "Naam van het font";
  font-weight: normal;
  font-style: italic;
  src: url("../fonts/fontnaam-italic.woff2") format("woff2"),
    url("../fonts/fontnaam-italic.woff") format("woff");
}
`}
        />

        <h4>Icoonlettertype</h4>
        <Code
          language="css"
          code={`
/* Manon icon font */
@font-face {
  font-family: "Naam van het icon font";
  font-weight: normal;
  font-style: normal;
  src: url("../fonts/fontnaam.eot");
  src: url("../fonts/fontnaam.woff") format("woff"),
    url("../fonts/fontnaam.ttf") format("truetype"),
    url("../fonts/fontnaam.svg") format("svg");
}
`}
        />
      </section>

      <section id="use-fonts">
        <h2>Lettertype gebruiken</h2>

        <h3>Lettertype applicatiebreed toevoegen</h3>
        <p>
          Op een hoog niveau het lettertype toevoegen zodat alle onderliggende tekst-elementen het
          lettertype gebruiken. Deze optie is fijn als basis-instelling of om de hele applicatie in
          een keer van hetzelfde lettertype te voorzien.
        </p>
        <h4>Visueel voorbeeld:</h4>
        <p>Lorem ipsum</p>

        <h4>CSS-voorbeeld:</h4>
        <p>
          Het toevoegen van een fallback is mogelijk. Manon heeft een standaard fallback van
          "sans-serif" als er geen eigen lettertype is ingevuld.
        </p>
        <Code
          language="css"
          code={`
--application-base-font-family: "Naam van het font";
`}
        />
        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<p>Lorem ipsum</p>
`}
        />

        <h3>Uitzonderingen toevoegen</h3>
        <p>
          Het is mogelijk om voor specifieke elementen het ingestelde lettertype te overschrijven.
          Een veel voorkomend voorbeeld is het lettertype voor titels.
        </p>
        <p>
          Veel componenten hebben ook variabelen beschikbaar om een lettertype toe te voegen per
          component.
        </p>
        <p>
          Het toevoegen van een fallback is mogelijk. Manon heeft een standaard fallback van
          "sans-serif" als er geen eigen lettertype is ingevuld.
        </p>

        <h4>Visueel voorbeeld:</h4>
        <p>Voorbeeld om een lettertype in te stellen voor alle titels.</p>
        <h1>Lorem ipsum</h1>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
--headings-font-family: "Naam van het font";
`}
        />

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<h1>Lorem ipsum</h1>
`}
        />

        <h4>Visueel voorbeeld:</h4>
        <p>
          Voorbeeld om een lettertype in te stellen voor een specifieke titel. In dit geval een <code
            >h1</code
          >.
        </p>

        <h1>Lorem ipsum</h1>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
--h1-font-family: "Naam van het font";
`}
        />

        <h4>HTML-Voorbeeld:</h4>
        <Code
          language="html"
          code={`
<h1>Lorem ipsum</h1>
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

        <h3>Importeer component via NPM</h3>
        <h4>CSS-voorbeeld:</h4>
        <h5>Lettertype doorvoeren op applicatieniveau.</h5>
        <p>
          Voor meer informatie zie: <a href="application-base">Stijlkeuzes op applicatie-niveau</a>.
        </p>
        <Code
          language="css"
          code={`
@use "@minvws/manon/application-base";
`}
        />

        <h5>Lettertype doorvoeren op titels.</h5>
        <p>
          Voor meer informatie zie: <a href="headings">Titels</a> en
          <a href="heading-base-set">Titel basisset</a>.
        </p>
        <Code
          language="css"
          code={`
/* Headings set */
@use "@minvws/manon/headings-base-set";

/* Headings */
@use "@minvws/manon/headings";
`}
        />

        <h3>Beschikbare Headingsets</h3>
        <p>
          Heading-sets kunnen gebruikt worden om op een centrale plek de stijlkeuzes vast te leggen
          voor de beschikbare titel-weergaven.
        </p>

        <p>Beschikbare styling sets voor headings zijn:</p>

        <ul>
          <li><a href="heading-base-set">Titel basisset</a></li>
        </ul>
      </section>
    </div>
  </article>
</main>
