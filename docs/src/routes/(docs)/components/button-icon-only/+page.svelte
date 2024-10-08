<script context="module">
  export const breadcrumb = "Icoonknoppen zonder achtergrond";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Icoonknoppen zonder achtergrond</title>
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
        <h1>Icoonknoppen zonder achtergrond</h1>
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
            Icoonknoppen zonder achtergrond geven geen tekst weer. Voeg wel altijd de knoptekst toe
            voor gebruikers die gebruik maken van hulptechnologiën.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2><code>button</code></h2>
        <h3>Visuele weergave:</h3>

        <button class="icon-only icon-cat">Lorem ipsum</button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button class="icon-only icon-cat">Lorem ipsum</button>
`}
        />

        <h2><code>button</code> met <code>img</code></h2>
        <h3>Visuele weergave:</h3>

        <button class="icon-only">
          Lorem ipsum <img src="$img/cat.svg" alt="Kat" />
        </button>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<button href="{base}/components/button-icon" class="icon-only">Lorem ipsum <img src="path/to/img.svg" alt="Kat"></button>
`}
        />

        <h2>Link als knop met <code>img</code></h2>
        <h3>Visuele weergave:</h3>

        <a href="{base}/components/button-icon" class="button icon-only"
          >Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></a
        >

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<a href="{base}/components/button-icon" class="button icon-only">Lorem ipsum <img src="path/to/img.svg" alt="Kat"></a>
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
@use "@minvws/manon/button-base";
@use "@minvws/manon/icon";
@use "@minvws/manon/button-icon-only";
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
                <a href="{base}/documentation/variables#background-color">background-color</a>
              </li>
              <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
              <li>
                <a href="{base}/documentation/variables#border-width">border-width</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-style">border-style</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-color">border-color</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#border-radius">border-radius</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#outline-style">outline-style</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#outline-color">outline-color</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#outline-width">outline-width</a>
              </li>
              <li>
                <a href="{base}/documentation/variables#outline-offset">outline-offset</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>
