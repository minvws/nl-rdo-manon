<script module>
  export const breadcrumb = "Gegroepeerde content binnen tegels";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Gegroepeerde content binnen tegels</title>
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
        <h1>Gegroepeerde content binnen tegels</h1>

        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Voeg <code>class="tile"</code> toe voor de Gegroepeerde content binnen tegels op een
            enkel element. Voor meer informatie zie:
            <a href="{base}/components/tiles">tegelweergave</a>
          </li>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3>Enkel element <code>div</code></h3>

        <h4>Visueel voorbeeld:</h4>
        <div class="tile" role="group">
          <h1>Lorem ipsum dolor set</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit
            amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.
          </p>
          <div>
            <button>Lorem</button>
            <button>Ipsum</button>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="tile" role="group">
  <h1>Lorem ipsum dolor set</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan non justo sit amet convallis. Phasellus auctor hendrerit fermentum. Ut et dui sapien.</p>
  <div>
    <button>Lorem</button>
    <button>Ipsum</button>
  </div>
</div>
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            <a href="{base}/documentation/variables#flex-direction">flex-direction</a>
          </li>
          <li><a href="{base}/documentation/variables#gap">gap</a></li>
          <li><a href="{base}/documentation/variables#border-width">border-width</a></li>
          <li><a href="{base}/documentation/variables#border-style">border-style</a></li>
          <li><a href="{base}/documentation/variables#border-color">border-color</a></li>
          <li><a href="{base}/documentation/variables#padding-top">padding-top</a></li>
          <li>
            <a href="{base}/documentation/variables#padding-right">padding-right</a>
          </li>
          <li>
            <a href="{base}/documentation/variables#padding-bottom">padding-bottom</a>
          </li>
          <li><a href="{base}/documentation/variables#padding-left">padding-left</a></li>
        </ul>
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
@use "@minvws/manon/tile-groups";
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/tile-groups-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
