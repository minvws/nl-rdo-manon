<script context="module">
  export const breadcrumb = "Icoonknoppen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Icoonknoppen</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article id="button-base">
    <div>
      <section id="introduction">
        <h1>Icoonknoppen</h1>
        <p>Subtiele knopweergave.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de class <code>icon</code> toe aan de knop om gebruik te maken van de visuele weergave
            van een icoonknop.
          </li>
          <li>
            Voeg de class van het gewenste icoon toe op de knop. Voor meer informatie zie:
            <a href="{base}/components/icons">Iconen</a>.
          </li>
        </ol>

        <h2>Aandachtspunten:</h2>
        <ul>
          <li>
            Icoonknoppen geven geen tekst weer. Voeg wel altijd de knoptekst toe voor gebruikers die
            gebruik maken van hulptechnologiën.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2><code>button</code></h2>
        <h3>Visuele weergave:</h3>

        <button class="icon icon-cat">Lorem ipsum</button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button class="icon icon-cat">Lorem ipsum</button>
`}
        />

        <h2><code>button</code> met <code>img</code></h2>
        <h3>Visuele weergave:</h3>

        <button class="icon">
          Lorem ipsum <img src="$img/cat-white.svg" alt="Kat" />
        </button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button href="{base}/components/button-icon" class="icon">Lorem ipsum <img src="path/to/img.svg" alt="Kat"></button>
`}
        />

        <h2>Link als knop met <code>img</code></h2>
        <h3>Visuele weergave:</h3>

        <a href="{base}/components/button-icon" class="button icon"
          >Lorem ipsum <img src="$img/cat-white.svg" alt="Kat" /></a
        >

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<a href="{base}/components/button-icon" class="button icon">Lorem ipsum <img src="path/to/img.svg" alt="Kat"></a>
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            Knop, hover, active, focus.
            <ul>
              <li>
                <a href="{base}/variables#background-color">background-color</a>
              </li>
              <li><a href="{base}/variables#text-color">text-color</a></li>
              <li>
                <a href="{base}/variables#border-width">border-width</a>
              </li>
              <li>
                <a href="{base}/variables#border-style">border-style</a>
              </li>
              <li>
                <a href="{base}/variables#border-color">border-color</a>
              </li>
              <li>
                <a href="{base}/variables#border-radius">border-radius</a>
              </li>
              <li>
                <a href="{base}/variables#outline-style">outline-style</a>
              </li>
              <li>
                <a href="{base}/variables#outline-color">outline-color</a>
              </li>
              <li>
                <a href="{base}/variables#outline-width">outline-width</a>
              </li>
              <li>
                <a href="{base}/variables#outline-offset">outline-offset</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>
