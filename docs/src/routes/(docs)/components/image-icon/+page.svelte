<script context="module">
  export const breadcrumb = "Icoon-afbeelding";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Icoon-afbeelding</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section>
        <h1>Icoon-afbeelding</h1>
        <p>
          Het <a href="{base}/components/icons">Icoon-component</a> kan gebruikt wordt met unicode-codes
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

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/icons-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
