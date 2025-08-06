<script module>
  export const breadcrumb = "Tegelweergave";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tegelweergave</title>
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
        <h1>Tegelweergave</h1>
        <p>
          Tegelweergave kan gebruikt worden om content visueel te groeperen om gebruikers te laten
          zien welke content bij elkaar hoort. Veel gebruikte toepassingen voor tegelweergave zijn
          bijvoorbeeld nieuwsberichten.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>
        <p>Beschikbare voorbeelden:</p>
        <nav aria-label="Document-navigatie">
          <ul>
            <li>
              <a href="#single-tile">Tegelweergave op enkel element</a>
            </li>
            <li><a href="#tiles">Groep met tegels</a></li>
            <li>
              <a href="tile/tile-cover-image">Tegel met cover-afbeelding</a>
            </li>
            <li>
              <a href="tile/tile-groups">Gegroepeerde content binnen tegels</a>
            </li>
          </ul>
        </nav>
      </section>

      <section id="single-tile">
        <h2>Tegelweergave op enkel element</h2>
        <p>
          Geschikt voor het weergeven van een element dat visueel gegroepeerd dient te zijn of
          visueel meer aandacht mag krijgen om de gebruiker te attenderen.
        </p>

        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Voeg <code>class="tile"</code> toe voor de tegelweergave op een enkel element.
          </li>
        </ul>

        <h3>Visueel voorbeeld:</h3>
        <div class="tile" role="group">
          <h1>Lorem ipsum dolor set</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
            amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
          </p>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="tile" role="group">
  <h1>Lorem ipsum dolor set</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
</div>
`}
        />
      </section>

      <section id="tiles">
        <h2>Groep met tegels</h2>
        <p>Voor het efficiënt weergeven van een groep elementen met een tegelweergave.</p>

        <p>Aandachtspunten:</p>

        <ul>
          <li>
            Groepeer de elementen die met de tegelweergave weergegeven dienen te worden binnen een <code
              >div</code
            >
            of <code>ul</code> en geef deze <code>div</code> of
            <code>ul</code> de benodigde <code>class</code> mee. Bijvoorbeeld:
            <code>&lt;div class="tiles"&gt;</code>
          </li>
        </ul>

        <h3>Visueel voorbeeld:</h3>

        <div class="tiles column-3">
          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>

          <div role="group">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
              amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
            </p>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div class="tiles column-3">
  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>

  <div role="group">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  </div>
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
@use "@minvws/manon/tile";
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/tiles-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
