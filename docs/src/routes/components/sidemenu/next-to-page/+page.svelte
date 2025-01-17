<script module>
  export const breadcrumb = "Zijmenu naast de pagina";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
  import DefaultHeader from "$lib/DefaultHeader.svelte";
  import DefaultFooter from "$lib/DefaultFooter.svelte";
</script>

<svelte:head>
  <title>Zijmenu naast de pagina</title>
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
        <h1>Zijmenu naast de pagina</h1>
        <p>Voor het plaatsen van een zijmenu naast de pagina.</p>
        <p>
          Gebruik deze weergave als de inhoud van het zijmenu niet over de content van de pagina
          gaat maar website breed is. Zoals bijvoorbeeld hoofdnavigatie.
        </p>

        <p>
          Gaat de inhoud van het zijmenu over de inhoud van de content. En hoort het bij de content.
          Gebruik dan: <a href="{base}/components/sidemenu/in-page">Zijmenu binnen de pagina</a>
        </p>

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
        </ol>
        <h2>Aandachtspunten</h2>
        <ul>
          <li>
            Deze versie is een zijmenu zonder inklapfunctionaliteit. Deze versie maakt geen gebruik
            van JavaScript.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Zijmenu</h3>

        <h4>Visueel voorbeeld</h4>
        <p>Zie het zijmenu van deze pagina.</p>
        <div class="resize">
          <iframe src="{base}/examples/sidemenu-next-to-page" title="Voorbeeld" height="320px"
          ></iframe>
        </div>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<body class="sidemenu">
  <nav>
    <ul>
      <li><a href="/">Voorbeeld link 1</a></li>
      <li><a href="/">Voorbeeld link 2</a></li>
      <li><a href="/">Voorbeeld link 3</a></li>
      <li><a href="/">Voorbeeld link 4</a></li>
    </ul>
  </nav>
  <div class="page-content">
    <header class="page-header">
      <div>
        <nav>
          <div class="collapsing-element">
            <ul>
              <li><a href="/">Home</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <article class="visually-grouped">
        <div><section>Main</section></div>
      </article>
    </main>
    <footer>Footer</footer>
  </div>
</body>`}
        />

        <h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>
        <Code
          language="html"
          code={`
<body class="sidemenu">

  <nav>
    <!-- Zijmenu content -->
  </nav>

  <div class="page-content">
    <!-- Overige pagina content -->
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
