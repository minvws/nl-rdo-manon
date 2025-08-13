<script module>
  export const breadcrumb = "Dropdown button";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import Code from "$lib/Code.svelte";
  import { initCollapsible } from "$lib/manon";
  onMount(initCollapsible);
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Dropdown button</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>

  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Dropdown button</h1>
        <p>Knop met openklapbaar menu.</p>

        <ol>
          <li>
            Voeg de class <code>dropdown</code> toe om gebruik te maken van de visuele weergave van een
            "dropdown button".
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2><code>button</code></h2>
        <h3>Visuele weergave:</h3>

        <div
          data-open-label="Dropdown menu"
          data-close-label="Sluit dropdown menu"
          data-media="(min-width: 100%)"
          class="collapsible dropdown"
        >
          <div class="collapsing-element">
            <ul>
              <li><a href="collapsible">Item 1</a></li>
              <li><a href="collapsible">Huidige selectie</a></li>
              <li><a href="collapsible">a</a></li>
            </ul>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div
data-open-label="Dropdown menu"
data-close-label="Sluit dropdown menu"
data-media="(min-width: 100%)"
class="collapsible">

<div class="collapsing-element">
    <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Huidige selectie</a></li>
        <li><a href="#">Item 3</a></li>
    </ul>
</div>
</div>
`}
        />

        <h2>Meerdere openklapbare knoppen</h2>
        <h3>Visuele weergave:</h3>

        <div class="action-bar">
          <div
            data-open-label="O"
            data-close-label="X"
            data-media="(min-width: 100%)"
            class="collapsible dropdown"
          >
            <div class="collapsing-element">
              <ul>
                <li><a href="collapsible">Item 1</a></li>
                <li><a href="collapsible">Huidige selectie</a></li>
                <li><a href="collapsible">Item 3 long name test lorem ipsum dolor sit amet</a></li>
              </ul>
            </div>
          </div>

          <div
            data-open-label="Dropdown menu"
            data-close-label="Sluit dropdown menu"
            data-media="(min-width: 100%)"
            class="collapsible dropdown"
          >
            <div class="collapsing-element">
              <ul>
                <li><a href="collapsible">Item 1</a></li>
                <li><a href="collapsible">Huidige selectie</a></li>
                <li><a href="collapsible">Item 3 long name test lorem ipsum dolor sit amet</a></li>
              </ul>
            </div>
          </div>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div
data-open-label="Dropdown menu"
data-close-label="Sluit dropdown menu"
data-media="(min-width: 100%)"
class="collapsible">

<div class="collapsing-element">
    <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Huidige selectie</a></li>
        <li><a href="#">Item 3</a></li>
    </ul>
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
      @use "@minvws/manon/dropdown";
      `}
        />
      </section>
    </div>
  </article>
</main>
