<script module>
  export const breadcrumb = "Layout gecentreerd";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Layout gecentreerd</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#variables">Instelbare variabelen</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>

  <article>
    <div>
      <section id="introduction">
        <h1>Layout gecentreerd</h1>
        <p>Centreerd de inhoud van het element op zowel de horizontale als de verticale as.</p>
        <p class="explanation">
          <span>Toelichting:</span> de inhoud van het blok wordt gecenteerd. Als de inhoud 100% breed
          is kan het lijken alsof deze helper niet werkt. Pas in dat geval de breedte van de onderliggende
          elementen aan of kies een andere geschikte layout. Tekst binnen de elementen wordt niet gecentreerd.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeeld</h2>
        <h3>Visueel voorbeeld:</h3>
        <div class="centered">
          <h1>Lorem ipsum</h1>
          <p>Dolor sit amet.</p>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="centered">
  <h1>Lorem ipsum</h1>
  <p>Dolor sit amet.</p>
</div>
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
@use "@minvws/manon/layout-base";
@use "@minvws/manon/layout-centered";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/utility/centered-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
