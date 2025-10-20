<script module>
  export const breadcrumb = "Icoon-afbeelding";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Icoon-afbeelding</title>
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
    <h1 class="page-title">Icoon-afbeelding</h1>
    <div class="content-wrapper">
      <section id="introduction">
        <p>
          Het <a href="{base}/library/components/icons">Icoon-component</a> kan gebruikt wordt met unicode-codes
          om een van de iconen uit de standaard icoon-set te gebruiken.
        </p>

        <p>
          Als een icoon nodig is dat niet onderdeel is van de standaard icoon-set, dan kan ervoor
          gekozen worden om een applicatie-specifieke icoon-set toe te voegen. In sommige gevallen
          is dat niet wenselijk, bijvoorbeeld omdat het icoon maar op één plek gebruikt wordt. In
          dat geval is het ook mogelijk om een normale afbeelding als icoon te gebruiken.
        </p>

        <p>
          Voeg hiervoor de class <code>icon</code> toe aan het <code>{`<img>`}</code> element om gebruik
          te maken van de visuele weergave van een icoon.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeeld</h2>

        <h3>Visueel voorbeeld:</h3>
        <img src="$img/cat.svg" class="icon" alt="Kat" />

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<img src="cat.svg" class="icon" alt="Kat" />
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/getting-started/installation">
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>

        <h3>Importeer component via npm</h3>
        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/components/icon";
      `}
        />
      </section>
    </div>
  </article>
</main>
