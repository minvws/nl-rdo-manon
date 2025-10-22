<script module>
  export const breadcrumb = "In- en uitklapbaar zijmenu binnen de pagina";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Zijmenu</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul class="sticky-container">
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>

  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>In- en uitklapbaar zijmenu binnen de pagina</h1>
        <p>
          Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het navigeren voor de
          gebruiker toegankelijk en overzichtelijk te houden. In dit voorbeeld staat het zijmenu
          binnen de pagina bij de content. Dus tussen de header en footer.
        </p>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>Deze versie maakt gebruik van JavaScript.</li>
          <li>
            De knop wordt automatisch toegevoegd. Deze hoeft dus niet handmatig in de html opgenomen
            te worden.
          </li>
          <li>
            Zonder JavaScript wordt de knop niet toegevoegd en wordt het zijmenu getoond zonder deze
            in te klappen.
          </li>
        </ul>

        <h2>Benodigde stappen</h2>
        <ol>
          <li>Voeg de class <code>sidemenu</code> toe aan de <code>main</code>.</li>
          <li>
            Voeg direct binnen de <code>main</code> een <code>nav</code> toe met de gewenste inhoud.
          </li>
          <li>
            Groepeer de overige content in een enkel element indien dat nog niet gebeurd is.
            Bijvoorbeeld: <code>div</code>, <code>article</code> of <code>section</code>. Voor meer
            informatie zie: <a href="#sidemenu-structure">Voorbeeld sidemenu structuur</a>.
          </li>
          <li>
            Voeg de referentie naar het Javascript bestand,
            <code>sidemenu.js</code>, toe aan de HTML-pagina's die gebruik dienen te maken van het
            inklapbare zijmenu. Voor meer informatie zie:
            <a href="{base}/documentation/add-js">JavaScript referentie toevoegen</a>.
          </li>
        </ol>

        <h3>Sluit- en open-knop als icoonknop instellen zonder tekst.</h3>
        <p>
          Voeg altijd de knoptekst in de taal van het document toe voor screenreader gebruikers.
        </p>
        <ol>
          <li>
            Voeg de knoptekst toe binnen een <code>data-open-label</code>. Bijvoorbeeld:
            <code>data-open-label="Zijbalknavigatie"</code>.
          </li>
          <li>
            Voeg de knoptekst toe binnen een <code>data-close-label</code>. Bijvoorbeeld:
            <code>data-open-label="Sluit zijbalknavigatie"</code>.
          </li>
          <li>
            Vul de variabele <code>--sidemenu-open-button-icon</code> in.
          </li>
          <li>
            Vul de variabele <code>--sidemenu-close-button-icon</code> in.
          </li>
          <li>
            Zet de variabele <code>--sidemenu-button-font-size</code> op <code>0</code> om de tekst visueel
            te verbergen.
          </li>
        </ol>

        <h3>Pagina laden met een gesloten zijmenu</h3>
        <p>
          Om het menu standaard gesloten te tonen tot de gebruiker het menu opent. Voeg de class <code
            >sidemenu-closed</code
          >
          toe aan de <code>body</code>. Voor meer informatie zie:
          <a href="#sidemenu-expandable">Uitklapbaar zijmenu</a>.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3 id="sidemenu-collapsible">Inklapbaar zijmenu</h3>
        <h4>Visueel voorbeeld</h4>
        <div class="resize">
          <iframe
            src="{base}/examples/sidemenu-in-page-collapsible"
            title="Voorbeeld"
            height="320px"
          ></iframe>
        </div>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<main class="sidemenu">

  <nav
    data-open-label="Zijbalknavigatie"
    data-close-label="Sluit zijbalknavigatie"
    aria-label="Zijbalknavigatie">
    <!-- Zijmenu content -->
  </nav>

  <div>
    <!-- Overige pagina content. -->
  </div>

</main>
`}
        />

        <h3 id="sidemenu-expandable">Uitklapbaar zijmenu</h3>
        <p>Het menu is standaard ingeklapt en kan door de gebruiker uitgeklapt worden.</p>

        <ol>
          <li>Voeg de class <code>sidemenu-closed</code> toe aan de body.</li>
        </ol>

        <h4>Visueel voorbeeld</h4>
        <div class="resize">
          <iframe src="{base}/examples/sidemenu-in-page-expandable" title="Voorbeeld" height="320px"
          ></iframe>
        </div>

        <h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>
        <p>
          De layout kan op twee manieren ingesteld worden. Met of zonder het toevoegen van een
          class. Het toevoegen van de class geeft meer vrijheid qua structuur omdat de styling door
          middel van de class op de juiste plek terecht komt. Als de structuur van de pagina exact
          overeenkomt met de onderstaande voorbeelden is het niet nodig de class toe te voegen. Als
          de structuur overeenkomt kan de styling op basis van de HTML-structuur toegepast worden.
        </p>
        <h5>Voorbeeld styling op basis van HTML-structuur</h5>
        <h6><code>div</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu sidemenu-closed">

  <nav
    data-open-label="Zijbalknavigatie"
    data-close-label="Sluit zijbalknavigatie"
    aria-label="Zijbalknavigatie">
    <!-- Zijmenu content -->
  </nav>

  <div>
    <!-- Overige pagina content. -->
  </div>

</main>
`}
        />

        <h6><code>article</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu sidemenu-closed">

  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie" aria-label="Zijbalknavigatie">
    <!-- Zijmenu content -->
  </nav>

  <article>
      <!-- Overige pagina content. -->
  </article>

</main>
`}
        />

        <h6><code>section</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu sidemenu-closed">

  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie" aria-label="Zijbalknavigatie">
      <!-- Zijmenu content -->
  </nav>

  <section>
      <!-- Overige pagina content. -->
  </section>

</main>
`}
        />
        <p>Om gebruik te maken van deze structuur importeer de volgende bestanden via NPM.</p>
        <Code
          language="scss"
          code={`
@use "@minvws/manon/sidemenu";
@use "@minvws/manon/sidemenu-page-content";
`}
        />

        <h5>Voorbeeld gebruik van class</h5>
        <p>
          Voeg de class <code>page-content</code> toe aan het element die de paginacontent bevat.
        </p>

        <h6><code>div</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu sidemenu-closed">

  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie" aria-label="Zijbalknavigatie">
      <!-- Zijmenu content -->
  </nav>

  <div class="page-content">
      <!-- Overige pagina content. -->
  </div>

</main>
`}
        />

        <h6><code>article</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu sidemenu-closed">

  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie" aria-label="Zijbalknavigatie">
      <!-- Zijmenu content -->
  </nav>

  <article class="page-content">
      <!-- Overige pagina content. -->
  </article>

</main>
`}
        />

        <h6><code>section</code></h6>
        <Code
          language="html"
          code={`
<main class="sidemenu sidemenu-closed">

  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie" aria-label="Zijbalknavigatie">
      <!-- Zijmenu content -->
  </nav>

  <section class="page-content">
      <!-- Overige pagina content. -->
  </section>

</main>
`}
        />

        <p>Om gebruik te maken van deze structuur importeer het volgende bestand via NPM.</p>
        <Code
          language="scss"
          code={`
@use "@minvws/manon/sidemenu";
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

        <h4>CSS-voorbeeld</h4>
        <Code
          language="scss"
          code={`
@use "@minvws/manon/sidemenu";
`}
        />

        <p>
          Optionele bestanden: Zie <a href="#sidemenu-structure">structuurvoorbeelden</a> voor meer informatie.
        </p>
        <Code
          language="scss"
          code={`
@use "@minvws/manon/sidemenu-page-content";`}
        />
      </section>
    </div>
  </article>
</main>
