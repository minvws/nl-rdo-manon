<!--
NB: the @ in this file's filename, +page@.svelte, is there to break out of the
layout at (docs)/+layout.svelte.
See: https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-breaking-out-of-layouts
-->

<script context="module">
  export const breadcrumb = "Zijmenu naast de pagina";
</script>

<script>
  import { base } from "$app/paths";
  import { onMount, onDestroy } from "svelte";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
  import DefaultHeader from "$lib/DefaultHeader.svelte";
  import DefaultFooter from "$lib/DefaultFooter.svelte";

  // Add the "sidemenu" class to the <body> tag while this page is mounted.
  onMount(() => document.body.classList.add("sidemenu"));
  onDestroy(() => document.body.classList.remove("sidemenu"));
</script>

<svelte:head>
  <title>Zijmenu naast de pagina</title>
</svelte:head>

<SideMenu>
  <ul>
    <li><a href="#introduction">Introductie</a></li>
    <li><a href="#examples">Voorbeelden</a></li>
    <li><a href="#requirements">Bijbehorende bestanden</a></li>
  </ul>
</SideMenu>

<div class="page-content">
  <DefaultHeader class="page-header" />

  <main id="main-content" tabindex="-1">
    <article>
      <div>
        <section id="introduction">
          <h1>Zijmenu naast de pagina</h1>
          <p>Voor het plaatsen van een zijmenu naast de pagina.</p>
          <p>
            Gebruik deze weergave als de inhoud van het zijmenu niet over de content van de pagina
            gaat maar website breed is. Zoals bijvoorbeeld hoofdnavigatie.
          </p>

          <p>
            Gaat de inhoud van het zijmenu over de inhoud van de content. En hoort het bij de
            content. Gebruik dan: <a href="./in-page">Zijmenu binnen de pagina</a>
          </p>

          <nav aria-labelledby="table-of-contents">
            <h3 id="table-of-contents">Inhoudsopgave</h3>
            <ul>
              <li><a href="#examples">Voorbeelden</a></li>
              <li><a href="#requirements">Bijbehorende bestanden</a></li>
            </ul>
          </nav>
        </section>

        <section id="examples">
          <h2>Voorbeelden</h2>
          <h3 id="sidemenu">Zijmenu</h3>

          <h4>Benodigde stappen</h4>
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

          <h4>Aandachtspunten</h4>
          <ul>
            <li>
              <p>
                Deze versie is een zijmenu zonder inklapfunctionaliteit. Deze versie maakt geen
                gebruik van JavaScript.
              </p>
            </li>
          </ul>

          <h4>Visueel voorbeeld</h4>
          <p>Zie het zijmenu van deze pagina.</p>

          <h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>
          <Code
            language="html"
            code={`
<body class="sidemenu">
  <nav>
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
            <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
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

  <DefaultFooter />
</div>
