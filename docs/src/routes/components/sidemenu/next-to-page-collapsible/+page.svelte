<script module>
  export const breadcrumb = "In- en uitklapbaar zijmenu naast de pagina";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>In- en uitklapbaar zijmenu naast de pagina</title>
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
        <h1>In- en uitklapbaar zijmenu naast de pagina</h1>
        <p>Voor het plaatsen van een zijmenu naast de pagina.</p>
        <p>
          Gebruik deze weergave als de inhoud van het zijmenu niet over de content van de pagina
          gaat maar website breed is. Zoals bijvoorbeeld hoofdnavigatie.
        </p>

        <p>
          Gaat de inhoud van het zijmenu over de inhoud van de content. En hoort het bij de content.
          Gebruik dan: <a href="{base}/components/sidemenu/in-page">Zijmenu binnen de pagina</a>.
        </p>

        <h2>Aandachtspunten</h2>
        <ul>
          <li>Deze versie maakt gebruik van JavaScript.</li>
        </ul>

        <h2>Benodigde stappen</h2>
        <ol>
          <li>Voeg de class <code>sidemenu</code> toe aan de <code>body</code>.</li>
          <li>
            Voeg direct binnen de <code>body</code> een <code>nav</code> toe met de gewenste inhoud.
          </li>
          <li>
            Groepeer de overige content in een enkel element indien dat nog niet gebeurd is.
            Bijvoorbeeld: <code>div</code>. Voor meer informatie zie:
            <a href="#sidemenu-structure">Voorbeeld sidemenu structuur</a>.
          </li>
          <li>
            Voeg de referentie naar het Javascript bestand,
            <code>sidemenu.js</code>, toe aan de HTML-pagina's die gebruik dienen te maken van het
            inklapbare zijmenu. Voor meer informatie zie:
            <a href="{base}/documentation/add-js">JavaScript referentie toevoegen</a>.
          </li>
          <li>
            Om het menu standaard gesloten te tonen tot de gebruiker het menu opent. Voeg de class <code
              >sidemenu-closed</code
            >
            toe aan de <code>body</code>.
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
          toe aan de <code>body</code>.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3 id="sidemenu-collapsible">Inklapbaar zijmenu</h3>
        <h4>Visueel voorbeeld</h4>
        <div class="resize">
          <iframe
            src="{base}/examples/sidemenu-next-to-page-collapsible"
            title="Voorbeeld"
            height="320px"
          ></iframe>
        </div>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<body class="sidemenu">
  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie" aria-label="Zijbalknavigatie">
    <!-- Zijmenu content -->
  </nav>

  <div class="page-content">
    <header>
      <!-- Inhoud van de header. -->
    </header>

    <main>
      <!-- Overige pagina content. -->
    </main>

    <footer>
      <!-- Inhoud van de footer. -->
    </footer>
  </div>
</body>
`}
        />

        <h3 id="sidemenu-expandable">Uitklapbaar zijmenu</h3>
        <p>Het menu is standaard ingeklapt en kan door de gebruiker uitgeklapt worden.</p>

        <ol>
          <li>Voeg de class <code>sidemenu-closed</code> toe aan de body.</li>
        </ol>

        <h4>Visueel voorbeeld</h4>
        <div class="resize">
          <iframe
            src="{base}/examples/sidemenu-next-to-page-expandable"
            title="Voorbeeld"
            height="320px"
          ></iframe>
        </div>

        <h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>
        <Code
          language="html"
          code={`
<body class="sidemenu sidemenu-closed">
  <nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie" aria-label="Zijbalknavigatie">
    <!-- Zijmenu content -->
  </nav>

  <div class="page-content">
    <header>
      <!-- Inhoud van de header. -->
    </header>

    <main>
      <!-- Overige pagina content. -->
    </main>

    <footer>
      <!-- Inhoud van de footer. -->
    </footer>
  </div>
</body>
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
          language="css"
          code={`
@use "@minvws/manon/sidemenu";
`}
        />
      </section>
    </div>
  </article>
</main>
