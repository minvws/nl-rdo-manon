<script context="module">
  export const breadcrumb = "Iconen";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Iconen</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Iconen</h1>
        <p>
          Voor het toevoegen van iconen binnen de website kan gebruikt gemaakt worden van de
          unicode-codes.
        </p>

        <ol>
          <li>
            Voeg de class <code>icon</code> toe om gebruik te maken van de visuele weergave van een icoonknop.
          </li>
          <li>
            Voeg iconen toe aan het project.
            <ul>
              <li><a href="./iconset-create">Iconset aanmaken</a></li>
              <li><a href="./iconset-add">Iconset toevoegen</a></li>
            </ul>
          </li>
          <li>
            <a href="#usage">Iconen gebruiken.</a>
            <ul>
              <li>
                <a href="#icon-within">Iconen toevoegen binnen de HTML</a>
              </li>
              <li>
                <a href="#icon-within-css">Iconen toevoegen via CSS</a>
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="usage">
        <h2>Iconen gebruiken</h2>

        <h3 id="icon-within-html">Binnen HTML</h3>
        <p>Iconen als afbeelding toevoegen.</p>

        <h4>Visueel voorbeeld:</h4>
        <img src="$img/cat.svg" class="icon" />

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<img src="cat.svg" class="icon">
`}
        />

        <h3 id="icon-within-css">Via CSS</h3>
        <p>
          Het onderstaande voorbeeld bevat een <code>span</code>. Andere html-attributen zijn ook
          mogelijk. Onder andere: <code>a</code>, <code>p</code>, <code>button</code>.
        </p>
        <p>
          <strong>Let op:</strong> Voeg eerst een iconenset toe aan het project met indien nodig een
          eigen referentielijst. Voor meer informatie zie:
          <a href="./iconset-add">Iconset toevoegen</a>
        </p>

        <h4>Visueel voorbeeld:</h4>
        <button class="icon icon-cat">Kat</button>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<button class="icon icon-cat">Kat</button>
`}
        />
      </section>

      <section id="global-icon-font">
        <h2>Applicatie icoonlettertype definiëren</h2>
        <ol>
          <li>
            Voeg het icoonlettertype toe aan het project. Voor informatie zie:
            <a href="./iconset-add">Icoonset toevoegen</a>.
          </li>
          <li>
            Defineer het lettertype binnen het bestand
            <code>manon/icon/icon-base-variables</code> via de variabele
            <code>font-family</code>. Bijvoorbeeld:
            <code>--icon-font-family: "Manon icons";</code>. Zie ook
            <a href="../import-styling#styling-override-variables"
              >De styling van een component aanpassen</a
            >.
          </li>
        </ol>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="../variables#font-family">font-family</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="./icons-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
