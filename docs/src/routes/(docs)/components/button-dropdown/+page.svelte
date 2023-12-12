<script context="module">
  export const breadcrumb = "Dropdown button";
</script>

<script>
  import { onMount } from "svelte";
  import Code from "$lib/Code.svelte";
  import { initCollapsible } from "$lib/manon.js";
  onMount(initCollapsible);
</script>

<svelte:head>
  <title>Dropdown button</title>
</svelte:head>

<main id="main-content" tabindex="-1">
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
          aria-label="Acties"
          class="collapsible dropdown"
        >
          <div class="collapsing-element">
            <ul>
              <li><a href="#">Item 1</a></li>
              <li><a href="#" aria-selected="true">Huidige selectie</a></li>
              <li><a href="#">a</a></li>
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
aria-label="Acties"
class="collapsible">

<div class="collapsing-element">
    <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#" aria-selected="true">Huidige selectie</a></li>
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
            aria-label="Acties"
            class="collapsible dropdown"
          >
            <div class="collapsing-element">
              <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#" aria-selected="true">Huidige selectie</a></li>
                <li><a href="#">Item 3 long name test lorem ipsum dolor sit amet</a></li>
              </ul>
            </div>
          </div>

          <div
            data-open-label="Dropdown menu"
            data-close-label="Sluit dropdown menu"
            data-media="(min-width: 100%)"
            aria-label="Acties"
            class="collapsible dropdown"
          >
            <div class="collapsing-element">
              <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#" aria-selected="true">Huidige selectie</a></li>
                <li><a href="#">Item 3 long name test lorem ipsum dolor sit amet</a></li>
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
aria-label="Acties"
class="collapsible">

<div class="collapsing-element">
    <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#" aria-selected="true">Huidige selectie</a></li>
        <li><a href="#">Item 3</a></li>
    </ul>
</div>
</div>
`}
        />
      </section>
    </div>
  </article>
</main>
