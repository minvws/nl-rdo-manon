<script context="module">
  export const breadcrumb = "Zijmenu";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Zijmenu</title>
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
        <h1>In- uit-klapbaar zijmenu binnen de pagina</h1>
        <p>
          Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het navigeren voor de
          gebruiker toegankelijk en overzichtelijk te houden. In dit voorbeeld staat het zijmenu
          binnen de pagina bij de content. Dus tussen de header en footer.
        </p>

        <h4>Aandachtspunten</h4>
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

        <h4>Benodigde stappen</h4>
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

        <h4>Sluit- en open-knop als icoonknop instellen zonder tekst.</h4>
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

        <h4>Pagina laden met een gesloten zijmenu</h4>
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
        <p>Zie het zijmenu van deze pagina.</p>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<main class="sidemenu">

  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie" aria-label="Zijbalknavigatie">
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

        <h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>
        <Code
          language="html"
          code={`
<main class="sidemenu sidemenu-closed">

  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie" aria-label="Zijbalknavigatie">
    <!-- Zijmenu content -->
  </nav>

  <div>
    <!-- Overige pagina content. -->
  </div>

</main>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/sidemenu";
`}
        />
      </section>
    </div>
  </article>
</main>
