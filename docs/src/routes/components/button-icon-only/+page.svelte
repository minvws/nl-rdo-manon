<script module>
  export const breadcrumb = "Icoonknoppen zonder achtergrond";
</script>

<script lang="ts">
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

  <article id="button-base" class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Icoonknoppen zonder achtergrond</h1>
        <p>Subtiele knopweergave.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de class <code>icon-only</code> toe aan de knop om gebruik te maken van de visuele weergave
            van een icoonknop zonder achtergrond.
          </li>
          <li>
            Voeg een icoon toe aan de knop. Zie voor meer informatie: <a
              href="{base}/components/button/icon">Icoonknop</a
            >.
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

        <h3>pseudo-element op button</h3>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>

        <h4>Visueel voorbeeld</h4>
        <button class="icon icon-only icon-search" aria-label="Zoeken">Zoeken</button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<button class="icon icon-only icon-search" aria-label="Zoeken">Zoeken</button>`}
        />

        <h3><code>button</code> met <code>span</code></h3>
        <h4>Visueel voorbeeld</h4>
        <button class="icon-only">
          <span class="icon icon-search" aria-hidden="true"></span>Zoeken
        </button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button class="icon-only">
  <span class="icon icon-search" aria-hidden="true"></span>Zoeken
</button>
          `}
        />

        <h3><code>svg</code> binnen een <code>button</code></h3>

        <p>
          Voorbeeld met een svg-icoon uit de <a href="https://tabler.io/icons" rel="external"
            >tabler iconen set</a
          >.
        </p>

        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Als het icoon puur decoratief is, kan deze verborgen worden voor
            screenreader-gebruikers. Dit kan doormiddel van een <code>aria-hidden="true"</code> op de
            svg.
          </li>
          <li>
            Als het icoon informatief is dient deze een kort en duidelijk label te krijgen als
            alternatief voor screenreader-gebruikers. Bijvoorbeeld:
            <code>aria-label="Gebruikersprofiel"</code>. Het icoon dient in dit geval ook
            <code>role="img"</code> te krijgen.
          </li>
        </ul>
        <h4>Visueel voorbeeld</h4>

        <button class="icon-only">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-search"
            aria-hidden="true"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
            /><path d="M21 21l-6 -6" /></svg
          >
          Zoeken
        </button>
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button class="icon-only">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
  </svg>
  Zoeken
</button>
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
<button href="{base}/components/button/icon" class="icon-only">Lorem ipsum <img src="path/to/img.svg" alt="Kat"></button>
`}
        />

        <h2>Link als knop met <code>img</code></h2>
        <h3>Visuele weergave:</h3>

        <a href="{base}/components/button/icon" class="button icon-only"
          >Lorem ipsum <img src="$img/cat.svg" alt="Kat" /></a
        >

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<a href="{base}/components/button/icon" class="button icon-only">Lorem ipsum <img src="path/to/img.svg" alt="Kat"></a>
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
