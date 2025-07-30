<script module>
  export const breadcrumb = "Hulpteksten";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Hulpteksten</title>
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
        <h1>Hulpteksten</h1>
        <p>Voor het geven van extra toelichting op een invoerveld.</p>

        <h2>Benodigde stappen</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project.
            <ul>
              <li>
                Voor een overzicht van de benodigde en optionele bestanden zie:
                <a href="#requirements">Bijbehorende bestanden</a>.
              </li>
              <li>
                Voeg het bijbehorende Javascript-bestand toe aan het project. Voor meer informatie
                zie:
                <a href="{base}/documentation/add-js">JavaScript toevoegen</a>.
              </li>
            </ul>
          </li>
          <li>
            Voeg de referentie naar het JavaScript bestand toe aan de
            <code>&lt;head&gt;</code> van de pagina. Voorbeeld:
            <code>&lt;script defer src="./pad/naar/form-help.min.js"&gt;&lt;/script&gt;</code>.
          </li>
          <li>Voeg de class <code>help</code> toe aan het formulier.</li>
          <li>
            Groepeer het invoerveld met de bijbehorende hulptekst in een
            <code>&lt;div&gt;</code>.
          </li>
          <li>Voeg de hulptekst toe <strong>onder</strong> het invoerveld.</li>
        </ol>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Voeg de hulptekst toe <strong>onder</strong> het invoerveld. Hierdoor verspringt het formulier
            en de locatie waar de gebruiker interactie mee heeft zo min mogelijk. Hulpteksten die boven
            het invoerveld staan worden niet ingeklapt.
          </li>
          <li>
            De knop wordt automatisch toegevoegd. Deze hoeft dus niet handmatig in de html opgenomen
            te worden.
          </li>
          <li>
            Zonder JavaScript wordt de knop niet toegevoegd en wordt hulptekst getoont zonder deze
            in te klappen. Dit zorgt ervoor dat de hulpteksten ook beschikbaar zijn voor gebruikers
            zonder JavaScript.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Basis</h3>
        <h4>Visueel voorbeeld</h4>
        <form action="" method="post" class="help">
          <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
            >Help op simpel formulierveld</label
          >
          <div>
            <input
              id="voorbeeld-text-input-met-hulptekst-simpel-1"
              name="voorbeeld-text-input"
              type="text"
              aria-describedby="voorbeeld-text-input-met-hulptekst-simpel-1-message"
            />
            <p
              class="explanation"
              data-open-label="Toelichting bij het veld: Voorbeeld text input"
              data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
              id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
            >
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h4>HTML-Voorbeeld</h4>
        <Code
          language="html"
          code={`
<form action="" method="post" class="help">
  <label for="voorbeeld-text-input-met-hulptekst-simpel-1">Help op simpel formulierveld</label>
  <div>
    <input
      id="voorbeeld-text-input-met-hulptekst-simpel-1"
      name="voorbeeld-text-input"
      type="text"
      aria-describedby="voorbeeld-text-input-met-hulptekst-simpel-1-message">
    <p
      class="explanation"
      data-open-label="Toelichting bij het veld: Voorbeeld text input"
      data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
      id="voorbeeld-text-input-met-hulptekst-simpel-1-message">
    Lorem ipsum dolor sit amet.</p>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Verplicht invoerveld</h3>
        <ol>
          <li>
            Geef op de <code>&lt;input&gt;</code> aan dat het invoerveld verplicht is met het
            <code>required</code> attribuut.
          </li>
          <li>
            Voeg een span toe boven het invoerveld. Het is belangrijk om het bericht boven het
            invoerveld te plaatsen zodat de volgorde ook klopt voor gebruikers die gebruik maken van
            hulpmiddelen zoals een screenreader.
          </li>
          <li>
            Groeppeer de <code>&lt;input&gt;</code> en de <code>&lt;span&gt;</code> samen in een
            <code>&lt;div&gt;</code> binnen horizontaal uitgelijnde formulieren.
          </li>
          <li>
            Groepeer het invoerveld en de bijbehorende helptekst binnen een
            <code>div</code> voor de correcte uitlijning van de helptekstenknop.
          </li>
        </ol>

        <h4>Visueel voorbeeld</h4>
        <form action="" method="post" class="help">
          <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
            >Help op simpel formulierveld</label
          >
          <div>
            <span class="nota-bene">Dit veld is verplicht</span>
            <div>
              <input
                id="example-input-help-required"
                name="voorbeeld-text-input"
                type="text"
                aria-describedby="example-input-help-required-message"
                required
              />
              <p
                class="explanation"
                data-open-label="Toelichting bij het veld: Voorbeeld text input"
                data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
                id="example-input-help-required-message"
              >
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <Code
          language="html"
          code={`
<form action="" method="post" class="help">
  <label for="example-input-help-required">Help op simpel formulierveld</label>
  <div>
    <span class="nota-bene">Dit veld is verplicht</span>
    <div>
      <input
        id="example-input-help-required"
        name="voorbeeld-text-input"
        type="text"
        aria-describedby="example-input-help-required-message"
        required>
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-input-help-required-message">
      Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
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
@use "@minvws/manon/form-help";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            <code>button</code>
            <ul>
              <li><a href="{base}/documentation/variables#width">width</a></li>
              <li><a href="{base}/documentation/variables#height">height</a></li>
              <li>
                <a href="{base}/documentation/variables#padding-top">padding-top</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#padding-right">padding-right</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#padding-bottom">padding-bottom</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#padding-left">padding-left</a>
              </li>
              <li><a href="{base}/documentation/variables#top">top</a></li>
              <li><a href="{base}/documentation/variables#right">right</a></li>
              <li>
                <a href="{base}/documentation/variables#border-width">border-width</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-style">border-style</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-color">border-color</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-radius">border-radius</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#background-color">background-color</a>
              </li>
              <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
            </ul>
          </li>
          <li>
            Icoon
            <ul>
              <li><a href="{base}/documentation/variables#content">content</a></li>
              <li><a href="{base}/documentation/variables#font-size">font-size</a></li>
              <li>
                <a href="{base}/documentation/variables#font-weight">font-weight</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#line-height">line-height</a>
              </li>
            </ul>
          </li>
        </ul>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form">form</a></li>
          <li>Formulierelementen</li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-help-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
